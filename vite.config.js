import { defineConfig } from 'vite';

export default defineConfig({
  // '/' is correct for Vercel (no subdirectory). Change to '/portfolio/' for GitHub Pages.
  base: '/',

  build: {
    outDir: 'dist',
    // Inline assets smaller than 4 KB as base64 (favicon, small icons)
    assetsInlineLimit: 4096,
    // Produce a clean dist/ on every build
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Deterministic filenames with content hash for cache-busting
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[chunk]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop() ?? '';
          if (['css'].includes(ext)) return 'assets/css/[name]-[hash][extname]';
          if (['woff', 'woff2', 'ttf', 'otf'].includes(ext))
            return 'assets/fonts/[name]-[hash][extname]';
          if (['png', 'jpg', 'jpeg', 'svg', 'webp', 'ico'].includes(ext))
            return 'assets/img/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },

  // Keep src/js imports working exactly as before — no alias changes needed
  // because Vite resolves ES module imports natively.
});
