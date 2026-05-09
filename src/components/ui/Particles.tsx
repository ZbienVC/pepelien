"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Particles() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; s: number; d: number; type: number }[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 80; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2 + 0.5,
        d: Math.random() * 4 + 2,
        type: Math.floor(Math.random() * 3), // 0=white star, 1=green, 2=purple
      });
    }
    setStars(arr);
  }, []);

  const colors = ['rgba(240,244,255,0.8)', 'rgba(57,255,20,0.9)', 'rgba(168,85,247,0.9)'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            width: s.s,
            height: s.s,
            left: `${s.x}vw`,
            top: `${s.y}vh`,
            background: colors[s.type],
            boxShadow: s.type === 0 ? 'none' : `0 0 ${s.s * 3}px ${colors[s.type]}`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 3 }}
        />
      ))}
      {/* Nebula glows */}
      <div className="absolute top-[5%] left-[10%] w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(57,255,20,0.05)' }} />
      <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: 'rgba(168,85,247,0.07)' }} />
      <div className="absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full blur-[100px]" style={{ background: 'rgba(107,33,168,0.08)' }} />
    </div>
  );
}
