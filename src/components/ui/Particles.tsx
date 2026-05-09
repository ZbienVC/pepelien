"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Alien characters for the matrix rain
const ALIEN_CHARS = "01ΞΨΩΔΦΓΛΣΠΘΒ∇∞≈≠∴∵⊕⊗✦★☆◆◇▲△○●".split("");

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = Math.floor(canvas.width / 22);
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -50);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      ctx.fillStyle = "rgba(3,0,10,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = ALIEN_CHARS[Math.floor(Math.random() * ALIEN_CHARS.length)];
        const brightness = Math.random();
        if (brightness > 0.97) {
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#39FF14";
          ctx.shadowBlur = 8;
        } else if (brightness > 0.8) {
          ctx.fillStyle = "#39FF14";
          ctx.shadowColor = "#39FF14";
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(57,255,20,${0.08 + brightness * 0.18})`;
          ctx.shadowBlur = 0;
        }
        ctx.font = "14px 'Courier New', monospace";
        ctx.fillText(char, i * 22, y * 22);
        ctx.shadowBlur = 0;

        if (y * 22 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += 0.4;
        }
      });
    }, 50);

    return () => { clearInterval(interval); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.18 }} />;
}

function BurstParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const burst: any[] = [];
    for (let i = 0; i < 60; i++) {
      const angle = (Math.PI * 2 * i) / 60 + Math.random() * 0.3;
      const speed = 80 + Math.random() * 220;
      const isGreen = Math.random() > 0.35;
      burst.push({
        id: i,
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
        scale: 0.4 + Math.random() * 1.2,
        color: isGreen ? '#39FF14' : Math.random() > 0.5 ? '#A855F7' : '#F0F4FF',
        duration: 0.8 + Math.random() * 1.2,
        delay: Math.random() * 0.3,
        rotate: Math.random() * 720 - 360,
        shape: Math.random() > 0.6 ? 'star' : 'circle',
      });
    }
    setParticles(burst);
    const t = setTimeout(() => setParticles([]), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {particles.map(p => (
          <motion.div key={p.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
            animate={{ x: p.x, y: p.y, scale: p.scale, opacity: 0, rotate: p.rotate }}
            exit={{}}
            transition={{ duration: p.duration, delay: p.delay, ease: [0.2, 0.8, 0.4, 1] }}
            style={{
              position: 'absolute',
              width: p.shape === 'star' ? 10 : 6,
              height: p.shape === 'star' ? 10 : 6,
              borderRadius: p.shape === 'circle' ? '50%' : 2,
              background: p.color,
              boxShadow: `0 0 ${8 * p.scale}px ${p.color}`,
              clipPath: p.shape === 'star' ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function BeamSweep() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <motion.div
        initial={{ x: '-110vw', opacity: 0.9, skewX: -8 }}
        animate={{ x: '110vw', opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        style={{
          position: 'absolute',
          top: 0, bottom: 0,
          width: '30vw',
          background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.12), rgba(57,255,20,0.35), rgba(57,255,20,0.12), transparent)',
          filter: 'blur(2px)',
        }}
      />
      <motion.div
        initial={{ x: '-110vw', opacity: 0.6, skewX: -8 }}
        animate={{ x: '110vw', opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        style={{
          position: 'absolute',
          top: '45%', height: 2,
          width: '30vw',
          background: 'linear-gradient(90deg, transparent, #39FF14, transparent)',
          boxShadow: '0 0 20px rgba(57,255,20,0.9), 0 0 60px rgba(57,255,20,0.4)',
        }}
      />
    </div>
  );
}

function GlitchTitle({ children }: { children: React.ReactNode }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    // Glitch burst on load
    setTimeout(() => setGlitch(true), 400);
    setTimeout(() => setGlitch(false), 700);
    // Random glitch flashes
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 80 + Math.random() * 120);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {glitch && (
        <>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#A855F7', clipPath: 'inset(30% 0 40% 0)',
            transform: `translateX(${Math.random() * 8 - 4}px)`,
            opacity: 0.9, pointerEvents: 'none',
          }}>{children}</div>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#39FF14', clipPath: 'inset(60% 0 20% 0)',
            transform: `translateX(${Math.random() * -8 + 4}px)`,
            opacity: 0.7, pointerEvents: 'none',
          }}>{children}</div>
        </>
      )}
    </div>
  );
}

function SparkleField() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const generate = () => Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      color: Math.random() > 0.5 ? '#39FF14' : '#A855F7',
      duration: 0.6 + Math.random() * 0.8,
    }));

    const interval = setInterval(() => {
      setSparkles(generate());
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {sparkles.map(s => (
          <motion.div key={s.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: s.duration, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              left: `${s.x}vw`, top: `${s.y}vh`,
              width: s.size, height: s.size,
              borderRadius: '50%',
              background: s.color,
              boxShadow: `0 0 ${s.size * 3}px ${s.color}, 0 0 ${s.size * 6}px ${s.color}40`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function Particles() {
  return (
    <>
      <MatrixRain />
      <SparkleField />
      <BeamSweep />
      <BurstParticles />
      {/* Static ambient nebula glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(57,255,20,0.04)' }} />
        <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: 'rgba(168,85,247,0.06)' }} />
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full blur-[100px]" style={{ background: 'rgba(107,33,168,0.07)' }} />
      </div>
    </>
  );
}

export { GlitchTitle };
