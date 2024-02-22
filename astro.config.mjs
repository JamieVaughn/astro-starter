import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from "@astrojs/cloudflare";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	output: "server",
  vite: {
    build: {
      minify: true, // false for debugging with wrangler
    },
  },
  adapter: cloudflare({
    mode: "advanced", // directory | advanced
  })
});
