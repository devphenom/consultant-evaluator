import React from "react";

const ConsultantCardSkeleton = () => {
  return (
    <div className="border border-border rounded-lg p-6 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="flex space-x-4">
          <div className="h-12 w-12 rounded-full bg-muted" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-32" />
            <div className="h-3 bg-muted rounded w-24" />
          </div>
        </div>
        <div className="h-6 bg-muted rounded w-20" />
      </div>
      <div className="mt-4 space-y-3">
        <div className="h-3 bg-muted rounded w-full" />
        <div className="h-3 bg-muted rounded w-3/4" />
      </div>
    </div>
  );
};

export default ConsultantCardSkeleton;
