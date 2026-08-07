import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    watch: {
      // OneDrive/AV software create transient locked temp files (e.g. "~rofile.tmp")
      // while syncing files under Documents; ignore them so the watcher doesn't crash.
      ignored: ['**/public/assets/~*', '**/node_modules/**', '**/.git/**'],
    },
  },
})
