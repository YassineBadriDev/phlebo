import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const publicDir = join(process.cwd(), "public");
mkdirSync(publicDir, { recursive: true });

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
  <path d="M15 3c.8.9 10 11.2 10 17a10 10 0 1 1-20 0C5 14.2 14.2 3.9 15 3Z" fill="#E5513E"/>
  <path d="M9.5 20.5h2.4l1.7-3.4 2.4 5.6 1.7-2.4h2.8" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#222222"/>
  <path d="M32 13c0 0 17 18 17 29 0 8.2-7.6 15-17 15s-17-6.8-17-15C15 31 32 13 32 13Z" fill="#E5513E"/>
  <path d="M20.5 45.5h5l3.2-6.4 4.5 10.7 3.2-4.5h7" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#222222"/>
  <circle cx="90" cy="540" r="220" fill="#262626"/>
  <circle cx="1140" cy="70" r="180" fill="#262626"/>
  <path d="M300 150c0 0 115 122 115 193a115 115 0 1 1-230 0c0-71 115-193 115-193Z" fill="#E5513E"/>
  <path d="M240 363h38l23-46 33 77 23-33h50" fill="none" stroke="#fff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="540" y="322" font-family="sans-serif" font-size="76" font-weight="800" fill="#F7F7F7">Phlebotomist Jobs</text>
  <text x="542" y="404" font-family="sans-serif" font-size="30" fill="#A7A7A7">Independent guide to phlebotomist jobs, pay &amp; hiring</text>
  <rect x="542" y="452" width="160" height="46" rx="23" fill="#E5513E"/>
  <text x="562" y="483" font-family="sans-serif" font-size="24" font-weight="700" fill="#fff">Browse Jobs</text>
</svg>
`;

writeFileSync(join(publicDir, "mark.svg"), mark);
writeFileSync(join(publicDir, "favicon.svg"), favicon);
writeFileSync(join(publicDir, "og-image.svg"), og);

await sharp(Buffer.from(favicon)).resize(192, 192).png().toFile(join(publicDir, "favicon-192.png"));
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile(join(publicDir, "apple-touch-icon.png"));
await sharp(Buffer.from(og)).png().toFile(join(publicDir, "og-image.png"));

console.log("assets: written mark.svg, favicon.svg, og-image.svg, favicon-192.png, apple-touch-icon.png, og-image.png");
