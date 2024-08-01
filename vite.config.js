import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'bootstrap'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the limit if necessary
  },
});