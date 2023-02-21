import { fileURLToPath } from 'url'
import { setup, $fetch, useTestContext } from '@nuxt/test-utils'
import { describe, it, expect } from 'vitest'

await setup({
  rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
  server: true,
})

describe('module in server', () => {
  it('enables extractCSS', () => {
    const ctx = useTestContext()
    expect(ctx.nuxt!.options.build.extractCSS).toBeTruthy()
  })

  it('inlines CSS', async () => {
    const body = await $fetch('/')
    expect(body).toContain('<style>')
    expect(body).toContain('.class')
    expect(body).not.toContain('.unused-class')
  })
})
