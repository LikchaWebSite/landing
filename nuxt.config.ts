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
  imports: {
    dirs: [
      './utils/**/*.ts'
    ],
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],
  css: [
    'normalize-css/normalize.css',
    'aos/dist/aos.css',
    '@/assets/styles/fonts.css',
    '@/assets/styles/variables.css',
    '@/assets/styles/common.css',
  ],
  image: {
    dir: 'public/images'
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => customTags.includes(tag)
    }
  }
})
