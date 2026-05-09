"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    const interval = setInterval(() => {
      ctx.fillStyle = "rgba(3,0,10,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = ALIEN_CHARS[Math.floor(Math.random() * ALIEN_CHARS.length)];
        const brightness = Math.random();
        if (brightness > 0.97) {
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#39FF14";
          ctx.shadowBlur = 10;
        } else if (brightness > 0.8) {
          ctx.fillStyle = "#39FF14";
          ctx.shadowColor = "#39FF14";
          ctx.shadowBlur = 5;
        } else {
          ctx.fillStyle = `rgba(57,255,20,${0.08 + brightness * 0.2})`;
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

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.2 }} />;
}

function BurstParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // First burst on load
    const makeBurst = (count: number, speedMin: number, speedMax: number, delayOffset: number) =>
      Array.from({ length: count }, (_, i) => {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const speed = speedMin + Math.random() * (speedMax - speedMin);
        const isGreen = Math.random() > 0.3;
        return {
          id: delayOffset * 1000 + i,
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed,
          scale: 0.5 + Math.random() * 1.5,
          color: isGreen ? '#39FF14' : Math.random() > 0.5 ? '#A855F7' : '#FFFFFF',
          duration: 1.2 + Math.random() * 1.4,
          delay: delayOffset + Math.random() * 0.4,
          rotate: Math.random() * 900 - 450,
          shape: Math.random() > 0.5 ? 'star' : 'circle',
        };
      });

    // Two waves — close burst then wide burst
    const wave1 = makeBurst(60, 60, 200, 0);
    const wave2 = makeBurst(40, 180, 320, 0.25);
    setParticles([...wave1, ...wave2]);

    const t = setTimeout(() => setParticles([]), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {particles.map(p => (
          <motion.div key={p.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
            animate={{ x: p.x, y: p.y, scale: p.scale, opacity: 0, rotate: p.rotate }}
            transition={{ duration: p.duration, delay: p.delay, ease: [0.15, 0.85, 0.35, 1] }}
            style={{
              position: 'absolute',
              width: p.shape === 'star' ? 12 : 7,
              height: p.shape === 'star' ? 12 : 7,
              borderRadius: p.shape === 'circle' ? '50%' : 2,
              background: p.color,
              boxShadow: `0 0 ${10 * p.scale}px ${p.color}, 0 0 ${20 * p.scale}px ${p.color}60`,
              clipPath: p.shape === 'star'
                ? 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
                : 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function BeamSweep() {
  const [phase, setPhase] = useState<'on' | 'off'>('on');

  useEffect(() => {
    const t = setTimeout(() => setPhase('off'), 2600);
    return () => clearTimeout(t);
  }, []);

  if (phase === 'off') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Wide soft glow sweep */}
      <motion.div
        initial={{ x: '-120vw', skewX: -6 }}
        animate={{ x: '120vw' }}
        transition={{ duration: 2.0, ease: [0.3, 0, 0.15, 1], delay: 0.05 }}
        style={{
          position: 'absolute', top: 0, bottom: 0, width: '45vw',
          background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.06), rgba(57,255,20,0.18), rgba(57,255,20,0.06), transparent)',
          filter: 'blur(4px)',
        }}
      />
      {/* Sharp center beam */}
      <motion.div
        initial={{ x: '-120vw', skewX: -6 }}
        animate={{ x: '120vw' }}
        transition={{ duration: 2.0, ease: [0.3, 0, 0.15, 1], delay: 0.08 }}
        style={{
          position: 'absolute', top: '48%', height: 3, width: '45vw',
          background: 'linear-gradient(90deg, transparent, #39FF14, #FFFFFF, #39FF14, transparent)',
          boxShadow: '0 0 30px rgba(57,255,20,1), 0 0 80px rgba(57,255,20,0.6), 0 0 160px rgba(57,255,20,0.2)',
        }}
      />
      {/* Secondary purple beam */}
      <motion.div
        initial={{ x: '-120vw', skewX: -6 }}
        animate={{ x: '120vw' }}
        transition={{ duration: 2.0, ease: [0.3, 0, 0.15, 1], delay: 0.18 }}
        style={{
          position: 'absolute', top: '50%', height: 1.5, width: '45vw',
          background: 'linear-gradient(90deg, transparent, #A855F7, transparent)',
          boxShadow: '0 0 20px rgba(168,85,247,0.8)',
          opacity: 0.6,
        }}
      />
      {/* Flash vignette on beam entry */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at left, rgba(57,255,20,0.12) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}

function GlitchTitle({ children }: { children: React.ReactNode }) {
  const [glitch, setGlitch] = useState(false);
  const [offset, setOffset] = useState({ x1: 0, x2: 0 });

  useEffect(() => {
    // Heavy glitch burst on load
    const doGlitch = (x1: number, x2: number) => {
      setOffset({ x1, x2 });
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100 + Math.random() * 80);
    };

    // Rapid initial glitch sequence
    setTimeout(() => doGlitch(-6, 5), 350);
    setTimeout(() => doGlitch(4, -5), 480);
    setTimeout(() => doGlitch(-3, 7), 560);
    setTimeout(() => doGlitch(6, -4), 680);
    setTimeout(() => doGlitch(-2, 3), 820);

    // Occasional random glitch
    const iv = setInterval(() => {
      if (Math.random() > 0.8) {
        const x1 = Math.random() * 12 - 6;
        const x2 = -x1 + Math.random() * 4 - 2;
        doGlitch(x1, x2);
      }
    }, 2500);

    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block', isolation: 'isolate' }}>
      {children}
      {glitch && (
        <>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#A855F7',
            clipPath: 'inset(15% 0 55% 0)',
            transform: `translateX(${offset.x1}px)`,
            opacity: 0.85,
            pointerEvents: 'none',
          }}>{children}</div>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#39FF14',
            clipPath: 'inset(55% 0 10% 0)',
            transform: `translateX(${offset.x2}px)`,
            opacity: 0.75,
            pointerEvents: 'none',
          }}>{children}</div>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#FFFFFF',
            clipPath: 'inset(35% 0 35% 0)',
            transform: `translateX(${(offset.x1 + offset.x2) * 0.3}px)`,
            opacity: 0.3,
            pointerEvents: 'none',
          }}>{children}</div>
        </>
      )}
    </div>
  );
}

function SparkleField() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const generate = () => Array.from({ length: 16 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 5,
      color: Math.random() > 0.45 ? '#39FF14' : Math.random() > 0.5 ? '#A855F7' : '#FFFFFF',
      duration: 0.7 + Math.random() * 1.0,
    }));

    setSparkles(generate());
    const interval = setInterval(() => setSparkles(generate()), 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        {sparkles.map(s => (
          <motion.div key={s.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: s.duration, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              left: `${s.x}vw`, top: `${s.y}vh`,
              width: s.size, height: s.size,
              borderRadius: '50%',
              background: s.color,
              boxShadow: `0 0 ${s.size * 4}px ${s.color}, 0 0 ${s.size * 8}px ${s.color}50`,
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
      {/* Ambient nebula glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(57,255,20,0.04)' }} />
        <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: 'rgba(168,85,247,0.06)' }} />
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full blur-[100px]" style={{ background: 'rgba(107,33,168,0.07)' }} />
      </div>
    </>
  );
}

export { GlitchTitle };
