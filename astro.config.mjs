// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The site is served at the root of the bodyan359.github.io user-site.
  site: 'https://bodyan359.github.io',
  // Keep all CSS inlined into <style> (preserves the tuned FCP/LCP — no
  // render-blocking stylesheet request, same as the pre-migration site).
  build: {
    inlineStylesheets: 'always',
  },
});
