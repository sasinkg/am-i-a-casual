import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/am-i-a-casual/',  // 🔥 YOUR REPO NAME!
  build: {
    outDir: 'docs',         // 🔥 Important for GitHub Pages
  },
})
