import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "madame-guitare.fr",
  integrations: [react(), sitemap()],
  output: "server",
  adapter: vercel()
});