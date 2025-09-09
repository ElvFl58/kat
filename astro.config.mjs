// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import netlify from "@astrojs/netlify/functions";
//import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: "server", // 👈 importante: modo SSR
  adapter: netlify(),
  integrations: [react(), svelte()]
});