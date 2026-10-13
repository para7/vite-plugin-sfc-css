import vinext from 'vinext'
import { defineConfig } from 'vite'
import sfcCss from './plugins/sfc-css.ts'

const port = process.env.PORT ? Number(process.env.PORT) : undefined

export default defineConfig({
  plugins: [sfcCss(), vinext()],
  server: { host: '127.0.0.1', port, strictPort: port !== undefined },
})
