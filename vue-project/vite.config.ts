import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolvePath = (url: string) => path.resolve(__dirname, url)

export default defineConfig({
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  },
  plugins: [vue()]
})
