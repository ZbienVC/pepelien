const fs = require('fs');
let c = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// Remove the old duplicate image block (pepelien-21.jpg one)
const oldBlock = `          <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden"
            style={{ height: 460, border: '1px solid rgba(57,255,20,0.2)', boxShadow: '0 0 60px rgba(57,255,20,0.15), 0 0 120px rgba(57,255,20,0.06)' }}>
            <img src="/pepelien-21.jpg" alt="PEPELIEN meme" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(3,0,10,0.7) 0%, transparent 50%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(57,255,20,0.08) 0%, transparent 60%)' }} />
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                style={{ background: 'rgba(57,255,20,0.12)', border: '1px solid rgba(57,255,20,0.3)', color: '#39FF14' }}>
                👽 They're Here
              </span>
            </div>
          </motion.div>
          <div className="absolute -inset-8 -z-10 rounded-full blur-[80px]" style={{ background: 'rgba(57,255,20,0.06)' }} />
        </motion.div>
      </div>`;

const replacement = `      </div>`;

c = c.replace(oldBlock, replacement);
fs.writeFileSync('src/components/sections/Hero.tsx', c, 'utf8');
console.log('Fixed. Old block removed:', !c.includes('pepelien-21.jpg'));
