"use client";
import { motion } from "framer-motion";
import { Coins, Lock, Flame, Rocket } from "lucide-react";

const stats = [
  { value: "1,000,000,000", label: "Total Supply", icon: <Coins className="w-6 h-6" style={{ color: '#39FF14' }} />, border: 'rgba(57,255,20,0.25)', glow: 'rgba(57,255,20,0.07)' },
  { value: "0%", label: "Buy & Sell Tax", icon: <Flame className="w-6 h-6" style={{ color: '#A855F7' }} />, border: 'rgba(168,85,247,0.25)', glow: 'rgba(168,85,247,0.07)' },
  { value: "Burned 🔥", label: "Liquidity Pool", icon: <Lock className="w-6 h-6" style={{ color: '#39FF14' }} />, border: 'rgba(57,255,20,0.2)', glow: 'rgba(57,255,20,0.05)' },
  { value: "Solana", label: "Launched On", icon: <Rocket className="w-6 h-6" style={{ color: '#A855F7' }} />, border: 'rgba(168,85,247,0.2)', glow: 'rgba(168,85,247,0.05)' },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="label-alien mb-4">&#x25A0; Alien Economics &#x25A0;</p>
          <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-orbitron)] tracking-tight"
            style={{ color: '#F0F4FF', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.4)' }}>$</span>PEPELIEN<span style={{ color: '#39FF14' }}>OMICS</span>
          </h2>
        </motion.div>

        {/* Side image + stat cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">

          {/* Meme image */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="relative h-[380px] md:h-[480px] flex items-end justify-center lg:justify-end">
            <img src="/pepelien-11.jpg" alt="PepElon alien army"
              className="h-full object-contain object-bottom"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 80%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 80%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
                filter: 'brightness(0.9)',
              }}
            />
            <div className="absolute inset-0 -z-10 rounded-full blur-[80px]" style={{ background: 'rgba(57,255,20,0.05)' }} />
          </motion.div>

          {/* Stat cards */}
          <div className="flex flex-col gap-4 pb-4">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ x: -6 }}
                className="flex items-center justify-between px-8 py-6 rounded-2xl transition-all cursor-default"
                style={{ background: i === 0 ? 'rgba(57,255,20,0.1)' : s.glow, border: `1px solid ${i === 0 ? 'rgba(57,255,20,0.35)' : s.border}`, backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(3,0,10,0.7)', border: '1px solid rgba(57,255,20,0.1)' }}>
                    {s.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black font-[family-name:var(--font-fredoka)] tracking-tight"
                    style={{ color: i === 0 ? '#39FF14' : '#F0F4FF' }}>
                    {s.value}
                  </h3>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(240,244,255,0.35)' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
