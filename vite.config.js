import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    watch: {
      // OneDrive/AV software transiently locks files (temp files, or freshly
      // written/downloaded assets) while syncing under Documents, which
      // crashes Vite's watcher with EBUSY. Static assets never need HMR
      // anyway, so skip watching the whole folder rather than the file.
      ignored: ['**/public/assets/**', '**/node_modules/**', '**/.git/**'],
    },
  },
})
