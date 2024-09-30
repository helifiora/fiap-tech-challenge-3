import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 3001,
    host: true,
  },
})
