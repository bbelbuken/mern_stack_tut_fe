import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        hmr: {
            timeout: 30000, // 30 seconds (default is 10 seconds)
            overlay: true, // shows errors on the browser overlay
        },
    },
});
