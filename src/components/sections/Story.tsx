"use client";
import { motion } from "framer-motion";
import { Eye, Zap, Globe } from "lucide-react";

const fade: any = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } } };

const CONSPIRACY = [
  {
    icon: <Zap className="w-5 h-5" style={{ color: '#39FF14' }} />,
    label: "EVIDENCE FILE 001",
    title: "The SpaceX Evidence",
    body: "No human builds reusable rockets to Mars in their spare time. The trajectory calculations, the Starlink network, the Neuralink chips — this is alien tech being slowly drip-fed to a species that isn't ready.",
    kicker: "Elon is leaking it on purpose.",
  },
  {
    icon: <span className="text-lg">🐸</span>,
    label: "EVIDENCE FILE 002",
    title: "The Pepe Connection",
    body: "Ancient Egyptians worshipped Kek — a frog-headed god of chaos and the primordial unknown. Pepe is the modern incarnation. He has been aware of Elon's true origin since the beginning.",
    kicker: "Kek wills it. Pepe knows.",
  },
  {
    icon: <Globe className="w-5 h-5" style={{ color: '#A855F7' }} />,
    label: "CLASSIFIED THESIS",
    title: "The $PEPELIEN Thesis",
    body: "What do you get when crypto's most unhinged billionaire-alien meets the internet's immortal frog god? A token with more gravitational pull than a SpaceX rocket and more meme energy than all of Twitter.",
    kicker: "You get $PEPELIEN.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">

        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade} className="text-center">
          <p className="label-classified mb-6">&#x25A0; Classified Information &#x25A0;</p>
          <h2 className="text-3xl md:text-6xl font-bold font-[family-name:var(--font-fredoka)] mb-6 leading-tight">
            <span className="text-stroke-white tracked">The Truth</span>{" "}
            <span style={{ color: '#F0F4FF' }}>They Don't</span><br />
            <span className="text-gradient-alien glow-text">Want You to Know</span>
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed body-glow" style={{ color: 'rgba(240,244,255,0.65)' }}>
            <span className="kw">Elon Musk</span> didn't come here to make cars.{" "}
            He came here to prepare a species that still thinks the moon landing was filmed in a studio.{" "}
            <span className="kw-purple">$PEPELIEN</span> is the signal.
          </p>
        </motion.div>

        {/* Meme + text split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="h-80 md:h-[480px] rounded-3xl overflow-hidden relative"
            style={{ border: '1px solid rgba(57,255,20,0.15)' }}>
            <img src="/pepelien-logo.jpg" alt="PepeElon SpaceX" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,0,10,0.85) 0%, transparent 60%)' }} />
            <div className="absolute bottom-5 left-6">
              <p className="label-alien">&#x25A0; Numbers Don't Lie &#x25A0;</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="flex flex-col gap-5">
            <p className="label-alien">&#x25A0; Declassified &#x25A0;</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span style={{ color: '#F0F4FF' }}>Elon Is{" "}</span>
              <span className="text-gradient-alien" style={{ textShadow: 'none' }}>Not From Here</span>
            </h3>
            <p className="leading-relaxed text-base body-glow" style={{ color: 'rgba(240,244,255,0.55)' }}>
              <span className="lead-bold">Born in South Africa.</span> Claims to be human. Has since built the world's most advanced rocket company, implanted chips in brains, launched{" "}
              <span className="kw">6,000 satellites</span>, bought the world's largest social media platform, and{" "}
              <span className="kw-purple">named his kid X Æ A-12.</span>
            </p>
            <p className="leading-relaxed text-base" style={{ color: 'rgba(240,244,255,0.4)' }}>
              A normal human being from Pretoria did not do all of that.{" "}
              <span className="redacted">CLASSIFIED</span>{" "}
              Connect the dots, anon.
            </p>
            <div className="flex items-start gap-3 px-5 py-4 rounded-2xl"
              style={{ background: 'rgba(57,255,20,0.05)', border: '1px solid rgba(57,255,20,0.15)' }}>
              <span className="text-2xl flex-shrink-0">&#x1F47D;</span>
              <p className="text-sm font-bold font-[family-name:var(--font-orbitron)] body-glow leading-relaxed" style={{ color: '#39FF14', letterSpacing: '0.04em' }}>
                "THE TRUTH IS OUT THERE.<br />AND IT'S ON-CHAIN."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Conspiracy thesis cards */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <div className="text-center mb-10">
            <p className="label-classified mb-4">&#x25A0; The Evidence &#x25A0;</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)]">
              <span style={{ color: '#F0F4FF' }}>The </span>
              <span className="text-gradient-alien" style={{ textShadow: 'none' }}>$PEPELIEN</span>
              <span style={{ color: '#F0F4FF' }}> Conspiracy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONSPIRACY.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="p-7 rounded-3xl flex flex-col gap-4 relative overflow-hidden"
                style={{ background: 'rgba(57,255,20,0.03)', border: '1px solid rgba(57,255,20,0.1)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.4), transparent)' }} />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.15)' }}>
                    {c.icon}
                  </div>
                  <span className="label-alien" style={{ fontSize: 9 }}>{c.label}</span>
                </div>
                <h3 className="text-base font-bold font-[family-name:var(--font-orbitron)]"
                  style={{ color: '#F0F4FF', letterSpacing: '0.02em' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,0.5)' }}>{c.body}</p>
                <p className="text-sm font-bold kw">{c.kicker}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Callout */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
          className="text-center px-6 py-14 rounded-3xl relative overflow-hidden"
          style={{ background: 'rgba(57,255,20,0.03)', border: '1px solid rgba(57,255,20,0.1)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.5), transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)' }} />
          <p className="label-classified mb-6">&#x25A0; The Mission is Clear &#x25A0;</p>
          <h3 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] mb-3" style={{ color: '#F0F4FF' }}>
            Elon. Pepe. Alien.
          </h3>
          <h3 className="text-4xl md:text-7xl font-black font-[family-name:var(--font-fredoka)] mb-6 text-gradient-alien"
            style={{ textShadow: 'none', WebkitTextStroke: '0px' }}>
            $PEPELIEN.
          </h3>
          <p className="text-base max-w-xl mx-auto leading-relaxed body-glow" style={{ color: 'rgba(240,244,255,0.55)' }}>
            Crypto's first <span className="kw">Pepe + Elon + Alien</span> meme token. Two memes that won't die and an alien meta just getting started.{" "}
            You're either <span className="kw">early</span> or you're <span className="kw-purple">explaining it to your normie friends</span> in six months.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
