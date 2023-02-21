export default defineNuxtConfig({
  modules: ['nuxt-beastcss'],
  css: ['~/styles/global.css'],
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
