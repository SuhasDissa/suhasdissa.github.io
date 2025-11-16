import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://suhasdissa.top",
  integrations: [
    mdx(),
    sitemap({
      // Customize URLs with priority and changefreq
      customPages: [],
      filter: (page) => {
        // Exclude any pages you don't want in sitemap
        return !page.includes('/404') && !page.includes('/private');
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Group pages by type with custom priorities
      serialize(item) {
        // Blog posts get higher priority
        if (item.url.includes('/blog/')) {
          item.changefreq = 'monthly';
          item.priority = 0.9;
        }
        // Projects get high priority
        else if (item.url.includes('/project')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        }
        // Garden/tips get medium priority
        else if (item.url.includes('/garden') || item.url.includes('/tip')) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        // Homepage gets highest priority
        else if (item.url === 'https://suhasdissa.top/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        }
        // Other pages get default
        else {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        }
        return item;
      },
    }),
    tailwind(),
  ],
});
