import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    chunkSizeWarningLimit: 500000
  },
  server: {
    // host: '127.0.0.1', 
    host: 'localhost',
    port: 3000, // You can change the port as needed
  },
  node: { global: true },
})
