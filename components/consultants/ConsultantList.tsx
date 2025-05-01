import { memo, useCallback, useMemo, useState } from "react";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Consultant } from "@/lib/data/consultants";
import { ConsultantCard } from "./ConsultantCard";
import ConsultantCardSkeleton from "./ConsultantCardSkeleton";
import ConsultantDetails from "./ConsultantDetails";
import { ConsultantFilter } from "./ConsultantFilter";

interface ConsultantListProps {
  consultants: Consultant[];
  isLoading?: boolean;
}

// Create memoized components for better performance
const MemoizedConsultantCard = memo(ConsultantCard);
const MemoizedConsultantDetails = memo(ConsultantDetails);

export function ConsultantList({ consultants, isLoading = false }: ConsultantListProps) {
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [filterRate, setFilterRate] = useState<string>("");

  // Get unique locations for the filter dropdown - memoized to prevent recalculation
  const locations = useMemo(() => [...new Set(consultants.map((c) => c.location))], [consultants]);

  // Filter consultants based on search and filters - memoized to prevent recalculation
  const filteredConsultants = useMemo(() => {
    return consultants.filter((consultant) => {
      const matchesSearch =
        searchTerm === "" ||
        consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultant.bio.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = filterLocation === "" || consultant.location === filterLocation;

      const matchesRate =
        filterRate === "" ||
        (filterRate === "under100" && consultant.hourlyRate < 100) ||
        (filterRate === "100to150" && consultant.hourlyRate >= 100 && consultant.hourlyRate <= 150) ||
        (filterRate === "over150" && consultant.hourlyRate > 150);

      return matchesSearch && matchesLocation && matchesRate;
    });
  }, [consultants, searchTerm, filterLocation, filterRate]);

  const hasFiltersApplied = useMemo(() => searchTerm !== "" || filterLocation !== "" || filterRate !== "", [searchTerm, filterLocation, filterRate]);

  // Use callbacks for event handlers to prevent recreation on each render
  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setFilterLocation("");
    setFilterRate("");
  }, []);

  const handleSelectConsultant = useCallback((consultant: Consultant) => {
    setSelectedConsultant(consultant);
  }, []);

  const handleBackToResults = useCallback(() => {
    setSelectedConsultant(null);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <ConsultantCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (consultants.length === 0) {
    return (
      <div className="text-center p-8 border border-border rounded-lg bg-card/30">
        <h3 className="text-lg font-medium mb-2">No consultants found</h3>
        <p className="text-muted-foreground">Try adjusting your search criteria or job description.</p>
      </div>
    );
  }

  if (selectedConsultant) {
    return (
      <div className="space-y-6">
        <Button variant="outline" onClick={handleBackToResults} className="mb-4 group flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to results</span>
        </Button>
        <MemoizedConsultantDetails consultant={selectedConsultant} />
      </div>
    );
  }

  return (
    <>
      {/* Search and Filters */}
      <ConsultantFilter
        searchTerm={searchTerm}
        filterLocation={filterLocation}
        filterRate={filterRate}
        locations={locations}
        onSearchChange={setSearchTerm}
        onLocationChange={setFilterLocation}
        onRateChange={setFilterRate}
        onResetFilters={resetFilters}
        resultsCount={filteredConsultants.length}
        hasFiltersApplied={hasFiltersApplied}
      />

      {/* Consultant cards */}
      {filteredConsultants.length === 0 ? (
        <div className="text-center p-8 border border-border rounded-lg bg-card/30">
          <h3 className="text-lg font-medium mb-2">No consultants match your filters</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
          <Button variant="outline" className="mt-4" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredConsultants.map((consultant) => (
            <MemoizedConsultantCard key={consultant.id} consultant={consultant} onClick={() => handleSelectConsultant(consultant)} />
          ))}
        </div>
      )}
    </>
  );
}
