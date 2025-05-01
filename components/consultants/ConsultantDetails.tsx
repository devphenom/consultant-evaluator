import { Button } from "@/components/ui/button";
import { Consultant } from "@/lib/data/consultants";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

const ConsultantDetails = ({ consultant }: { consultant: Consultant }) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      {/* profile */}
      <div className="flex items-center gap-2 p-4">
        <div className="h-20 w-20 rounded-full overflow-hidden bg-muted">
          <Image
            src={consultant.avatar}
            alt={consultant.name}
            className="h-full w-full object-cover"
            width={80}
            height={80}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/100?text=Consultant";
            }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{consultant.name}</h2>
          <p className="text-muted-foreground">{consultant.title}</p>
        </div>
      </div>
      {/*  location, rate, and no of projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border p-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Location</p>
          <p>{consultant.location}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Hourly Rate</p>
          <p>${consultant.hourlyRate}/hr</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Availability</p>
          <p>{consultant.availability}</p>
        </div>
      </div>
      {/* bio */}
      <div className="border-t border-border p-4">
        <h3 className="font-semibold mb-2">Bio</h3>
        <p className="text-sm">{consultant.bio}</p>
      </div>
      {/* skills */}
      <div className="border-t border-border p-4">
        <h3 className="font-semibold mb-2">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {consultant.skills.map((skill) => (
            <div key={skill.name} className="flex justify-between items-center text-sm border border-border rounded-md p-2">
              <span>{skill.name}</span>
              <span className="text-muted-foreground">
                {skill.level} {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? "year" : "years"}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* work experience */}
      <div className="border-t border-border p-4">
        <h3 className="font-semibold mb-2">Work Experience</h3>
        <div className="space-y-4">
          {consultant.experiences.map((experience, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <h4 className="font-medium">{experience.role}</h4>
                <span className="text-sm text-muted-foreground">{experience.duration}</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">{experience.company}</p>
              <p className="text-sm">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* education */}
      <div className="border-t border-border p-4">
        <h3 className="font-semibold mb-2">Education</h3>
        <ul className="list-disc list-inside space-y-1">
          {consultant.education.map((edu, index) => (
            <li key={index} className="text-sm">
              {edu}
            </li>
          ))}
        </ul>
      </div>
      {/* rating and contact button */}
      <div className="border-t border-border p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Star fill="currentColor" className="text-yellow-400" />
          <span className="ml-1 font-medium">{consultant.rating} rating</span>
          <span className="mx-2">•</span>
          <span>{consultant.totalProjects} projects completed</span>
        </div>
        <Button>Contact Consultant</Button>
      </div>
    </div>
  );
};

export default ConsultantDetails;
