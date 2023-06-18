export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      mapUrl: process.env.MAP_URL,
    },
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],
  css: [
    'normalize-css/normalize.css',
    '@/assets/styles/fonts.css',
    '@/assets/styles/variables.css',
    '@/assets/styles/common.css',
  ],
  image: {
    dir: 'assets/images'
  },
})
