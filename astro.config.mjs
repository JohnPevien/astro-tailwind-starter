import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Configure for static site generation
  output: 'static',
  
  // Site metadata for production deployment
  site: 'https://example.com',  // Replace with actual production URL
  trailingSlash: 'ignore',      // Handle trailing slashes consistently
  
  // Build optimizations
  build: {
    compress: true,             // Enable Brotli and Gzip compression
  },
  
  // Vite optimizations
  vite: {
    build: {
      minify: true,             // Minify JavaScript, CSS, and HTML
      cssMinify: 'esbuild',     // Use ESBuild for faster CSS minification
    },
  },
  
  // Integrations
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,   // Disable base styles for better control
    },
  })],
});