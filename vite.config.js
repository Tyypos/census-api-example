import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
    plugins: [react(), tailwindcss()],
    base: mode === 'development' ? '' : '/census-api-example/', // dev vs GitHub Pages
}));
