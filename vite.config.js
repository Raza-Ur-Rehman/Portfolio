import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tailwindScrollbar from 'tailwind-scrollbar'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(
    {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
      ],
      theme: {
        extend: {
          fontFamily: {
            'sans': ['Inter', 'sans-serif'],
            'serif': ['Merriweather', 'serif'],
            'mono': ['Fira Code', 'monospace'],
          },
        },
      },
      plugins: [
        tailwindScrollbar
      ],
    }
  )],
   
})
