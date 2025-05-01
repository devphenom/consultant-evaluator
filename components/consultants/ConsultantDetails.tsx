import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, Check, CheckCircle, CircleDollarSign, FileQuestion, GraduationCap, MapPin, Star, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Consultant } from "@/lib/data/consultants";
import React from "react";

const ConsultantDetails = ({ consultant }: { consultant: Consultant }) => {
  const firstInitial = consultant.name.charAt(0);

  return (
    <Card className="overflow-hidden gradient-card py-0">
      {/* profile header with gradient background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90" />
        <div className="relative z-10 flex items-center gap-4 p-6">
          <Avatar className="h-24 w-24 rounded-full bg-white shadow-lg ring-4 ring-white">
            <AvatarImage src={consultant.avatar || "https://via.placeholder.com/100?text=Consultant"} alt={consultant.name} className="h-full w-full object-cover" />
            <AvatarFallback className="text-xl">{firstInitial}</AvatarFallback>
          </Avatar>
          <div className="text-white">
            <h2 className="text-2xl font-bold">{consultant.name}</h2>
            <p className="text-white/80">{consultant.title}</p>
            {consultant.fitScore !== undefined && (
              <div className="mt-2 flex items-center">
                <div className="match-badge inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium">
                  <Star fill="currentColor" className="text-yellow-300 w-4 h-4 mr-1" />
                  <span className="font-bold">{consultant.fitScore}%</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  location, rate, and availability */}
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border p-6 bg-card/30">
        <div className="space-y-1 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">{consultant.location}</p>
          </div>
        </div>
        <div className="space-y-1 flex items-center gap-2">
          <CircleDollarSign className="w-5 h-5 text-green-500" />
          <div>
            <p className="text-sm text-muted-foreground">Hourly Rate</p>
            <p className="font-medium">${consultant.hourlyRate}/hr</p>
          </div>
        </div>
        <div className="space-y-1 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-500" />
          <div>
            <p className="text-sm text-muted-foreground">Availability</p>
            <p className="font-medium">{consultant.availability}</p>
          </div>
        </div>
      </CardContent>

      {/* bio and evaluation */}
      <CardContent className="border-t border-border p-6">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <span className="h-6 w-1 bg-blue-500 rounded-full" />
            Bio
          </h3>
          <p className="text-sm">{consultant.bio}</p>
        </div>

        {consultant.evaluation && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <CheckCircle className="w-4 h-4" />
              Evaluation
            </h4>
            <p className="text-sm text-muted-foreground">{consultant.evaluation}</p>
          </div>
        )}

        {/* pros and cons with cards */}
        {(consultant.pros || consultant.cons) && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {consultant.pros && (
              <div className="p-4 border border-green-100 dark:border-green-900/30 rounded-lg bg-green-50 dark:bg-green-900/10">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-green-700 dark:text-green-400">
                  <Check className="w-4 h-4" />
                  Pros
                </h4>
                <ul className="space-y-2">
                  {consultant.pros.map((pro, idx) => (
                    <li key={idx} className="pro-item text-sm flex items-start gap-2">
                      <span className="inline-flex items-center justify-center p-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {consultant.cons && (
              <div className="p-4 border border-red-100 dark:border-red-900/30 rounded-lg bg-red-50 dark:bg-red-900/10">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-red-700 dark:text-red-400">
                  <X className="w-4 h-4" />
                  Cons
                </h4>
                <ul className="space-y-2">
                  {consultant.cons.map((con, idx) => (
                    <li key={idx} className="con-item text-sm flex items-start gap-2">
                      <X className="w-3 h-3" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* suggested questions */}
        {consultant.questions && consultant.questions.length > 0 && (
          <div className="mb-6 p-4 border border-blue-100 dark:border-blue-900/30 rounded-lg bg-blue-50 dark:bg-blue-900/10">
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <FileQuestion />
              Suggested Questions
            </h4>
            <ul className="space-y-3">
              {consultant.questions.map((q, idx) => (
                <li key={idx} className="question-item text-sm p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-md transition-all">
                  <span className="inline-block w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-center font-medium mr-2">{idx + 1}</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      {/* work experience */}
      <CardContent className="border-t border-border p-6 bg-card/50">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-500" />
          Work Experience
        </h3>
        <div className="space-y-6">
          {consultant.experiences.map((experience, index) => (
            <div key={index} className="p-4 border border-border rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-base">{experience.role}</h4>
                <span className="text-sm text-white bg-blue-600 dark:bg-blue-800 px-2 py-0.5 rounded-full">{experience.duration}</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground mt-1">{experience.company}</p>
              <p className="text-sm mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </CardContent>

      {/* education */}
      <CardContent className="border-t border-border p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          Education
        </h3>
        <ul className="space-y-2">
          {consultant.education.map((edu, index) => (
            <li key={index} className="flex items-center gap-2 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-md transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm">{edu}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* contact button with call to action */}
      <CardFooter className="border-t border-border p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Star fill="currentColor" className="text-yellow-400" />
            <span className="ml-1 font-medium">{consultant.fitScore !== undefined ? `${consultant.fitScore}%` : "-"}</span>
          </div>
          <span className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1 text-blue-500" />
            <span>{consultant.totalProjects} projects completed</span>
          </span>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg pulse-animation">Contact Consultant</Button>
      </CardFooter>
    </Card>
  );
};

export default ConsultantDetails;
