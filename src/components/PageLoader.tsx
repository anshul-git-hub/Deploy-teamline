import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reset state on route change to trigger animation
    setMounted(true);
    setVisible(true);

    // Fast transition to prevent lag
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 700);
    
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1200);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [location.pathname]);

  if (!mounted) return null;

  const text = "TEAM LINE ECO RESORT";

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-forest-deep transition-opacity duration-500 ${!visible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-5xl font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] flex flex-wrap justify-center px-4">
          {text.split(" ").map((word, wordIndex, wordsArr) => {
            const previousCharsCount = wordsArr.slice(0, wordIndex).join("").length;
            return (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
                {word.split("").map((char, i) => (
                  <span 
                    key={i} 
                    className="inline-block opacity-0 animate-[fade-in-up_0.4s_ease-out_forwards]"
                    style={{ animationDelay: `${(previousCharsCount + i) * 0.02}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </h1>
        <div className="mt-8 h-[2px] w-48 mx-auto bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-khaki to-transparent animate-[shimmer_1s_infinite_linear]" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
      </div>
    </div>
  );
}
