// Build-time prerendering for the Vite SPA.
// For every route in src/seo/routes.js this writes static HTML containing the
// fully rendered page plus route-specific <title>, meta description, canonical,
// Open Graph and JSON-LD. Also generates sitemap.xml, robots.txt and 404.html.
//
// Output layout (served by public/.htaccess):
//   /                     -> dist/index.html
//   /services/foo         -> dist/services/foo.html
//   unknown URLs          -> dist/404.html with HTTP 404
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, ROUTES, NOT_FOUND, headToHtml, SITE } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('Template missing empty #root');

function page(route, appHtml) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, headToHtml(route))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function outFile(routePath) {
  if (routePath === '/') return path.join(dist, 'index.html');
  return path.join(dist, `${routePath.replace(/^\//, '')}.html`);
}

let count = 0;
for (const route of ROUTES) {
  const html = await render(route.path);
  if (!html || html.length < 500) throw new Error(`Empty render for ${route.path}`);
  const file = outFile(route.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(route, html));
  count++;
}

// 404 page (served with a real 404 status by .htaccess ErrorDocument).
fs.writeFileSync(path.join(dist, '404.html'), page(NOT_FOUND, await render('/__not-found__')));

// sitemap.xml — indexable routes only.
const urls = ROUTES.filter((r) => !r.noindex)
  .map((r) => {
    const loc = r.path === '/' ? `${SITE.url}/` : `${SITE.url}${r.path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>\n  </url>`;
  })
  .join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

// robots.txt — open to search engines and AI search/assistant crawlers.
// To opt out of AI *training* only, add e.g. "User-agent: GPTBot\nDisallow: /"
// (OAI-SearchBot, used for ChatGPT search results, is separate).
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${count} routes + 404.html, sitemap.xml, robots.txt`);
