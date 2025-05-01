import { CircleDollarSign, MapPin, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Consultant } from "@/lib/data/consultants";
import Image from "next/image";

interface ConsultantCardProps {
  consultant: Consultant;
  onClick?: () => void;
}

export function ConsultantCard({ consultant, onClick }: ConsultantCardProps) {
  return (
    <div className="p-3 space-y-2 border border-border rounded-lg overflow-hidden hover:border-primary transition-transform duration-1000 ease-in-out cursor-pointer hover:scale-102" onClick={onClick}>
      {/* profile and score */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-left">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-muted relative">
            <Image src={consultant.avatar || "https://via.placeholder.com/100?text=Consultant"} alt={consultant.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold">{consultant.name}</h3>
            <p className="text-sm text-muted-foreground">{consultant.title}</p>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Star fill="currentColor" className="text-yellow-400 w-4 h-4 mr-1" /> {consultant.rating}
          </div>
        </div>
      </div>
      {/* location, rate, and no of projects */}
      <div className="space-y-2">
        <div className="flex items-center text-sm gap-2">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="text-muted-foreground">{consultant.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <CircleDollarSign className="w-4 h-4" />
            <span className="text-muted-foreground">${consultant.hourlyRate}/hr</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="ml-1 text-sm">{consultant.totalProjects} projects</span>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="text-left">
        <div className="text-sm font-medium mb-1">Skills:</div>
        <div className="flex flex-wrap gap-1">
          {consultant.skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-xs">
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
      {/* bio */}
      <div className="text-left text-sm text-muted-foreground line-clamp-2">{consultant.bio}</div>
    </div>
  );
}
