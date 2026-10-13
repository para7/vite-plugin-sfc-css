import { defineConfig, type Project } from '@playwright/test'

// Playwright 1.63 は project ごとの webServer を持たない。--project のときだけそのサーバーを起動する
const selected = () => {
  const names: string[] = []
  for (let i = 0; i < process.argv.length; i++) {
    const arg = process.argv[i]
    if (arg === '--project') names.push(process.argv[++i])
    else if (arg.startsWith('--project=')) names.push(arg.slice('--project='.length))
  }
  return names
}

const host = '127.0.0.1'

const apps: { name: string; buildPort: number; devPort: number; build: string }[] = [
  { name: 'react-router', buildPort: 4311, devPort: 4312, build: 'pnpm build && pnpm start' },
  { name: 'tanstack-react', buildPort: 4321, devPort: 4322, build: 'pnpm build && pnpm start' },
  { name: 'tanstack-solid', buildPort: 4331, devPort: 4332, build: 'pnpm build && pnpm start' },
  { name: 'solid-start', buildPort: 4341, devPort: 4342, build: 'pnpm build && pnpm start' },
  { name: 'solid-spa', buildPort: 4351, devPort: 4352, build: 'pnpm build && pnpm preview' },
  { name: 'vinext', buildPort: 4361, devPort: 4362, build: 'pnpm build && pnpm start' },
]

const wanted = selected()
const active = apps.filter((app) => wanted.length === 0 || wanted.some((name) => name.startsWith(`${app.name}:`)))

const projects: Project[] = active.flatMap((app) =>
  (['build', 'dev'] as const)
    .filter((mode) => wanted.length === 0 || wanted.includes(`${app.name}:${mode}`))
    .map((mode) => {
      const port = mode === 'build' ? app.buildPort : app.devPort
      return {
        name: `${app.name}:${mode}`,
        use: { baseURL: `http://${host}:${port}` },
      }
    }),
)

export default defineConfig({
  testDir: '.',
  testMatch: 'frameworks.spec.ts',
  timeout: 60_000,
  projects,
  webServer: active.flatMap((app) =>
    (['build', 'dev'] as const)
      .filter((mode) => wanted.length === 0 || wanted.includes(`${app.name}:${mode}`))
      .map((mode) => {
        const port = mode === 'build' ? app.buildPort : app.devPort
        return {
          command: mode === 'build' ? app.build : 'pnpm dev',
          cwd: app.name,
          url: `http://${host}:${port}`,
          timeout: 300_000,
          stdout: 'ignore',
          env: { PORT: String(port), HOST: host },
        }
      }),
  ),
})
