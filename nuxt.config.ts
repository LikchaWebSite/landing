const customTags = [
  'swiper-container',
  'swiper-slide',
]

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mapUrl: process.env.MAP_URL,
    },
  },
  app: {
    head: {
      title: 'Volokut – комната массажных дел на набережной реки Мойки',
      htmlAttrs: {
        lang: 'ru'
      },
      script: [
        {
          type: 'text/javascript',
          fetchpriority: 'low',
          innerHTML: process.env.METRIKA_STRING,
          async: true,
        },
      ],
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
  googleFonts: {
    preload: true,
    display: 'swap',
    text: 'Привет мир!',
    families: {
      Roboto: {
        wght: [
          400,
          500,
          700,
        ],
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => customTags.includes(tag)
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
  ],
  css: [
    'normalize-css/normalize.css',
    'aos/dist/aos.css',
    '@/assets/styles/fonts.css',
    '@/assets/styles/variables.css',
    '@/assets/styles/common.css',
  ],
})
