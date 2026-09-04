import { existsSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const cacheDir = existsSync('D:/') ? 'D:/vite-cache/portfolio-system-01' : 'node_modules/.vite'

// https://vite.dev/config/
export default defineConfig({
  cacheDir,
  plugins: [react(), tailwindcss()],
})
