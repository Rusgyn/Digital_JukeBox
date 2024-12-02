import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        port: 5173,
        proxy: {
            "/back-end": {
                target: "http://localhost:3000",
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/back-end/, ""),
            },
        },
    },
});
