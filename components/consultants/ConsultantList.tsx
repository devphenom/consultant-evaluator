import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Consultant } from "@/lib/data/consultants";
import { ConsultantCard } from "./ConsultantCard";
import ConsultantCardSkeleton from "@/components/consultants/ConsultantCardSkeleton";
import ConsultantDetails from "@/components/consultants/ConsultantDetails";
import { useState } from "react";

interface ConsultantListProps {
  consultants: Consultant[];
  isLoading?: boolean;
}

export function ConsultantList({ consultants, isLoading = false }: ConsultantListProps) {
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);

  // show loading skeletons if data is being fetched
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <ConsultantCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // show message if no consultants are found
  if (consultants.length === 0) {
    return (
      <div className="text-center p-8 border border-border rounded-lg">
        <h3 className="font-medium text-lg">No consultants found</h3>
        <p className="text-muted-foreground mt-1">No consultants are available at this time.</p>
      </div>
    );
  }

  // show consultant details if a consultant is selected
  if (selectedConsultant) {
    return (
      <div className="space-y-6 ">
        <Button variant="outline" onClick={() => setSelectedConsultant(null)} className="mb-4">
          <ArrowLeft /> Back to results
        </Button>
        <ConsultantDetails consultant={selectedConsultant} />
      </div>
    );
  }

  // show list of consultants
  return (
    <div className="space-y-4">
      {consultants.map((consultant) => (
        <ConsultantCard key={consultant.id} consultant={consultant} onClick={() => setSelectedConsultant(consultant)} />
      ))}
    </div>
  );
}
