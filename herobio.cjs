const fs = require('fs');
let c = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');
const oldBio = c.match(/(<motion\.p[^>]*delay: 0\.6[\s\S]*?<\/motion\.p>)/m);
if (oldBio) {
  const newBio = `<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-base md:text-lg max-w-md font-medium leading-relaxed body-glow" style={{ color: 'rgba(240,244,255,0.65)' }}>
            Crypto's first <span className="kw">Pepe + Elon + Alien</span> meme.
            Two memes that won't die and an alien meta just getting started.
            All mashed into one. <span className="kw">$PEPELIEN</span> — a true OG meme token across all chains.
          </motion.p>`;
  c = c.replace(oldBio[0], newBio);
  fs.writeFileSync('src/components/sections/Hero.tsx', c, 'utf8');
  console.log('Updated hero bio');
} else {
  console.log('Pattern not found');
}
