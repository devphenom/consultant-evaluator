import Head from "next/head";
import { JobDescriptionForm } from "@/components/JobDescriptionForm";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (description: string) => {
    try {
      console.log(description);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Consultant Evaluator | Find the Right Consultant</title>
        <meta name="description" content="Evaluate consultants based on job descriptions using AI-powered analysis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-10 md:gap-16">
        <section className="w-full max-w-4xl mx-auto">
          <JobDescriptionForm onSubmit={handleSubmit} isLoading={isLoading} />
        </section>
      </div>
    </>
  );
}
