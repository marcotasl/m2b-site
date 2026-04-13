#!/usr/bin/env node
// Remove fundo claro (branco/creme) e faz crop tight ao redor do conteúdo restante.
// Uso: node remove-bg-crop.mjs <input> <output> [lumThreshold=0.88] [chromaThreshold=30]
import sharp from "sharp";

const [, , input, output, lumArg, chromaArg] = process.argv;
if (!input || !output) {
  console.error("Uso: node remove-bg-crop.mjs <input> <output> [lum=0.88] [chroma=30]");
  process.exit(1);
}

const LUM = parseFloat(lumArg ?? "0.88");
const CHROMA = parseInt(chromaArg ?? "30", 10);

const img = sharp(input).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;

let minX = w, minY = h, maxX = -1, maxY = -1;

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const a = data[i + 3];
    if (a === 0) continue;

    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const chromaLow = Math.abs(r - g) < CHROMA && Math.abs(g - b) < CHROMA && Math.abs(r - b) < CHROMA;

    // "Fundo" = pixel claro e com baixa saturação (cinza/branco/creme)
    const isBg = lum > LUM && chromaLow;

    if (isBg) {
      data[i + 3] = 0; // transparente
    } else {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

if (maxX < 0) {
  console.error("Nenhum pixel não-fundo encontrado. Abortando.");
  process.exit(2);
}

// Padding de 2% nas bordas
const pad = Math.round(Math.max(maxX - minX, maxY - minY) * 0.02);
minX = Math.max(0, minX - pad);
minY = Math.max(0, minY - pad);
maxX = Math.min(w - 1, maxX + pad);
maxY = Math.min(h - 1, maxY + pad);

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;

await sharp(data, { raw: { width: w, height: h, channels: 4 } })
  .extract({ left: minX, top: minY, width: cropW, height: cropH })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`✓ ${output} — ${cropW}×${cropH} (crop de ${w}×${h})`);
