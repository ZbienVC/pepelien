"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const IMAGES = [
  { src: "/pepelien-1.jpg", label: "Eagle Riders", caption: "Pepe, Elon & the Alien cruising through the galaxy on a bald eagle. This is America. This is space." },
  { src: "/pepelien-2.jpg", label: "Galactic Poker", caption: "High stakes poker with Earth's fate on the line. Pepe holds the nuts. The alien always folds." },
  { src: "/pepelien-3.jpg", label: "The Abduction", caption: "They came for the cows. They stayed for the memes. $PEPELIEN was their parting gift." },
  { src: "/pepelien-4.jpg", label: "Moon Base Alpha", caption: "Chilling in the hot tub on the moon while Earth watches the charts go vertical." },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => { if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 420, behavior: "smooth" }); };

  return (
    <section id="gallery" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden" style={{ background: 'rgba(0,0,5,0.4)' }}>
      <div className="max-w-7xl mx-auto mb-12 flex items-end justify-between">
        <div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#39FF14' }}>
            Declassified Files
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-[family-name:var(--font-fredoka)]"
            style={{ color: '#F0F4FF', textShadow: '0 0 30px rgba(57,255,20,0.1)' }}>
            The <span style={{ color: '#39FF14' }}>Meme</span> Vault
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-2 text-sm font-medium" style={{ color: 'rgba(240,244,255,0.4)' }}>
            Visual evidence of the conspiracy. Do your own research.
          </motion.p>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={() => scroll(-1)} className="w-11 h-11 rounded-full flex items-center justify-center rotate-180 transition-all hover:scale-110"
            style={{ border: '1px solid rgba(57,255,20,0.25)', background: 'rgba(57,255,20,0.06)', color: '#39FF14' }}>
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scroll(1)} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ border: '1px solid rgba(57,255,20,0.25)', background: 'rgba(57,255,20,0.06)', color: '#39FF14' }}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scattered meme wall */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {IMAGES.map((img, i) => {
            const rotations = [-5, 4, -3, 6];
            const rot = rotations[i % rotations.length];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.85, rotate: rot * 0.5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: rot }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 50, transition: { duration: 0.2 } }}
                className="relative overflow-hidden cursor-pointer"
                style={{ width: 260, height: 320, borderRadius: 20, border: '2px solid rgba(57,255,20,0.15)', boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(57,255,20,0.05)' }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(57,255,20,0.12) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-bold text-sm mb-1" style={{ color: '#39FF14' }}>{img.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(240,244,255,0.7)' }}>{img.caption}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
