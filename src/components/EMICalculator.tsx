import { useState, useEffect } from "react";
import { company } from "@/lib/data";

interface Props {
  defaultAmount?: number;
}

export function EMICalculator({ defaultAmount = 4500000 }: Props) {
  const [amount, setAmount] = useState(defaultAmount);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    setEmi(Math.round(emiValue));
    setTotalPayable(Math.round(emiValue * n));
    setTotalInterest(Math.round(emiValue * n - p));
  }, [amount, rate, tenure]);

  const interestPercentage = (totalInterest / totalPayable) * 100;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-forest mb-6">EMI Calculator</h3>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold">Loan Amount (₹)</label>
              <span className="text-forest font-bold">₹{(amount / 100000).toFixed(1)} Lakhs</span>
            </div>
            <input
              type="range"
              min="500000"
              max="7000000"
              step="50000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-gold"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-2 w-full border border-input rounded px-3 py-1.5 text-sm"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold">Interest Rate (%)</label>
              <span className="text-forest font-bold">{rate}%</span>
            </div>
            <input
              type="range"
              min="6"
              max="15"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-gold"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold">Tenure (Years)</label>
              <span className="text-forest font-bold">{tenure} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-gold"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center bg-secondary/30 rounded-xl p-6 border border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Monthly EMI</p>
            <p className="text-4xl md:text-5xl font-black text-gold mt-1">₹{emi.toLocaleString()}</p>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Interest</span>
              <span className="font-bold">₹{totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Amount</span>
              <span className="font-bold">₹{totalPayable.toLocaleString()}</span>
            </div>
            
            <div className="mt-4">
              <div className="h-3 w-full bg-forest rounded-full flex overflow-hidden">
                <div 
                  className="h-full bg-gold" 
                  style={{ width: `${100 - interestPercentage}%` }}
                  title="Principal"
                />
                <div 
                  className="h-full bg-gold/40" 
                  style={{ width: `${interestPercentage}%` }}
                  title="Interest"
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] uppercase font-bold text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gold rounded-full" /> Principal</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gold/40 rounded-full" /> Interest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-center text-xs text-muted-foreground border-t border-border pt-4">
        Bank loan available for all 3 properties. Contact us for assistance. <a href={`tel:${company.phoneRaw}`} className="text-forest font-bold">{company.phone}</a>
      </p>
    </div>
  );
}
