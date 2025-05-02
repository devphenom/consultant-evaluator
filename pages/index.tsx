"use client";

import Footer from "@/components/layout/Footer";
import { JobDescriptionForm } from "@/components/JobDescriptionForm";
import MetaTags from "@/components/layout/MetaTags";
import ScrollToTop from "@/components/ScrollToTop";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (jobData: { title: string; description: string }) => {
    router.push({
      pathname: "/results",
      query: {
        jobTitle: jobData.title,
        jobDescription: jobData.description,
      },
    });
  };

  return (
    <>
      <MetaTags title="Home | Consultant Evaluator" />

      <div className="max-w-4xl w-full ">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Consultant Evaluator</h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">Find and evaluate consultants that match your requirements</p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <JobDescriptionForm onSubmit={handleSubmit} />
        </div>

        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
