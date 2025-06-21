import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      // your aliases if any
    },
  },
  // THIS IS IMPORTANT
  server: {
    fs: {
      allow: ['.'],
    },
  },
  preview: {
    // This is what enables reload on deep routes
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
