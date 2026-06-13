import { createFileRoute } from "@tanstack/react-router";

import { useState, useEffect } from "react";
import { Gift, ChevronRight, X } from "lucide-react";

export const Route = createFileRoute("/lucky-draw")({
  component: LuckyDrawPage,
});

function LuckyDrawPage() {
  const [isLuckyDrawModalOpen, setIsLuckyDrawModalOpen] = useState(false);
  const [isContestFinished, setIsContestFinished] = useState(false);

  useEffect(() => {
    const expiryDate = new Date("2026-08-16T00:00:00");
    setIsContestFinished(new Date() >= expiryDate);
  }, []);

  const handleLuckyDrawClick = () => {
    setIsLuckyDrawModalOpen(true);

    const fireConfetti = () => {
      if ((window as any).confetti) {
        (window as any).confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D4AF37", "#F5F5DC", "#004225", "#B8860B"],
        });
      }
    };

    if (!(window as any).confetti) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js";
      script.onload = fireConfetti;
      document.body.appendChild(script);
    } else {
      fireConfetti();
    }
  };

  return (
    <>
      <div className="pt-24 pb-32 px-4 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-black text-ink mb-4">Lucky Draw Contests</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">Participate in our exclusive lucky draws and win life-changing prizes while investing in your dream home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              onClick={handleLuckyDrawClick}
              className="bg-paper border border-khaki/20 rounded-3xl hover:border-gold hover:scale-[1.03] hover:-translate-y-3 hover:shadow-[0_20px_50px_-12px_rgba(182,157,130,0.2)] transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src="/assets/villas/premium-plot-2.png" alt="Lucky Draw Prize" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  {isContestFinished ? (
                    <span className="bg-muted text-muted-foreground text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-border">Finished</span>
                  ) : (
                    <span className="bg-gold text-forest-deep text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">Open Now</span>
                  )}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6 bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Gift size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors text-ink">Premium Plot Lucky Draw</h3>
                <p className="text-ink/60 text-sm mb-6">Win a premium 165 Square Yards plot at Alair. Entry fee only ₹1,000 per token. 100% Loan available for construction.</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gold/10">
                  <div>
                    <p className="text-[10px] text-gold/60 uppercase font-black tracking-widest mb-1">Draw Date</p>
                    <p className="font-bold text-ink">15 August 2026</p>
                  </div>
                  <div className="bg-gold text-forest-deep p-2 rounded-lg">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LUCKY DRAW MODAL */}
      {isLuckyDrawModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl border border-gold/30 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsLuckyDrawModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-ink/60 text-cream p-2 rounded-full hover:bg-gold hover:text-forest-deep transition-all border border-cream/10"
            >
              <X size={24} />
            </button>
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              <img 
                src="/assets/villas/premium-plot-2.png" 
                alt="Mega Lucky Draw Contest" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
