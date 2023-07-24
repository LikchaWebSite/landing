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
      script: [
        {
          type: 'text/javascript',
          fetchpriority: 'low',
          innerHTML: '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(94251690, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true })',
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
