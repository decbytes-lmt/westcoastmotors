import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' => dist/ works from any folder or sub-path on static hosting
export default defineConfig({ plugins: [react()], base: './' })
