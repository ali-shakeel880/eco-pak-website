import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export { ROUTES, NOT_FOUND } from './seo/routes.js';
export { headToHtml } from './seo/head.js';
export { SITE } from './seo/site.js';

// Renders a route to HTML, waiting for lazy-loaded pages to resolve.
export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  const decoder = new TextDecoder();
  let html = '';
  for await (const chunk of prelude) html += typeof chunk === 'string' ? chunk : decoder.decode(chunk, { stream: true });
  return html + decoder.decode();
}
