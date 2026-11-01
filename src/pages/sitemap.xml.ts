import type { APIRoute } from 'astro';
import { locales, pages, routes } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const urls = site
    ? locales.flatMap((locale) => pages.map((page) => `<url><loc>${new URL(routes[locale][page], site)}</loc></url>`)).join('')
    : '';

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
