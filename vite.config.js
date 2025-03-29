import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      config: `${path.resolve(__dirname, "./src/config/")}`,
      api: path.resolve(__dirname, "./src/api"),
      context: `${path.resolve(__dirname, "./src/context")}`,
    },
  },

})
