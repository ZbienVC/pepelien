"use client";
import { motion } from "framer-motion";

const PAIR_ADDRESS = "DFStrnByyAhpSeqQJCS9RBz1SNKe4PYXSAnUqVigxv2E";
const DEXSCREENER_URL = `https://dexscreener.com/solana/${PAIR_ADDRESS}`;
const EMBED_URL = `https://dexscreener.com/solana/${PAIR_ADDRESS}?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15`;

export default function Chart() {
  return (
    <section id="chart" className="py-24 px-4 md:px-8 relative z-10" style={{ background: 'rgba(0,0,5,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="label-classified mb-4">&#x25A0; Mission Control &#x25A0;</p>
          <h2 className="font-bold font-[family-name:var(--font-orbitron)] mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 60px)', color: '#F0F4FF', letterSpacing: '-0.02em' }}>
            THE <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.5)' }}>MARKET</span>
          </h2>
          <p className="font-medium" style={{ color: 'rgba(240,244,255,0.5)' }}>
            Live price feed. Intercepted directly from the alien mainframe.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="w-full rounded-3xl overflow-hidden relative"
          style={{ border: '1px solid rgba(57,255,20,0.2)', boxShadow: '0 0 40px rgba(57,255,20,0.06)', height: 560 }}>
          <iframe id="dexscreener-embed" src={EMBED_URL} title="PEPELIEN Chart" allow="clipboard-write"
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-80"
            style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)', color: '#39FF14' }}>
            Open Full Chart &#x2197;
          </a>
          <a href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${PAIR_ADDRESS}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-80"
            style={{ background: 'linear-gradient(135deg, #39FF14, #4CAF50)', color: '#03000A', fontWeight: 700 }}>
            Buy $PEPELIEN &#x2197;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
