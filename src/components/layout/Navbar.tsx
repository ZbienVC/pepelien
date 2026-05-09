"use client";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const CA = "yFFoq7rCHkMQPTwS7bhUyF68cz4Xs2YmnksXuwJpump";
  const handleCopy = () => { navigator.clipboard.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 flex items-center justify-between w-full h-16"
      style={{ background: 'rgba(3,0,10,0.88)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(57,255,20,0.1)' }}>

      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="text-2xl">👽</div>
        <span className="text-lg font-black tracking-tight font-[family-name:var(--font-orbitron)] glow-text" style={{ color: '#39FF14', letterSpacing: '0.05em' }}>
          $PEPELIEN
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
        {[
          { label: "The Truth", href: "#story" },
          { label: "Tokenomics", href: "#tokenomics" },
          { label: "Chart", href: "#chart" },
          { label: "Memes", href: "#gallery" },
          { label: "How to Buy", href: "#how-to-buy" },
        ].map((item) => (
          <Link key={item.label} href={item.href}
            className="transition-colors hover:text-[#39FF14]"
            style={{ color: 'rgba(240,244,255,0.5)' }}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button onClick={handleCopy}
          className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all hover:opacity-80"
          style={{ background: 'rgba(57,255,20,0.07)', border: '1px solid rgba(57,255,20,0.2)', color: 'rgba(57,255,20,0.8)' }}>
          <Copy className="w-3 h-3" />
          {copied ? "Copied!" : "Copy CA"}
        </button>
        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=yFFoq7rCHkMQPTwS7bhUyF68cz4Xs2YmnksXuwJpump" target="_blank" rel="noreferrer"
          className="px-5 py-2 rounded-lg font-bold text-sm transition-all hover:opacity-90 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #39FF14, #4CAF50)', color: '#03000A', boxShadow: '0 2px 20px rgba(57,255,20,0.3)' }}>
          Buy $PEPELIEN
        </a>
      </div>
    </motion.nav>
  );
}
