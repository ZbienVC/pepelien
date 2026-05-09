"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const IMAGES = [
  { src: "/pepelien-24.jpg", label: "Moon Hot Tub", caption: "Pepe & the alien toasting champagne on the moon. Earth watches. DOGE approves." },
  { src: "/pepelien-22.jpg", label: "The Preacher", caption: "PepElon addresses the congregation of Shibas under the X. The alien bears witness." },
  { src: "/pepelien-23.jpg", label: "Alien Session", caption: "Elon, Pepe, and the alien compare notes. The secrets of the universe are on the table." },
  { src: "/pepelien-16.jpg", label: "Exit Fiat", caption: "Spray-painting the truth in alien green. EXIT FIAT. X marks the spot." },
  { src: "/pepelien-20.jpg", label: "SpaceX CEO", caption: "Numbers Don't Lie. Sitting on a mountain of cash on the moon. SpaceX in the background." },
  { src: "/pepelien-14.jpg", label: "Bag City", caption: "Drowning in bags. Someone gives Pepe a pat on the head. He's earned it." },
  { src: "/pepelien-17.jpg", label: "Red Carpet", caption: "PepElon arrives in a Cybertruck with his Doge. The paparazzi went wild." },
  { src: "/pepelien-21.jpg", label: "Occupy Mars Podcast", caption: "Live from the Occupy Mars studio. The most important podcast in the galaxy." },
  { src: "/pepelien-19.jpg", label: "The Gang Rides", caption: "Pepe, Elon, the alien and Doge on a Tesla motorbike. SpaceX launches behind them." },
  { src: "/pepelien-11.jpg", label: "Alien Army", caption: "PepElon leads his alien squad under the X. Sunglasses mandatory. No normies allowed." },
  { src: "/pepelien-18.jpg", label: "Occupy Mars pt.2", caption: "Smoke signals from the Occupy Mars studio. The X appears. Something is coming." },
  { src: "/pepelien-12.jpg", label: "Bull Rider", caption: "Riding the cyber bull into the green candle. Cash raining from the sky. Whip in hand." },
  { src: "/pepelien-15.jpg", label: "The Earth is Fine", caption: "Pouring gas on the globe. THE EARTH IS FINE. Time to go to Mars." },
  { src: "/pepelien-13.jpg", label: "Grocery Run", caption: "Pepe and the alien doing the weekly shop. Prime, Takis, and $PEPELIEN." },
  { src: "/pepelien-5.jpg",  label: "Hot Box", caption: "When you finally understand the $PEPELIEN thesis. Pepe and the alien nod in agreement." },
  { src: "/pepelien-8.jpg",  label: "Bag Head Pepe", caption: "The original. Bag on his head. Pipe lit. Quiet confidence of someone already holding." },
  { src: "/pepelien-9.jpg",  label: "Pepe Prays", caption: "He knows what's coming. He's been patient. $PEPELIEN holders understand." },
  { src: "/pepelien-10.jpg", label: "Money Bags", caption: "Waist deep in money bags. The hand of fate giving approval. This is the way." },
  { src: "/pepelien-6.jpg",  label: "SpaceX Slice", caption: "Pizza at the SpaceX canteen. PepElon doesn't stop for anyone — not even lunch." },
  { src: "/pepelien-7.jpg",  label: "Full Send", caption: "Cigar lit. Cards on the table. PepElon and the alien go all in. Every hand." },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => { if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" }); };

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
            style={{ color: '#F0F4FF' }}>
            The <span style={{ color: '#39FF14', textShadow: '0 0 20px rgba(57,255,20,0.5)' }}>Meme</span> Vault
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-2 text-sm font-medium" style={{ color: 'rgba(240,244,255,0.4)' }}>
            {IMAGES.length} pieces of visual evidence. Do your own research.
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

      {/* Scrollable meme strip */}
      <div ref={scrollRef} className="max-w-7xl mx-auto flex gap-4 overflow-x-auto snap-x snap-mandatory py-4"
        style={{ scrollbarWidth: 'none' }}>
        {IMAGES.map((img, i) => {
          const rotations = [-4, 3, -2, 5, -3, 4, -5, 2, -3, 4];
          const rot = rotations[i % rotations.length];
          return (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, transition: { duration: 0.2 } }}
              className="relative shrink-0 snap-center overflow-hidden cursor-pointer group"
              style={{
                width: 280,
                height: 360,
                borderRadius: 20,
                rotate: `${rot}deg`,
                border: '2px solid rgba(57,255,20,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
              }}>
              <img src={img.src} alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(ellipse at center, rgba(57,255,20,0.1) 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-bold text-sm mb-1" style={{ color: '#39FF14' }}>{img.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(240,244,255,0.7)' }}>{img.caption}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
