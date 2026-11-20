// CI gate: verifies the production build in dist/ before it can be deployed.
// Fails (exit 1) if any sitemap route is missing, empty or lacks SEO tags.
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(process.argv[2] || 'dist');
const errors = [];
const read = (f) => fs.readFileSync(path.join(dist, f), 'utf8');
const exists = (f) => fs.existsSync(path.join(dist, f));

for (const f of ['index.html', '404.html', 'sitemap.xml', 'robots.txt', '.htaccess']) {
  if (!exists(f)) errors.push(`missing ${f}`);
}

const sitemap = exists('sitemap.xml') ? read('sitemap.xml') : '';
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (urls.length < 10) errors.push(`sitemap has only ${urls.length} URLs`);

for (const p of urls) {
  const file = p === '/' ? 'index.html' : `${p.slice(1)}.html`;
  if (!exists(file)) { errors.push(`${p}: no ${file}`); continue; }
  const html = read(file);
  const root = html.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/);
  const checks = {
    'rendered content': root && root[1].length > 2000,
    'single <title>': (html.match(/<title>/g) || []).length === 1,
    'meta description': /<meta name="description" content="[^"]{50,}"/.test(html),
    canonical: html.includes(`<link rel="canonical" href="https://ecopakservices.com${p === '/' ? '/' : p}"`),
    'one <h1>': (html.match(/<h1[\s>]/g) || []).length === 1,
    'valid JSON-LD': (() => {
      const m = html.match(/<script type="application\/ld\+json" id="ld-json">([\s\S]*?)<\/script>/);
      try { return m && JSON.parse(m[1])['@graph'].length > 0; } catch { return false; }
    })(),
    'not noindex': !/name="robots" content="noindex/.test(html),
  };
  for (const [name, ok] of Object.entries(checks)) if (!ok) errors.push(`${p}: ${name}`);
}

if (exists('404.html') && !/noindex/.test(read('404.html'))) errors.push('404.html is not noindex');

if (errors.length) {
  console.error(`✗ dist check failed (${errors.length}):\n  - ${errors.join('\n  - ')}`);
  process.exit(1);
}
console.log(`✓ dist check passed: ${urls.length} prerendered routes, 404, sitemap, robots, .htaccess`);
