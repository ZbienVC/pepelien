"use client";
import { motion } from "framer-motion";
import { Wallet, Search, Coins, Sparkles } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    {
      num: "01",
      title: "Get Phantom Wallet",
      text: "Download Phantom. Load it with SOL. This is your entry point into the most classified trade on Solana.",
      icon: <Wallet className="w-7 h-7" style={{ color: '#39FF14' }} />,
      glow: 'rgba(57,255,20,0.06)', border: 'rgba(57,255,20,0.18)',
    },
    {
      num: "02",
      title: "Go to Raydium",
      text: "Navigate to raydium.io. Connect your wallet. The alien chose Raydium for a reason — trust the process.",
      icon: <Search className="w-7 h-7" style={{ color: '#A855F7' }} />,
      glow: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.18)',
    },
    {
      num: "03",
      title: "Paste the CA",
      text: "Search $PEPELIEN or paste the contract address. Verify it matches. The aliens don't tolerate counterfeits.",
      icon: <Coins className="w-7 h-7" style={{ color: '#39FF14' }} />,
      glow: 'rgba(57,255,20,0.06)', border: 'rgba(57,255,20,0.18)',
    },
    {
      num: "04",
      title: "Join the Conspiracy",
      text: "Swap SOL for $PEPELIEN. You are now part of something bigger than yourself. Welcome to the mothership.",
      icon: <Sparkles className="w-7 h-7" style={{ color: '#A855F7' }} />,
      glow: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.18)',
    },
  ];

  return (
    <section id="how-to-buy" className="py-32 md:py-40 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <p className="label-alien mb-4">&#x25A0; Your Mission &#x25A0;</p>
          <h2 className="font-bold font-[family-name:var(--font-orbitron)] mb-4 leading-tight"
            style={{ fontSize: 'clamp(32px, 6vw, 72px)', color: '#F0F4FF', letterSpacing: '-0.02em' }}>
            HOW TO OWN<br /><span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.5)' }}>$PEPELIEN</span>
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
            Four steps. That's all it takes to board the mothership.{' '}
            <span style={{ color: '#A855F7' }}>The aliens have been waiting.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }} className="relative p-8 rounded-[2rem] overflow-hidden group transition-all"
              style={{ background: step.glow, border: `1px solid ${step.border}`, backdropFilter: 'blur(14px)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.3), transparent)' }} />
              <div className="absolute top-4 right-5 text-7xl font-black select-none font-[family-name:var(--font-orbitron)] transition-transform group-hover:scale-110"
                style={{ color: 'rgba(57,255,20,0.04)' }}>{step.num}</div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 relative z-10"
                style={{ background: 'rgba(3,0,10,0.8)', border: '1px solid rgba(57,255,20,0.1)' }}>
                {step.icon}
              </div>
              <h3 className="text-base font-bold mb-3 relative z-10 font-[family-name:var(--font-orbitron)]"
                style={{ color: '#F0F4FF', letterSpacing: '0.02em' }}>{step.title}</h3>
              <p className="font-medium leading-relaxed relative z-10 text-sm" style={{ color: 'rgba(240,244,255,0.5)' }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
