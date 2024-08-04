import { useState, useLayoutEffect } from "react";

// This hook determine the current view is mobile/tablet or desktop
export const useWindowSize = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile ? "mobile" : "desktop";
};
