import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig, lazyPlugins } from 'vite-plus'
import sfcCss from './plugins/sfc-css.ts'

const port = process.env.PORT ? Number(process.env.PORT) : undefined

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: lazyPlugins(() => [sfcCss(), tanstackStart(), viteReact()]),
  server: { host: '127.0.0.1', port, strictPort: port !== undefined },
  preview: { host: '127.0.0.1', port, strictPort: port !== undefined },
})
