// Generates the temporary artwork in public/images/.
// These are abstract illustrations, not photographs. Replace each file with
// genuine photography (see README, "Images to replace") and keep the file names
// or update src/data/images.ts.
import { writeFileSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const out = new URL('../public/images/', import.meta.url);
mkdirSync(out, { recursive: true });

// Small seeded random generator so the artwork is identical on every run.
function rng(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const svg = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>`;

function rice(w, h, seed, count) {
  const r = rng(seed);
  const tones = ['#efe6d2', '#e8dcc2', '#f4ecdb', '#ddcfb0', '#f8f2e4'];
  let s = `<rect width="${w}" height="${h}" fill="#bfae8a"/>`;
  for (let i = 0; i < count; i++) {
    const x = r() * w, y = r() * h, rx = 30 + r() * 16, ry = 5.5 + r() * 2.5, a = r() * 180;
    s += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${rx.toFixed(0)}" ry="${ry.toFixed(1)}" transform="rotate(${a.toFixed(0)} ${x.toFixed(0)} ${y.toFixed(0)})" fill="${pick(r, tones)}" stroke="#8a7648" stroke-opacity=".35"/>`;
  }
  return svg(w, h, s);
}

function coffee(w, h, seed, count) {
  const r = rng(seed);
  const tones = ['#8f9a78', '#a3a886', '#7f8c6c', '#b2b392', '#97a07f'];
  let s = `<rect width="${w}" height="${h}" fill="#26332a"/>`;
  for (let i = 0; i < count; i++) {
    const x = r() * w, y = r() * h, rx = 24 + r() * 8, ry = 16 + r() * 5, a = r() * 180;
    const X = x.toFixed(0), Y = y.toFixed(0);
    s += `<g transform="rotate(${a.toFixed(0)} ${X} ${Y})"><ellipse cx="${X}" cy="${Y}" rx="${rx.toFixed(0)}" ry="${ry.toFixed(0)}" fill="${pick(r, tones)}" stroke="#1b241d" stroke-opacity=".5"/><path d="M${(x - rx * 0.75).toFixed(0)} ${Y} q${(rx * 0.75).toFixed(0)} ${(-ry * 0.45).toFixed(0)} ${(rx * 1.5).toFixed(0)} 0" fill="none" stroke="#4d5a44" stroke-width="2"/></g>`;
  }
  return svg(w, h, s);
}

function estate(w, h, seed) {
  const r = rng(seed);
  const greens = ['#c9cfae', '#9fb08a', '#6f8a66', '#476a52', '#2a4c3c', '#17352a'];
  let s = `<rect width="${w}" height="${h}" fill="#ece5d3"/><circle cx="${w * 0.72}" cy="${h * 0.2}" r="${h * 0.07}" fill="#e3d6bd"/>`;
  greens.forEach((c, i) => {
    const base = h * (0.34 + i * 0.11), amp = 26 + i * 6, p1 = r() * 6, p2 = r() * 6;
    let d = `M0 ${h} L0 ${base}`;
    for (let x = 0; x <= w; x += 20) {
      const y = base + Math.sin(x / 150 + p1) * amp + Math.sin(x / 61 + p2) * amp * 0.3;
      d += ` L${x} ${y.toFixed(0)}`;
    }
    s += `<path d="${d} L${w} ${h} Z" fill="${c}"/>`;
  });
  return svg(w, h, s);
}

function portrait(w, h) {
  return svg(w, h,
    `<rect width="${w}" height="${h}" fill="#e3d6bd"/><circle cx="${w / 2}" cy="${h * 0.4}" r="${w * 0.17}" fill="#cbbb97"/><path d="M${w * 0.14} ${h} q${w * 0.36} ${-h * 0.5} ${w * 0.72} 0 Z" fill="#cbbb97"/>`);
}

const files = {
  'hero-rice.svg': rice(900, 1200, 11, 420),
  'hero-coffee.svg': coffee(800, 800, 23, 260),
  'rice-detail.svg': rice(1200, 900, 5, 420),
  'coffee-detail.svg': coffee(1200, 900, 41, 400),
  'coffee-estate.svg': estate(1200, 800, 3),
  'founder-placeholder.svg': portrait(800, 1000),
};
for (const [name, content] of Object.entries(files)) writeFileSync(new URL(name, out), content);

// Social sharing image (1200 x 630 PNG).
const og = svg(1200, 630,
  `<rect width="1200" height="630" fill="#0e241d"/><rect x="80" y="80" width="64" height="3" fill="#c9a961"/>
   <text x="80" y="300" font-family="Georgia, serif" font-size="92" fill="#f6f1e7">Bergkraft</text>
   <text x="80" y="372" font-family="Georgia, serif" font-size="40" fill="#e3d6bd">Your procurement desk in India.</text>
   <text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#c9a961" letter-spacing="3">INDEPENDENT BUYER-SIDE SOURCING · RICE · GREEN COFFEE</text>`);
await sharp(Buffer.from(og)).png().toFile(new URL('og-image.png', out).pathname);
console.log('Placeholder artwork written to public/images/');
