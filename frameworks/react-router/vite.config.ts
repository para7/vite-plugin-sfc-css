import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import sfcCss from './plugins/sfc-css.ts'

const port = process.env.PORT ? Number(process.env.PORT) : undefined

export default defineConfig({
  plugins: [sfcCss(), reactRouter()],
  resolve: { tsconfigPaths: true },
  server: { host: '127.0.0.1', port, strictPort: port !== undefined },
})
