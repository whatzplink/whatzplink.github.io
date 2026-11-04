import type { APIRoute } from 'astro';
import { languages, getLocalizedPath, type Lang } from '../i18n/ui';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://whatzplink.github.io';
  const localeKeys = Object.keys(languages) as Lang[];

  const urls = localeKeys
    .map((lang) => {
      const loc = `${baseUrl}${getLocalizedPath(lang)}`;
      const alternates = localeKeys
        .map(
          (altLang) =>
            `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}${getLocalizedPath(altLang)}" />`
        )
        .join('\n');
      return `  <url>
    <loc>${loc}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
    <changefreq>weekly</changefreq>
    <priority>${lang === 'en' ? '1.0' : '0.9'}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
