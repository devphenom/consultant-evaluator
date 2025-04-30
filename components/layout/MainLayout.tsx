import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col text-center ">
      <div className="flex justify-end p-4">
        <ModeToggle />
      </div>
      <main className="flex-grow py-8 px-6 w-full h-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-black dark:text-white text-5xl">Consultant Evaluator</h1>
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <footer className="border-t border-border py-6 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} devphenom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
