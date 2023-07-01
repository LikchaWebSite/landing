import { fileURLToPath } from 'url'

const customTags = [
  'swiper-container',
  'swiper-slide',
]

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      mapUrl: process.env.MAP_URL,
    },
  },
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
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
    dir: 'public/images',
    provider: 'ipx'
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => customTags.includes(tag)
    }
  }
})
