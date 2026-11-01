import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.SITE_URL,
  devToolbar: { enabled: false },
  vite: { build: { assetsInlineLimit: 0 } },
});
