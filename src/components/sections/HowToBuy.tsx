"use client";
import { motion } from "framer-motion";
import { Wallet, Search, Coins, Sparkles } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    { num: "01", title: "Get Phantom Wallet", text: "Download Phantom wallet. Fund it with SOL from any exchange like Coinbase or Binance.", icon: <Wallet className="w-7 h-7" style={{ color: '#39FF14' }} />, glow: 'rgba(57,255,20,0.06)', border: 'rgba(57,255,20,0.18)' },
    { num: "02", title: "Go to Raydium", text: "Navigate to raydium.io and connect your Phantom wallet. The alien's preferred DEX.", icon: <Search className="w-7 h-7" style={{ color: '#A855F7' }} />, glow: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.18)' },
    { num: "03", title: "Paste CA", text: "Search for $PEPELIEN or paste the contract address. Confirm it's the real one.", icon: <Coins className="w-7 h-7" style={{ color: '#39FF14' }} />, glow: 'rgba(57,255,20,0.06)', border: 'rgba(57,255,20,0.18)' },
    { num: "04", title: "Join the Conspiracy", text: "Swap SOL for $PEPELIEN. Welcome to the most out-of-this-world community on Solana.", icon: <Sparkles className="w-7 h-7" style={{ color: '#A855F7' }} />, glow: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.18)' },
  ];

  return (
    <section id="how-to-buy" className="py-32 md:py-40 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#39FF14' }}>Your Mission</p>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-fredoka)] mb-6" style={{ color: '#F0F4FF' }}>
            How to Own <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.5)' }}>$PEPELIEN</span>
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ color: 'rgba(240,244,255,0.55)' }}>
            You don't just buy $PEPELIEN. You join the most classified operation on Solana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }} className="relative p-8 rounded-[2rem] overflow-hidden group transition-all"
              style={{ background: step.glow, border: `1px solid ${step.border}`, backdropFilter: 'blur(14px)' }}>
              <div className="absolute top-4 right-5 text-7xl font-black select-none font-[family-name:var(--font-fredoka)] transition-transform group-hover:scale-110"
                style={{ color: 'rgba(57,255,20,0.04)' }}>{step.num}</div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 relative z-10"
                style={{ background: 'rgba(3,0,10,0.8)', border: '1px solid rgba(57,255,20,0.1)' }}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 tracking-tight" style={{ color: '#F0F4FF' }}>{step.title}</h3>
              <p className="font-medium leading-relaxed relative z-10" style={{ color: 'rgba(240,244,255,0.5)' }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
