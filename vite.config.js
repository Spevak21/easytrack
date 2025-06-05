import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'easytrack';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
