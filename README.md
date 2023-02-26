<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Beastcss
- Package name: nuxt-beastcss
- Description: Fast Critical CSS for Nuxt
-->

# Nuxt Beastcss Module 


[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> Fast Critical CSS for Nuxt

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## ⭐️ Features

<!-- Highlight some of the features your module provide here -->
- 🧙 &nbsp;Zero-configuration required
- 🧬 &nbsp;Auto Enables Nuxt CSS Extraction
- 📝 &nbsp;Inject critical CSS automatically to page html
- 🧼 &nbsp;Removes injected CSS from main files
- ⚡️ &nbsp;Lightning fast
- 🎭️ &nbsp;Working both in ssr and generate mode


## 📦 Quick Setup

1. Add `nuxt-beastcss` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-beastcss

# Using yarn
yarn add --dev nuxt-beastcss

# Using npm
npm install --save-dev nuxt-beastcss
```

2. Add `nuxt-beastcss` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-beastcss'
  ]
})
```

That's it! You can now use Nuxt Beastcss in your Nuxt app ✨

## 🔨 Options

You can write the `nuxt-beastcss` config like this:

```js
// nuxt.config.js
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: ['nuxt-beastcss'],
  beastcss: {
    // Options passed directly to beastcss: https://github.com/freddy38510/beastcss/tree/master/packages/beastcss#options
    config: {
      // Default: false
      fontFace: true,
    },
  },
})
```

In the `config` object you can pass all [beastcss-official-options](https://github.com/freddy38510/beastcss/tree/master/packages/beastcss#options).

## 💻 Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Fix style
npm run lint:fix

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## 👏 Thanks

Thanks to [@freddy38510](https://github.com/freddy38510) for his work on [beastcss](https://github.com/freddy38510/beastcss) and thanks to [@leeoniya](https://github.com/leeoniya) for [dropcss](https://github.com/leeoniya/dropcss) the magic behind HTML parsing speed.

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-beastcss/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-beastcss

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-beastcss.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-beastcss

[license-src]: https://img.shields.io/npm/l/nuxt-beastcss.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: ./LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com