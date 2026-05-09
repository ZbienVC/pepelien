const fs = require('fs');

const CA = 'yFFoq7rCHkMQPTwS7bhUyF68cz4Xs2YmnksXuwJpump';
const PAIR = 'DFStrnByyAhpSeqQJCS9RBz1SNKe4PYXSAnUqVigxv2E';

['src/components/sections/Hero.tsx',
 'src/components/layout/Navbar.tsx',
 'src/components/layout/Footer.tsx',
 'src/components/sections/Chart.tsx'
].forEach(f => {
  let code = fs.readFileSync(f, 'utf8');
  code = code.replace(/PLACEHOLDER_CA/g, CA);
  code = code.replace(/PLACEHOLDER_PAIR/g, PAIR);
  fs.writeFileSync(f, code, 'utf8');
  console.log('Updated', f);
});

// Also update the buy button in navbar to point to raydium with CA
let nav = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');
nav = nav.replace('href="https://raydium.io"', `href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${CA}"`);
fs.writeFileSync('src/components/layout/Navbar.tsx', nav, 'utf8');
console.log('Navbar buy link updated');
