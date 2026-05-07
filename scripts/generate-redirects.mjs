import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { redirects } from '../redirects.config.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const OUT_DIR = resolve(ROOT, 'out');

function generateHTML(target) {
  const escaped = target.replace(/'/g, "\\'");
  return `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=${target}">
  <link rel="canonical" href="${target}">
  <script>window.location.href='${escaped}'</script>
</head>
<body>Redirecting to <a href="${target}">${target}</a>...</body>
</html>`;
}

const entries = Object.entries(redirects);

if (entries.length === 0) {
  console.log('No redirects defined, skipping.');
  process.exit(0);
}

for (const [path, target] of entries) {
  const dir = resolve(OUT_DIR, `.${path}`);
  const file = resolve(dir, 'index.html');

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(file, generateHTML(target), 'utf-8');
  console.log(`  ${path} -> ${target}`);
}

console.log(`\nGenerated ${entries.length} redirect page(s).`);
