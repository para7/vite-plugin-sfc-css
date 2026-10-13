import { fileRoutes } from 'filesystem-routing/vite'
import { defineConfig } from 'vite'
import solid from '@solidjs/vite-plugin'
import sfcCss from './plugins/sfc-css.ts'

const port = process.env.PORT ? Number(process.env.PORT) : undefined

export default defineConfig({
  // Solid 2 の start mode (SolidStart の後継)。`ssr: true` でストリーミング SSR、
  // `start.node` で Node 用のサーバー (`dist/server/node.js`) を出す
  plugins: [sfcCss(), solid({ start: { node: true }, ssr: true, extensions: ['.jsx', '.tsx'] }), fileRoutes({ types: true })],
  server: { host: '127.0.0.1', port, strictPort: port !== undefined },
})
