// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server', // 'static' si es solo HTML/CSS/JS, 'server' si quieres SSR
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});