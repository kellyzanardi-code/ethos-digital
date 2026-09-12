import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";

export function PageViewTracker() {
  const location = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return; // o snippet base já disparou PageView no carregamento
    }
    window.fbq?.("track", "PageView");
  }, [location.href]);

  return null;
}
