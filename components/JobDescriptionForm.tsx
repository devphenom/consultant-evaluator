import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface JobDescriptionFormProps {
  onSubmit: (jobData: { title: string; description: string }) => void;
}

export function JobDescriptionForm({ onSubmit }: JobDescriptionFormProps) {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Resize the textarea based on its content
  const resizeTextarea = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  // Resize on component mount and when job description changes
  useEffect(() => {
    resizeTextarea();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobDescription]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!!jobDescription.trim()) {
      onSubmit({
        title: jobTitle.trim(),
        description: jobDescription.trim(),
      });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="job-title">Job Title</Label>
            <Input id="job-title" placeholder="Enter job title (optional)" className="w-full" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="job-description">Job Description</Label>
            <Textarea
              id="job-description"
              placeholder="Please enter a job description..."
              className="min-h-auto w-full overflow-hidden border-2 border-gray-800"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              ref={textareaRef}
              required
            />
            <p className="text-xs text-muted-foreground text-left">Be specific about required skills, experience level, and responsibilities for better matches.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={!jobDescription.trim()} className="w-full sm:w-auto">
            Find Consultants
          </Button>
        </div>
      </form>
    </div>
  );
}
