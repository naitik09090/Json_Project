import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to inline critical CSS assets directly into index.html
const inlineCss = () => {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      // Find the index.html file in the bundle
      const htmlFile = Object.values(bundle).find(f => f.fileName === 'index.html');
      if (!htmlFile) return;

      let htmlContent = htmlFile.source;

      // Find all CSS files in the bundle
      const cssAssets = Object.values(bundle).filter(
        f => f.type === 'asset' && f.fileName.endsWith('.css')
      );

      for (const cssAsset of cssAssets) {
        const escapedFileName = cssAsset.fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Regex to match <link ... href="/assets/index-xxx.css" ...> or similar
        const regex = new RegExp(`<link[^>]*href=["'][^"']*${escapedFileName}["'][^>]*>`, 'g');
        
        if (regex.test(htmlContent)) {
          console.log(`[inline-css] Inlining ${cssAsset.fileName} into index.html`);
          const styleTag = `<style>${cssAsset.source}</style>`;
          htmlContent = htmlContent.replace(regex, styleTag);
          // Delete from bundle so it is not written to disk as a separate file
          delete bundle[cssAsset.fileName];
        }
      }

      htmlFile.source = htmlContent;
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      treeshake: {
        moduleSideEffects: 'no-external'
      }
    }
  }
})

