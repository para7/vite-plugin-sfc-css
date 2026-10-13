import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'
import { solidStart } from '@solidjs/start/config'
import sfcCss from './plugins/sfc-css.ts'

const port = process.env.PORT ? Number(process.env.PORT) : undefined

export default defineConfig({
  plugins: [sfcCss(), solidStart(), nitro()],
  server: { host: '127.0.0.1', port, strictPort: port !== undefined },
})
