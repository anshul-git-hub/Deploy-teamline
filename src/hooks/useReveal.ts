import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Short timeout to ensure DOM is ready after route change
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);
}
