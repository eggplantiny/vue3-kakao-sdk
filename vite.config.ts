import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    brotliSize: false,
    lib: {
      entry: path.join(__dirname, './target/ts/src/index.js'),
      name: 'Vue3KakaoSdk',
      formats: ['es']
    },
    outDir: 'target/vite'
  }
})
