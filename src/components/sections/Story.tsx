"use client";
import { motion } from "framer-motion";
import { Eye, Zap, Globe } from "lucide-react";

const fade: any = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } } };

const CONSPIRACY = [
  {
    title: "The SpaceX Evidence",
    text: "No human builds rockets to Mars in their spare time. The trajectory calculations, the reusable boosters, the Starlink network — this is alien tech being slowly reverse-engineered into the public domain. Elon is leaking it on purpose.",
  },
  {
    title: "The Pepe Connection",
    text: "Pepe the Frog originated as a symbol of the internet's hidden knowledge. Ancient Egyptians worshipped Kek — a frog-headed deity of chaos and the unknown. Pepe is the modern incarnation. He knows who Elon really is.",
  },
  {
    title: "The $PEPELIEN Thesis",
    text: "What happens when the world's most powerful alien meets the internet's most powerful meme? You get $PEPELIEN — a token with more gravitational pull than Elon's rockets and more meme energy than the entire Pepe ecosystem combined.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">

        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade} className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#39FF14' }}>Classified Information</p>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] mb-6"
            style={{ color: '#F0F4FF', textShadow: '0 0 30px rgba(57,255,20,0.2)' }}>
            The Truth They Don't<br />
            <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.6)' }}>Want You to Know</span>
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(240,244,255,0.65)' }}>
            Elon Musk was sent to this planet with a mission: prepare humanity for first contact. $PEPELIEN is the signal.
          </p>
        </motion.div>

        {/* Meme + text split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="h-80 md:h-[480px] rounded-3xl overflow-hidden relative"
            style={{ border: '1px solid rgba(57,255,20,0.15)' }}>
            <img src="/pepelien-4.jpg" alt="Pepe Elon Alien hot tub moon" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,0,10,0.85) 0%, transparent 60%)' }} />
            <div className="absolute bottom-5 left-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(57,255,20,0.8)' }}>Pepe, Elon & The Alien. Moon base. 2025.</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.25)' }}>
                <Eye className="w-5 h-5" style={{ color: '#39FF14' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#39FF14' }}>Declassified · Eyes Only</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#F0F4FF' }}>Elon Is Not From Here</h3>
            <p className="leading-relaxed text-lg" style={{ color: 'rgba(240,244,255,0.55)' }}>
              Born in South Africa. Claims to be human. Has since built the world's most advanced rocket company, implanted chips in brains, launched 6,000 satellites, and bought the world's largest social media platform — all before age 53.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(240,244,255,0.45)' }}>
              <strong style={{ color: '#39FF14' }}>$PEPELIEN</strong> exists at the intersection of the two most powerful meme forces on the internet — and the universe's most suspicious billionaire. Connect the dots, anon.
            </p>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(57,255,20,0.06)', border: '1px solid rgba(57,255,20,0.15)' }}>
              <span className="text-2xl">👽</span>
              <span className="text-sm font-bold" style={{ color: '#39FF14' }}>"The truth is out there. And it's on-chain."</span>
            </div>
          </motion.div>
        </div>

        {/* Conspiracy thesis cards */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#A855F7' }}>The Evidence</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)]" style={{ color: '#F0F4FF' }}>The $PEPELIEN Conspiracy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONSPIRACY.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="p-7 rounded-3xl flex flex-col gap-4"
                style={{ background: 'rgba(57,255,20,0.04)', border: '1px solid rgba(57,255,20,0.12)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.2)' }}>
                  {i === 0 ? <Zap className="w-5 h-5" style={{ color: '#39FF14' }} /> : i === 1 ? <span className="text-lg">🐸</span> : <Globe className="w-5 h-5" style={{ color: '#A855F7' }} />}
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#F0F4FF' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Callout */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
          className="text-center px-6 py-12 rounded-3xl"
          style={{ background: 'rgba(57,255,20,0.04)', border: '1px solid rgba(57,255,20,0.12)' }}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#A855F7' }}>The mission is clear.</p>
          <h3 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-fredoka)] mb-4" style={{ color: '#F0F4FF' }}>
            Elon. Pepe. Alien.<br />
            <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.5)' }}>$PEPELIEN.</span>
          </h3>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(240,244,255,0.55)' }}>
            The galaxy's most powerful meme coin. Permanently on Solana. The conspiracy is real — and you're either early or you're not.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
