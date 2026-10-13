import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import sfcCss from './plugins/sfc-css.ts'

const port = process.env.PORT ? Number(process.env.PORT) : undefined
const listen = { host: '127.0.0.1' as const, port, strictPort: port !== undefined }

export default defineConfig({
  plugins: [sfcCss(), solid()],
  server: listen,
  preview: listen,
})
