// filepath: vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './', // Préfixe toutes les URLs des assets avec ./
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                privacy: resolve(__dirname, 'politique-confidentialite.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});