import { defineNuxtModule, isNuxt2 } from '@nuxt/kit'
import { resolve } from 'pathe'
import Beastcss, { Options } from 'beastcss';
import consola from 'consola';


const handleErrors = (unprocessedHtml: string) => (error: Error) => { 
  consola.error("Cannot process critical CSS on this page. Please check following error:");
  consola.error(error);
  return unprocessedHtml;
}

export interface ModuleOptions {
  // Options passed directly to `beastcss`
  config?: Partial<Options>;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'beastcss',
    configKey: 'beastcss',
  },
  defaults: {
    config: {
      pruneSource: true,
    },
  },
  setup (options, nuxt) {
    
    // Only enable for production
    if (nuxt.options.dev) return

    // @ts-ignore (Nuxt 2) Enable css extraction 
    nuxt.options.build.extractCSS = true

    // Nitro handler (for prerendering only)

    nuxt.hook('nitro:init', nitro => {
      const beast = new Beastcss({
        path: nitro.options.output.publicDir,
        publicPath: nitro.options.baseURL,
        ...options.config,
      })
      nitro.hooks.hook('prerender:generate', async route => {
        if (!route.fileName?.endsWith('.html') || !route.contents) return
        route.contents = await beast.process(route.contents).catch(handleErrors(route.contents))
      })
    })

    /* c8 ignore start */
    if (isNuxt2()) {
      const beast = new Beastcss({
        path: resolve(nuxt.options.buildDir, 'dist/client'),
        // @ts-ignore (Nuxt 2)
        publicPath: nuxt.options.build.publicPath,
        ...options.config,
      })

      // @ts-ignore (Nuxt 2) Add transform step
      nuxt.hook('render:route', async (_url, result) => {
        result.html = await beast.process(result.html).catch(handleErrors(result.html))
      })

      // @ts-ignore (Nuxt 2)
      nuxt.hook('generate:page', async result => {
        result.html = await beast.process(result.html).catch(handleErrors(result.html))
      })
    }
  },
})
