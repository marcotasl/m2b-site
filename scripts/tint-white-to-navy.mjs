#!/usr/bin/env node
// Converte pixels brancos de um PNG em navy (#212741), mantendo demais cores.
// Uso: node scripts/tint-white-to-navy.mjs <input> <output>
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const [, , input, output] = process.argv;
if (!input || !output) {
  console.error("Uso: node tint-white-to-navy.mjs <input.png> <output.png>");
  process.exit(1);
}

const img = sharp(input).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

const TARGET_R = 0x21;
const TARGET_G = 0x27;
const TARGET_B = 0x41;

// Threshold: qualquer pixel com luminância > 0.8 é considerado "branco"
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
  if (a === 0) continue;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum > 0.78 && Math.abs(r - g) < 30 && Math.abs(g - b) < 30) {
    data[i] = TARGET_R;
    data[i + 1] = TARGET_G;
    data[i + 2] = TARGET_B;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: info.channels },
})
  .png()
  .toFile(output);

console.log(`✓ Saved ${output}`);
