import { expect, test, type Page } from '@playwright/test'

const HOME = 'rgb(255, 0, 0)'
const OTHER = 'rgb(0, 0, 255)'
const CLIENT = 'rgb(0, 128, 0)'

const failOnConsole = (page: Page) => {
  const errors: string[] = []
  const push = (text: string) => {
    errors.push(text)
  }
  page.on('pageerror', (error) => push(error.message))
  page.on('console', (msg) => {
    if (msg.type() === 'error') push(msg.text())
  })
  return errors
}

test('クライアント遷移後もルートの css が当たる', async ({ page }, info) => {
  const errors = failOnConsole(page)
  const vinext = info.project.name.startsWith('vinext')
  await page.goto('/', { waitUntil: 'networkidle' })
  await expect(page.getByTestId('home')).toHaveCSS('color', HOME)
  if (vinext) await expect(page.getByTestId('client')).toHaveCSS('color', CLIENT)
  await page.evaluate(() => {
    ;(window as unknown as { __nav: number }).__nav = 1
  })
  await page.getByRole('link', { name: 'other' }).click()
  await expect(page).toHaveURL(/\/other$/)
  await expect(page.getByTestId('other')).toHaveCSS('color', OTHER)
  expect(await page.evaluate(() => (window as unknown as { __nav?: number }).__nav)).toBe(1)
  expect(errors).toEqual([])
})

test('JS なしでも SSR の HTML に CSS がある', async ({ browser, baseURL }, info) => {
  test.skip(info.project.name.startsWith('solid-spa'))
  const vinext = info.project.name.startsWith('vinext')
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL })
  const page = await context.newPage()
  try {
    await page.goto('/')
    await expect(page.getByTestId('home')).toHaveCSS('color', HOME)
    if (vinext) await expect(page.getByTestId('client')).toHaveCSS('color', CLIENT)
    await page.goto('/other')
    await expect(page.getByTestId('other')).toHaveCSS('color', OTHER)
  } finally {
    await context.close()
  }
})
