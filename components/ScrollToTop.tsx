import React, { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Throttled scroll handler to improve performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if ((currentScrollY > 300 && !showScrollTop) || (currentScrollY <= 300 && showScrollTop)) {
      setShowScrollTop(currentScrollY > 300);
    }
  }, [showScrollTop]);

  useEffect(() => {
    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

    const throttledScrollHandler = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100); // Throttle to once every 100ms
      }
    };

    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [handleScroll]);

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
