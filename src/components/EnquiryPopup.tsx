import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });

  useEffect(() => {
    let hasShown = false;
    try {
      hasShown = !!sessionStorage.getItem("enquiry_popup_shown");
    } catch (e) {
      console.warn("sessionStorage is not available:", e);
    }
    if (hasShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem("enquiry_popup_shown", "true");
      } catch (e) {
        console.warn("Failed to save to sessionStorage:", e);
      }
    }, 30000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setOpen(true);
        try {
          sessionStorage.setItem("enquiry_popup_shown", "true");
        } catch (e) {
          console.warn("Failed to save to sessionStorage:", e);
        }
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Team Line, I would like to book a FREE site visit for Team Line Eco Resort. My name is ${form.name}, Phone: ${form.phone}`;
    window.open(`https://wa.me/919494291924?text=${encodeURIComponent(msg)}`, "_blank");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-card w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative">
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-forest transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="bg-forest-deep p-8 text-center text-cream">
          <h2 className="text-3xl font-black">🏡 Get a FREE Site Visit!</h2>
          <p className="mt-2 text-gold font-medium">Talk to our expert about Team Line Eco Resort</p>
        </div>
        
        <form onSubmit={submit} className="p-8 space-y-4">
          <div>
            <label className="block text-sm font-bold text-forest mb-1">Your Name</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="e.g. Rajesh Kumar"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-forest mb-1">Phone Number</label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-input rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="e.g. 9876543210"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-500 text-white font-black py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> Book Site Visit via WhatsApp
          </button>
          
          <button 
            type="button"
            onClick={() => setOpen(false)}
            className="w-full text-center text-xs text-muted-foreground hover:underline"
          >
            ✕ Close
          </button>
        </form>
      </div>
    </div>
  );
}
