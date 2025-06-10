import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-avatar', '@radix-ui/react-label', '@radix-ui/react-separator', '@radix-ui/react-slot'],
          query: ['@tanstack/react-query'],
          animation: ['framer-motion'],
          utils: ['axios', 'clsx', 'tailwind-merge']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Source maps for production debugging (optional)
    sourcemap: false
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
