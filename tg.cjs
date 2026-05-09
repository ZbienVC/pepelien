const fs = require('fs');
const TG = 'https://t.me/pepelien_sol';
['src/components/layout/Footer.tsx', 'src/components/sections/Story.tsx'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Replace first placeholder # href with telegram
  c = c.replace('href="#"', 'href="' + TG + '"');
  fs.writeFileSync(f, c, 'utf8');
  console.log('Updated', f);
});
