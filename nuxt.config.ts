const customTags = [
  'swiper-container',
  'swiper-slide',
]

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    }
  },
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
    'aos/dist/aos.css',
    '@/assets/styles/fonts.css',
    '@/assets/styles/variables.css',
    '@/assets/styles/common.css',
  ],
  image: {},
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => customTags.includes(tag)
    }
  }
})
