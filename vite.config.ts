import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@store': '/src/store',
      theme: '/src/theme',
      '@utils': '/src/utils',
      '@images': '/public/images',
      // '@src': '/src',
    },
  },
  server: {
    port: 5171,
  },
} as UserConfig);
