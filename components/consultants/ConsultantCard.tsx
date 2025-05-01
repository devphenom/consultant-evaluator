import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Check, CircleDollarSign, FileQuestion, MapPin, Star, X } from "lucide-react";

import { Consultant } from "@/lib/data/consultants";
import { Separator } from "@/components/ui/separator";

interface ConsultantCardProps {
  consultant: Consultant;
  onClick?: () => void;
}

export function ConsultantCard({ consultant, onClick }: ConsultantCardProps) {
  const firstInitial = consultant.name.charAt(0);

  return (
    <Card className="gradient-card p-4 space-y-3 border border-border hover:border-primary transition-all duration-300 ease-in-out cursor-pointer overflow-hidden" onClick={onClick}>
      <CardContent className="p-0 space-y-3">
        {/* profile and score */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-left">
            <Avatar className="h-14 w-14 shadow-md">
              <AvatarImage src={consultant.avatar || "https://via.placeholder.com/100?text=Consultant"} alt={consultant.name} />
              <AvatarFallback>{firstInitial}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{consultant.name}</h3>
              <p className="text-sm text-muted-foreground">{consultant.title}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="match-badge inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium">
              <Star fill="currentColor" className="text-yellow-300 w-4 h-4 mr-1" /> {consultant.fitScore !== undefined ? `${consultant.fitScore}%` : "-"}
            </div>
          </div>
        </div>

        {/* divider */}
        <Separator className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-2" />

        {/* location, rate, and no of projects */}
        <div className="space-y-2">
          <div className="flex items-center text-sm gap-2 justify-between flex-wrap">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-muted-foreground">{consultant.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <CircleDollarSign className="w-4 h-4 text-green-500" />
              <span className="text-muted-foreground">${consultant.hourlyRate}/hr</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium">{consultant.totalProjects} projects</span>
            </div>
          </div>
        </div>

        {/* bio */}
        <div className="text-left text-sm text-muted-foreground line-clamp-2">{consultant.bio}</div>

        {/* AI Evaluation Fields */}
        {consultant.evaluation && (
          <div className="mt-2 text-sm p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
            <span className="font-semibold text-blue-700 dark:text-blue-300">Summary: </span>
            <span className="text-muted-foreground">{consultant.evaluation}</span>
          </div>
        )}

        {(consultant.pros || consultant.cons) && (
          <div className="mt-2 flex flex-col md:flex-row gap-4">
            {consultant.pros && (
              <div className="flex-1">
                <span className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Pros:
                </span>
                <ul className="mt-1 space-y-1">
                  {consultant.pros.map((pro: string, idx: number) => (
                    <li key={idx} className="pro-item text-sm">
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {consultant.cons && (
              <div className="flex-1">
                <span className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  Cons:
                </span>
                <ul className="mt-1 space-y-1">
                  {consultant.cons.map((con: string, idx: number) => (
                    <li key={idx} className="con-item text-sm">
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {consultant.questions && consultant.questions.length > 0 && (
          <div className="mt-2">
            <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <FileQuestion className="w-4 h-4" />
              Suggested Questions:
            </span>
            <ul className="mt-1 space-y-1">
              {consultant.questions.map((q: string, idx: number) => (
                <li key={idx} className="question-item text-sm">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
