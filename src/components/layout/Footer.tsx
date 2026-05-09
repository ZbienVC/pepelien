"use client";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden z-10" style={{ borderTop: '1px solid rgba(57,255,20,0.1)', background: '#020008' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(57,255,20,0.05), transparent 60%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.4), rgba(168,85,247,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F47D;</span>
            <h2 className="text-3xl font-black font-[family-name:var(--font-orbitron)] glow-text" style={{ letterSpacing: '0.05em' }}>
              PEPELIEN
            </h2>
          </div>
          <p className="text-sm max-w-sm text-center md:text-left leading-relaxed" style={{ color: 'rgba(240,244,255,0.4)' }}>
            Crypto's first Elon + Pepe + Alien meme. The truth is on-chain. The charts don't lie.
            <span style={{ color: '#39FF14' }}> $PEPELIEN</span> — a true OG across all chains.
          </p>
          <div className="text-xs font-mono px-4 py-2 rounded-xl break-all"
            style={{ background: 'rgba(57,255,20,0.05)', border: '1px solid rgba(57,255,20,0.15)', color: '#39FF14', maxWidth: 340 }}>
            yFFoq7rCHkMQPTwS7bhUyF68cz4Xs2YmnksXuwJpump
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <p className="label-classified" style={{ color: 'rgba(240,244,255,0.3)' }}>&#x25A0; Community &#x25A0;</p>
          <div className="flex items-center gap-4">
            <a href="https://t.me/pepelien_sol" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
              style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)', color: '#39FF14' }}>
              <Send className="w-4 h-4" /> Telegram
            </a>
            <a href="https://x.com/Pepelien_SOL" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
              style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)', color: '#A855F7' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-5 text-xs" style={{ borderTop: '1px solid rgba(57,255,20,0.06)', color: 'rgba(240,244,255,0.18)' }}>
        <span className="font-[family-name:var(--font-orbitron)]" style={{ letterSpacing: '0.1em' }}>
          &#x25A0; $PEPELIEN &#x25A0; THE TRUTH IS OUT THERE &#x25A0; SOLANA &#x25A0;
        </span>
      </div>
    </footer>
  );
}
