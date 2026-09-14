import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'gsap',
              test: /node_modules[\\/]gsap(?:[\\/]|$)/,
              priority: 30,
            },
            {
              name: 'react-vendor',
              test: /node_modules[\\/](?:react-dom|react-router(?:-dom)?|react|scheduler)(?:[\\/]|$)/,
              priority: 20,
            },
            {
              name: 'lenis',
              test: /node_modules[\\/]lenis(?:[\\/]|$)/,
              priority: 20,
            },
          ],
        },
      },
    },
  },
})
