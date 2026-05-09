"use client";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden z-10" style={{ borderTop: '1px solid rgba(57,255,20,0.1)', background: '#020008' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(57,255,20,0.06), transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">👽</span>
            <h2 className="text-4xl font-bold font-[family-name:var(--font-fredoka)] glow-text" style={{ color: '#39FF14' }}>PEPELIEN</h2>
          </div>
          <p className="text-sm max-w-sm text-center md:text-left font-medium" style={{ color: 'rgba(240,244,255,0.45)' }}>
            Elon is an alien. Pepe knows. The charts don't lie. $PEPELIEN — the truth is on-chain.
          </p>
          <div className="text-xs font-mono px-4 py-2 rounded-xl mt-1 break-all" style={{ background: 'rgba(57,255,20,0.06)', border: '1px solid rgba(57,255,20,0.15)', color: '#39FF14' }}>
            yFFoq7rCHkMQPTwS7bhUyF68cz4Xs2YmnksXuwJpump
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(240,244,255,0.3)' }}>Community</p>
          <div className="flex items-center gap-4">
            <a href="https://t.me/pepelien_sol" target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)', color: '#39FF14' }}>
              <Send className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)', color: '#A855F7' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-6 text-xs" style={{ borderTop: '1px solid rgba(57,255,20,0.07)', color: 'rgba(240,244,255,0.2)' }}>
        © {new Date().getFullYear()} $PEPELIEN — The truth is out there. And it's on Solana.
      </div>
    </footer>
  );
}
