import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-end p-4">
        <ModeToggle />
      </div>
      <main className="flex-grow py-8 px-6 w-full h-full flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
