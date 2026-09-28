import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   server: {
    port: 3000,
  },
  // Relative URLs work at both a custom domain and a GitHub Pages project path.
  base: '/gulshan-zafar-portfolio/',
})
