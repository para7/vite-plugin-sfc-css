import { tanstackStart } from '@tanstack/solid-start/plugin/vite'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import sfcCss from './plugins/sfc-css.ts'

const port = process.env.PORT ? Number(process.env.PORT) : undefined

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [sfcCss(), nitro(), tanstackStart(), solidPlugin({ ssr: true })],
  server: { host: '127.0.0.1', port, strictPort: port !== undefined },
})
