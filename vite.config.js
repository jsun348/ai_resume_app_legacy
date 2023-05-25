import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Set the desired output directory to 'docs'
    base: './', // Add this line to set the base path
  },
});
