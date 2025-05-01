import { EvaluationResponse, evaluateConsultants } from "@/lib/api";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ConsultantList } from "@/components/consultants/ConsultantList";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/layout/MetaTags";
import { consultants } from "@/lib/data/consultants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function ResultsPage() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState<string>("");

  const { jobDescription } = router.query;
  const hasJobDescription = typeof jobDescription === "string";

  // Set job title if available
  useEffect(() => {
    if (typeof router.query.jobTitle === "string") {
      setJobTitle(router.query.jobTitle);
    }

    if (!hasJobDescription) {
      router.push("/");
    }
  }, [router.query.jobTitle, hasJobDescription, router]);

  const { data, isLoading, error } = useQuery<EvaluationResponse>({
    queryKey: ["consultantEvaluation", jobDescription, jobTitle],
    queryFn: () =>
      evaluateConsultants({
        jobTitle: jobTitle || "",
        jobDescription: jobDescription as string,
        consultants,
      }),
    enabled: hasJobDescription,
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 35 * 60 * 1000, // 35 minutes
  });

  const aiResults = data?.consultants || [];
  const errorMessage = error instanceof Error ? error.message : "Unknown error";

  const handleNewSearch = () => {
    router.push("/");
  };

  return (
    <>
      <MetaTags title="Results | Consultant Evaluator" description="View consultants that match your requirements" />
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Consultant Evaluator</h1>
          {jobTitle && <p className="mt-2 text-xl font-medium">{jobTitle}</p>}
          <p className="mt-1 text-gray-400 max-w-2xl mx-auto">Browse consultants matching your requirements</p>
        </div>

        {isLoading ? (
          <div className="mt-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">Evaluating consultants...</h3>
              <p className="text-sm text-muted-foreground mt-1">Analyzing skills, experience, and expertise with AI...</p>
            </div>
            <ConsultantList consultants={consultants} isLoading={true} />
          </div>
        ) : error ? (
          <div className="mt-8 text-center">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded border border-red-300">
              <strong>Error:</strong> {errorMessage}
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h2 className="text-2xl font-bold">Matched Consultants</h2>
                <p className="text-muted-foreground">Found {consultants.length} consultants that match your requirements.</p>
              </div>
              <Button variant="outline" onClick={handleNewSearch}>
                New Search
              </Button>
            </div>
            <ConsultantList consultants={aiResults} isLoading={isLoading} />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
