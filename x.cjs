const fs = require('fs');
const X = 'https://x.com/Pepelien_SOL';
['src/components/layout/Footer.tsx'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace('href="#"', 'href="' + X + '"');
  fs.writeFileSync(f, c, 'utf8');
  console.log('Updated', f);
});
