import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FinTracker-PL/',  // ← zmień z '/Finanse/' na to
})
