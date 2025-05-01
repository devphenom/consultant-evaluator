import { Search, XCircle } from "lucide-react";
import { memo, useCallback } from "react";

import { Button } from "@/components/ui/button";
import { CustomSelect } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface ConsultantFilterProps {
  searchTerm: string;
  filterLocation: string;
  filterRate: string;
  locations: string[];
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onRateChange: (value: string) => void;
  onResetFilters: () => void;
  resultsCount: number;
  hasFiltersApplied: boolean;
}

export const ConsultantFilter = memo(function ConsultantFilter({
  searchTerm,
  filterLocation,
  filterRate,
  locations,
  onSearchChange,
  onLocationChange,
  onRateChange,
  onResetFilters,
  resultsCount,
  hasFiltersApplied,
}: ConsultantFilterProps) {
  // Use callbacks for event handlers to prevent recreation on each render
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearchChange(e.target.value);
    },
    [onSearchChange]
  );

  const handleLocationChange = useCallback(
    (e: string) => {
      onLocationChange(e);
    },
    [onLocationChange]
  );

  const handleRateChange = useCallback(
    (e: string) => {
      onRateChange(e);
    },
    [onRateChange]
  );

  return (
    <div className="space-y-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-grow flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search consultants..." className="pl-10" value={searchTerm} onChange={handleSearchChange} />
        </div>

        {/* Location Filter */}
        <CustomSelect
          triggerClassName="w-full md:w-[unset]"
          options={locations.map((location) => ({ label: location, value: location }))}
          placeholder="All Locations"
          defaultValue=""
          value={filterLocation}
          onValueChange={handleLocationChange}
        />

        {/* Rate Filter */}
        <CustomSelect
          triggerClassName="w-full md:w-[unset]"
          options={[
            { label: "Under $100/hr", value: "under100" },
            { label: "$100 - $150/hr", value: "100to150" },
            { label: "Over $150/hr", value: "over150" },
          ]}
          placeholder="All Rates"
          defaultValue=""
          value={filterRate}
          onValueChange={handleRateChange}
        />
      </div>

      {/* Filter Summary and Reset btn */}
      <div className="flex justify-between items-center text-sm">
        <div className="text-muted-foreground">
          {resultsCount} consultant{resultsCount !== 1 ? "s" : ""} found
        </div>
        {hasFiltersApplied && (
          <Button variant="ghost" size="sm" onClick={onResetFilters} className="gap-2 h-8">
            <XCircle className="h-4 w-4" />
            Reset Filters
          </Button>
        )}
      </div>
    </div>
  );
});
