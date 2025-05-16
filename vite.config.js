import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  darkMode: 'class', // Enables dark mode via 'class'
  plugins: [
    tailwindcss(),
  ],
})