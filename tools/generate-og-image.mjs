// Generates the social sharing image (public/images/og-image.png, 1200 x 630).
// Run with: npm run og
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1f2a6d"/>
  <rect x="80" y="84" width="120" height="14" fill="#f6b500"/>
  <text x="80" y="250" font-family="Arial Narrow, Helvetica, Arial, sans-serif" font-weight="700" font-size="120" fill="#ffffff">Bergkraft</text>
  <text x="80" y="345" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="46" fill="#ffffff">Your sourcing team in India.</text>
  <text x="80" y="405" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#c9cdea">Rice and green coffee. Found, vetted, negotiated, delivered.</text>
  <text x="80" y="548" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="28" fill="#f6b500">Paid by the buyer, not the supplier.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/images/og-image.png', import.meta.url).pathname);
console.log('Wrote public/images/og-image.png');
