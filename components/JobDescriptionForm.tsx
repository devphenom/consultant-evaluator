import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface JobDescriptionFormProps {
  onSubmit: (jobDescription: string) => void;
  isLoading?: boolean;
}

export function JobDescriptionForm({ onSubmit, isLoading = false }: JobDescriptionFormProps) {
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobDescription.trim()) {
      onSubmit(jobDescription);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-muted-foreground text-2xl">Find the right consultant</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="job-description" className="text-lg">
            Job Description
          </Label>
          <Textarea
            id="job-description"
            placeholder="Enter a job description to find and evaluate consultants that match your requirements..."
            className="min-h-[200px] w-full"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
          <p className="text-xs text-muted-foreground text-left">Be specific about required skills, experience level, and responsibilities for better matches.</p>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading || !jobDescription.trim()} className="w-full sm:w-auto">
            {isLoading ? "Analyzing..." : "Find Consultants"}
          </Button>
        </div>
      </form>
    </div>
  );
}
