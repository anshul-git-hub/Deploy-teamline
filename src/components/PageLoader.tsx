import { useState, useEffect } from "react";

export function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 1200);
    
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1900);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  const text = "TEAM LINE ECO RESORT";

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-forest-deep transition-opacity duration-700 ${!visible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-5xl font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] flex flex-wrap justify-center px-4">
          {text.split(" ").map((word, wordIndex, wordsArr) => {
            const previousCharsCount = wordsArr.slice(0, wordIndex).join("").length;
            return (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
                {word.split("").map((char, i) => (
                  <span 
                    key={i} 
                    className="inline-block opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${0.2 + (previousCharsCount + i) * 0.04}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </h1>
        <div className="mt-8 h-[2px] w-48 mx-auto bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-khaki to-transparent animate-[shimmer_2s_infinite_linear]" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
      </div>
    </div>
  );
}
