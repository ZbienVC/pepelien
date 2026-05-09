"use client";
import { motion } from "framer-motion";
import { Coins, Lock, Flame, Rocket } from "lucide-react";

const stats = [
  { value: "1,000,000,000", label: "Total Supply", sub: "One billion reasons to hold.", icon: <Coins className="w-6 h-6" style={{ color: '#39FF14' }} />, border: 'rgba(57,255,20,0.25)', glow: 'rgba(57,255,20,0.07)' },
  { value: "0%", label: "Buy & Sell Tax", sub: "Zero friction. Just pure signal.", icon: <Flame className="w-6 h-6" style={{ color: '#A855F7' }} />, border: 'rgba(168,85,247,0.25)', glow: 'rgba(168,85,247,0.07)' },
  { value: "Burned 🔥", label: "Liquidity Pool", sub: "Gone forever. Like the evidence.", icon: <Lock className="w-6 h-6" style={{ color: '#39FF14' }} />, border: 'rgba(57,255,20,0.2)', glow: 'rgba(57,255,20,0.05)' },
  { value: "Solana", label: "Chain", sub: "Fast. Cheap. Alien-approved.", icon: <Rocket className="w-6 h-6" style={{ color: '#A855F7' }} />, border: 'rgba(168,85,247,0.2)', glow: 'rgba(168,85,247,0.05)' },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="label-alien mb-4">&#x25A0; Alien Economics &#x25A0;</p>
          <h2 className="font-black font-[family-name:var(--font-orbitron)] mb-3"
            style={{ fontSize: 'clamp(28px, 6vw, 72px)', color: '#F0F4FF', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.4)' }}>$</span>PEPELIEN<span style={{ color: '#39FF14' }}>OMICS</span>
          </h2>
          <p className="text-base font-medium max-w-xl mx-auto" style={{ color: 'rgba(240,244,255,0.45)' }}>
            Designed in the stars. Audited by the mothership. Simple, clean, unruggable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="relative h-[360px] md:h-[460px] flex items-end justify-center lg:justify-end">
            <img src="/pepelien-11.jpg" alt="PepElon alien army"
              className="h-full object-contain object-bottom"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 80%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 80%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
                filter: 'brightness(0.9) saturate(1.1)',
              }}
            />
            <div className="absolute inset-0 -z-10 rounded-full blur-[80px]" style={{ background: 'rgba(57,255,20,0.05)' }} />
          </motion.div>

          <div className="flex flex-col gap-4 pb-4">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ x: -6 }}
                className="relative overflow-hidden flex items-center justify-between px-7 py-5 rounded-2xl transition-all cursor-default"
                style={{ background: i === 0 ? 'rgba(57,255,20,0.1)' : s.glow, border: `1px solid ${i === 0 ? 'rgba(57,255,20,0.35)' : s.border}`, backdropFilter: 'blur(12px)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(57,255,20,0.4)' : 'rgba(168,85,247,0.4)'}, transparent)` }} />
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(3,0,10,0.7)', border: '1px solid rgba(57,255,20,0.1)' }}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-black font-[family-name:var(--font-orbitron)]"
                      style={{ fontSize: 'clamp(18px, 3vw, 30px)', color: i === 0 ? '#39FF14' : '#F0F4FF', letterSpacing: '-0.01em' }}>
                      {s.value}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(240,244,255,0.4)' }}>{s.sub}</p>
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-right flex-shrink-0 ml-4" style={{ color: 'rgba(240,244,255,0.3)' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
