import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showScrollTop && (
        <Button className="fixed bottom-6 right-6 rounded-full h-12 w-12 shadow-lg" onClick={scrollToTop} aria-label="Scroll to top">
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
