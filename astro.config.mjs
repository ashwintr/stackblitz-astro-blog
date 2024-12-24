import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: 'https://ashwintr.github.io',
  base: 'stackblitz-astro-blog',
  integrations: [mdx(), svelte(), yeskunallumami({
    id: "b08debc9-2b81-4109-92e4-4160d8bee80e"
  })],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  }
});