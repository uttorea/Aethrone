import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is correctly set (default is 'dist')
  },
  server: {
    open: true, // This opens the browser automatically when you run the dev server
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for easier imports
    },
  },
  optimizeDeps: {
    include: ['react-router-dom'], // Ensures react-router-dom is pre-bundled for faster development
  },
  // Adding the fallback configuration to ensure proper routing on Vercel
  // esbuild: {
  //   jsxInject: `import React from 'react'`, // Automatically imports React in all JSX files
  // },
});
