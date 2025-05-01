import { Consultant, consultants } from "@/lib/data/consultants";
import type { NextApiRequest, NextApiResponse } from "next";

import OpenAI from "openai";
import { jsonrepair } from "jsonrepair";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  baseURL: "https://models.inference.ai.azure.com/",
});

// Function to process consultants in batches
async function evaluateConsultantsBatch(jobDescription: string, consultantsToEvaluate: Consultant[]): Promise<Consultant[]> {
  // Process consultants in batches of 5 to avoid token limits
  const prompt = `Given the following job description, evaluate the fit of each consultant.\n\nJob Description:\n${jobDescription}\n\nConsultants:\n${JSON.stringify(
    consultantsToEvaluate,
    null,
    2
  )}\n\nFor each consultant, provide a short evaluation, pros and cons of each consultant, a fit score (0-100), and two suggested questions for the consultant.\n\nThis information is very important: double check and remove all markdown tags in your response. Your response should be in a valid JSON array of objects.\n`;

  const strictJsonSystemPrompt =
    "You must respond ONLY with a valid JSON array of objects. All property names and string values must use double quotes. Do not include any markdown, explanation, or extra text. The response must be valid JSON parsable by JSON.parse in JavaScript.";

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          strictJsonSystemPrompt +
          " You are an expert technical evaluator. Your task is to evaluate the fit of each consultant based on the provided job description. Ensure that your evaluation is thorough and includes all necessary details. Maintain a professional tone and provide clear, concise feedback. Your response should be in an array of objects format without any markdown tags.",
      },
      { role: "user", content: prompt },
    ],
    max_tokens: 1000,
    temperature: 1,
    stream: false,
  });

  const aiResults = completion.choices[0]?.message?.content || null;

  try {
    // Try to parse aiResults as JSON
    return aiResults ? JSON.parse(aiResults) : [];
  } catch (e) {
    console.error("Error parsing AI results: ", e);
    try {
      // repair the JSON using jsonrepair and parse again
      const repaired = aiResults ? jsonrepair(aiResults) : null;
      return repaired ? JSON.parse(repaired) : [];
    } catch (e2) {
      console.error("Error parsing AI results after jsonrepair: ", e2);
      return [];
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { jobDescription } = req.body;
  if (!jobDescription) {
    return res.status(400).json({ error: "Missing job description" });
  }

  try {
    // get job domain from job description
    const domainPrompt = `Given the following job description, extract the main job domain or subfield as a job title (e.g., Software Engineer, Data Scientist, Cybersecurity Specialist, Civil Engineer, etc). Respond with only the job title as a plain string, no extra text, no markdown.`;
    const domainCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert at extracting job titles from descriptions. Respond with only the job title as a plain string, no extra text.",
        },
        { role: "user", content: `${domainPrompt}\n\nJob Description:\n${jobDescription}` },
      ],
      max_tokens: 20,
      temperature: 0,
      stream: false,
    });

    const jobDomain = domainCompletion.choices[0]?.message?.content?.trim() || "";

    // Update consultants' titles to the job domain
    const updatedConsultants = (consultants || []).map((consultant: Consultant) => ({
      ...consultant,
      title: jobDomain,
    }));

    // Process consultants in batches of 5 for better evaluation
    const BATCH_SIZE = 5;
    const batches = [];

    for (let i = 0; i < updatedConsultants.length; i += BATCH_SIZE) {
      batches.push(updatedConsultants.slice(i, i + BATCH_SIZE));
    }

    // Evaluate each batch
    let allEvaluations: Consultant[] = [];
    for (const batch of batches) {
      const batchEvaluations = await evaluateConsultantsBatch(jobDescription, batch);
      allEvaluations = [...allEvaluations, ...batchEvaluations];
    }

    // Merge evaluations with consultants
    const mergedConsultants = updatedConsultants.map((consultant: Consultant, idx: number) => ({
      ...consultant,
      ...(allEvaluations[idx] || {}),
    }));

    res.status(200).json({
      jobDescription,
      jobDomain,
      consultants: mergedConsultants,
    });
  } catch (error) {
    res.status(500).json({ error: "AI evaluation failed", details: error instanceof Error ? error.message : error });
  }
}
