import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

// 相対 import や symlink だと、プラグイン内の `vite` がアプリではなくリポジトリ側の Vite を見てしまう
const root = resolve(import.meta.dirname, '..')
const app = resolve(process.argv[2] ?? '.')
const plugin = resolve(app, 'plugins/sfc-css.ts')
const types = resolve(app, process.argv[3] ?? 'src/sfc-css.d.ts')
mkdirSync(dirname(plugin), { recursive: true })
mkdirSync(dirname(types), { recursive: true })
copyFileSync(resolve(root, 'plugins/sfc-css.ts'), plugin)
copyFileSync(resolve(root, 'src/sfc-css.d.ts'), types)
