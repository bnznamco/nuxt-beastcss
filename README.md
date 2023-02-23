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

Thanks to [@freddy38510](https://github.com/freddy38510) for his work on [beastcss](https://github.com/freddy38510/beastcss)!

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-beastcss/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-beastcss

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-beastcss.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-beastcss

[license-src]: https://img.shields.io/npm/l/nuxt-beastcss.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: ./LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAoCAYAAABNefLBAAAAAXNSR0IArs4c6QAAA91JREFUaEPNWdtV20AQvSsVEDoIPoh8QwWBDkwFkApiCrCQ5QICFcSpIKQCoAL4DuJgOoAC2M0Zy8Y23pl9SEqyv9rH3J2rO3d3Fdpuv4s9JMkZgP586glSPUKvmLa9VOx8Knagddz9+ADKXFm+PSPV+/8L8PZAPxZbeE1uAWwzG3mNLD9sdZMjJ2sP9P2ogFJEa6GpI2TDy8hYWxvWDujHYhuvyaNHVNM5zZ89+nbWpR3QVUn/8YFXlMaMsHtWePXtqFNz0NW4D5ifQfGluuclarUwfgWwBWAKrS/wqbgLWsvSuRlot3hx8blFrSq/AzixTPAFWT5pArwZaFm8nuYZ+mAPUBA1mT2Ny188aJd4GXUI6ANB0e2i5sceN1OkGhJNE1m8fiHLa0dWleTEPlrXsYmaV+kDQJu6O7yOiT8u0y7xWhUq3qVRvOtUdbFnHeEUWd77i6BLqsl252XLXlVSRj4zAV4iy4/mrPAvfTQgsvyFZ9olXqneQ69YNx+uDM7+f4Dx7VIyo0QtDHQdPPlrqpu2CsjbTHmzFicwzre/AGCqAJZM8eR6GOiqJBOyODK+X+IGWc67slqVyVjYRY0P+Ala95HMNtveAkXNH7QsSICPy3IJoMQeF1MCRM0fdBUoXlxWZFHj2eNiSoCo+YGOES8OtEvUVse9Z09LTs0Nuol4ccB9DAiXOd/y18iRNREvPtsuUXuCrfTRfPUdXCNRkzPdhnjZgDdlTzU6BxQdOTebUnfYGe5L1UsG/TC+hTF7TJ24QHY28CyN692asqcWNart9tqtcIqd/JyLjQf9UA5g8I0Z+IJUb284L58daIs9VUlnbTpz2xo5NbqosF5L2UHXO0n+mnFeiD/It1X6CKooauoHsqHtEgJ20NV4AphjZhdl5yVlW1btcPZEitomaBf9tN6Puqfqij0RorYJujPx6og9EaK2DvpfiVcsexa/UqCoLUF3RT+aV6dXnZS+Vf0IELUl6K7Ei7/KpZDDxYu1tuzjYT1i5fhZg+5KvGTAtHJ86bOBlxP3doNagxZvNvl6x1ananQMlQx4Ss9Gxpc+bmGXqM03WUEWAYC8rDEhD24+b1pEa7pLsz/U1zFxPsHl+8g2c6Zq5tQUxBLlmj/6O09rt6BGLzobqHBKmTbNZgkeLf/H8n8ZvNjGAGNGBJp/gWi+xOoMdKM5EB/fXLayjXhmmfa5xWi+2A1SfeJ8ng15546LaaYlc/UWLWLc9FSDoS5hMPF6c3IJamwUy3EvMKpPsSzNCVFLKe5O239JpaYwauoFdHVWssDacKrrv76tZ6KekejJ4nz9B5NWGK+XC+AAAAAAAElFTkSuQmCC
[nuxt-href]: https://nuxt.com