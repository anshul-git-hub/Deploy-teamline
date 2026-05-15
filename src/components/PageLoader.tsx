import { useState, useEffect } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const text = "TEAM LINE ECO RESORT";

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-forest-deep transition-opacity duration-700 ${!visible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-black tracking-[0.3em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          {text.split("").map((char, i) => (
            <span 
              key={i} 
              className="inline-block opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + i * 0.04}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="mt-8 h-[2px] w-48 mx-auto bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-khaki to-transparent animate-[shimmer_2s_infinite_linear]" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
      </div>
    </div>
  );
}
