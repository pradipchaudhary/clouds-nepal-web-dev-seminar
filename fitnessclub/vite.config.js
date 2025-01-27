import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "slick-carousel/slick/slick.css": path.resolve(
        "node_modules/slick-carousel/slick/slick.css"
      ),
      "slick-carousel/slick/slick-theme.css": path.resolve(
        "node_modules/slick-carousel/slick/slick-theme.css"
      )
    }
  }
})
