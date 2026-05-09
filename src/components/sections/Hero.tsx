"use client";
import { motion } from "framer-motion";
import { Copy, TrendingUp, BarChart2 } from "lucide-react";
import { useState } from "react";

const TICKER = [
  "PEPELIEN", "ELON IS AN ALIEN", "PEPE KNOWS THE TRUTH", "0% TAX",
  "LP BURNED", "1,000,000,000 SUPPLY", "ON SOLANA", "THE TRUTH IS OUT THERE",
  "BUY $PEPELIEN", "👽 PEPELIEN 👽", "AREA 51 CONFIRMED",
];

export default function Hero() {
  const CA = "PLACEHOLDER_CA";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section className="min-h-screen pt-16 pb-0 px-4 md:px-8 flex flex-col items-center justify-start relative overflow-hidden text-center z-10">

      {/* Starfield background layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src="/pepelien-1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover select-none"
          style={{ opacity: 0.08, filter: 'saturate(0.5) blur(2px)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, #03000A 75%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(3,0,10,0.4) 0%, rgba(3,0,10,0.8) 100%)' }} />
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 pt-12 relative z-10 flex-1">

        {/* Left: text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 gap-6">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.3)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#39FF14', boxShadow: '0 0 8px rgba(57,255,20,0.9)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#39FF14' }}>
              Classified · Solana · Area 51 Approved
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-7xl md:text-[8rem] lg:text-[9rem] font-bold font-[family-name:var(--font-fredoka)] leading-none drop-shadow-2xl"
            style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.8), 0 0 60px rgba(57,255,20,0.3)' }}>
            PEPELIEN
          </motion.h1>

          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-3xl font-semibold max-w-xl leading-tight" style={{ color: '#A855F7' }}>
            Elon Musk. Pepe the Frog. An Alien.
            <span style={{ color: 'rgba(240,244,255,0.7)' }}> The conspiracy is real.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-lg max-w-md font-medium" style={{ color: 'rgba(240,244,255,0.6)' }}>
            They've been watching us. Now we're watching the charts. $PEPELIEN — the most out-of-this-world token on Solana.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
            <a href="#how-to-buy" className="w-full sm:w-auto">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="w-full h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #39FF14, #4CAF50)', color: '#03000A', boxShadow: '0 6px 28px rgba(57,255,20,0.4)' }}>
                Buy $PEPELIEN <TrendingUp className="w-5 h-5" />
              </motion.button>
            </a>
            <a href="#chart" className="w-full sm:w-auto">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="w-full h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
                style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.35)', color: '#A855F7' }}>
                View Chart <BarChart2 className="w-5 h-5" />
              </motion.button>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(240,244,255,0.3)' }}>Contract Address</p>
            <div onClick={handleCopy} className="flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer transition-all"
              style={{ background: 'rgba(57,255,20,0.05)', border: '1px solid rgba(57,255,20,0.15)' }}>
              <span className="font-mono text-xs md:text-sm" style={{ color: '#39FF14' }}>{CA}</span>
              <Copy className="w-4 h-4" style={{ color: copied ? '#39FF14' : 'rgba(240,244,255,0.3)' }} />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 w-full max-w-sm lg:max-w-none">
            {[
              { label: "Supply", value: "1,000,000,000" },
              { label: "Tax", value: "0%" },
              { label: "LP", value: "Burned 🔥" },
              { label: "Chain", value: "Solana" },
            ].map((s, i) => (
              <div key={i} className="px-4 py-2 rounded-xl flex flex-col items-center flex-1"
                style={{ background: 'rgba(57,255,20,0.05)', border: '1px solid rgba(57,255,20,0.12)' }}>
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(240,244,255,0.35)' }}>{s.label}</span>
                <span className="font-bold text-sm" style={{ color: '#F0F4FF' }}>{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero meme — UFO abduction */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0 w-full lg:w-[460px]">
          <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden"
            style={{ height: 460, border: '1px solid rgba(57,255,20,0.2)', boxShadow: '0 0 60px rgba(57,255,20,0.15), 0 0 120px rgba(57,255,20,0.06)' }}>
            <img src="/pepelien-3.jpg" alt="PEPELIEN meme" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,0,10,0.7) 0%, transparent 50%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(57,255,20,0.08) 0%, transparent 60%)' }} />
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                style={{ background: 'rgba(57,255,20,0.12)', border: '1px solid rgba(57,255,20,0.3)', color: '#39FF14' }}>
                👽 They're Here
              </span>
            </div>
          </motion.div>
          <div className="absolute -inset-8 -z-10 rounded-full blur-[80px]" style={{ background: 'rgba(57,255,20,0.06)' }} />
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div className="w-full mt-12 overflow-hidden py-3 relative z-10"
        style={{ borderTop: '1px solid rgba(57,255,20,0.1)', borderBottom: '1px solid rgba(57,255,20,0.1)', background: 'rgba(57,255,20,0.03)' }}>
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap w-max">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-widest flex items-center gap-8">
              <span style={{ color: i % 3 === 0 ? '#39FF14' : i % 3 === 1 ? '#A855F7' : 'rgba(240,244,255,0.4)' }}>{item}</span>
              <span style={{ color: 'rgba(57,255,20,0.3)' }}>★</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
