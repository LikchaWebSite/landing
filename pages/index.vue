<template>
  <div :class="$style.page">
    <Header
      :is-scrolled="isScrolledY"
      :menu-items="menuItems"
      :links="headerLinks"
      :class="$style.header"
      @burger-button-click="handleAsideMenuToggle"
    />

    <main :class="$style.main">
      <Hero
        id="hero"
        :cta-link="ctaLink"
      />
      
      <Services
        id="services"
        :services="services"
      />

      <About
        id="about"
        profile-image="images/about/profile.webp"
      />

      <Gallery
        id="gallery"
        :images="gallery"
        title="Обстановка"
        :swiper-options="gallerySwiperOptions"
      />

      <Gallery
        id="portfolio"
        title="Портфолио"
        :images="portfolio"
        :swiper-options="portfolioSwiperOptions"
      />

      <Contacts
        id="contacts"
        :items="contacts"
      />
    </main>

    <Footer
      :links="footerLinks"
      :class="$style.footer"
    />

    <AsideMenu
      :is-open="isAsideMenuOpen"
      :menu-items="menuItems"
      :links="headerLinks"
      :address="address"
      @close="handleAsideMenuToggle(false)"
    />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/pages/index/sections/hero/index.vue'
import Services from '@/components/pages/index/sections/services/index.vue'
import About from '@/components/pages/index/sections/about/index.vue'
import Gallery from '@/components/pages/index/sections/gallery/index.vue'
import Contacts from '@/components/pages/index/sections/contacts/index.vue'
import Header from '@/components/pages/index/components/header/index.vue'
import Footer from '@/components/pages/index/components/footer/index.vue'
import AsideMenu from '@/components/pages/index/components/aside-menu/index.vue'
import { MenuItem } from '@/components/pages/index/components/navigation/index.vue'
import { LinkItem } from '@/components/common/links-list/index.vue'
import { ServiceItem } from '~/components/pages/index/components/service-item/index.vue'
import { ContactItem } from '@/components/pages/index/components/contact-info-item/index.vue'
import { useWindowWidth } from '~/composables/use-window-width'
import { useWindowScroll } from '~/composables/use-window-scroll'
import { useScrollLock } from '~/composables/use-scroll-lock'
import { WIDTH_SYMBOL } from '~/utils/constants/provide-symbols'
import { SwiperOptions } from 'swiper/types'

const { width } = useWindowWidth()
const { isScrolledY } = useWindowScroll()
const { toggleScrollLock } = useScrollLock()

provide(WIDTH_SYMBOL, width)

const isAsideMenuOpen = ref(false)

const address = `
  Санкт-Петербург, <br>
  Набережная реки Мойки 67-69 <br>
  Кабинет 105
`

const ctaLink = 'https://n946767.yclients.com/'

const headerLinks: LinkItem[] = [
  {
    url: 'https://instagram.com/volokut_spb',
    icon: 'instagram',
    isMarked: true,
  },
  {
    url: 'https://yandex.ru/maps/-/CDuTAaS',
    icon: 'map',
  },
]

const footerLinks: LinkItem[] = [
  {
    url: 'https://t.me/milkissss',
    icon: 'telegram',
  },
  {
    url: 'https://instagram.com/volokut_spb',
    icon: 'instagram',
    isMarked: true,
  },
]

const menuItems: MenuItem[] = [
  {
    label: 'Меню',
    link: '#services',
  },
  {
    label: 'Я – Лика',
    link: '#about',
  },
  {
    label: 'Обстановка',
    link: '#gallery',
  },
  {
    label: 'Портфолио',
    link: '#portfolio',
  },
  {
    label: 'Контакты',
    link: '#contacts',
  },
]

const services: ServiceItem[] = [
  {
    img: 'images/services/1.webp',
    title: 'Классический массаж',
    description: 'Как классическая музыка - образцовое ручное произведение, золотой фонд массажной культуры. Техники классического массажа сочетают глубину, содержательность, идейную значительность с совершенством формы.',
    duration: 1,
    price: 2000,
    href: 'https://n947122.yclients.com',
  },
  {
    img: 'images/services/2.webp',
    title: 'Балийский массаж',
    description: 'Время замедляется, а сила возрастает. Неспешная и глубокая прогулка рук вдоль линий тела, напоминающая омовение песчаных берегов острова волнами океана.',
    duration: 1,
    price: 2000,
    href: 'https://n947124.yclients.com',
  },
  {
    img: 'images/services/3.webp',
    title: 'Антицеллюлитный массаж',
    description: 'Антицеллюлитный массаж - беспощадно (при большом желании). При маленьком желании – просто горячо. У нас цель - организовать приток крови к подкожно-жировой клетчатке. Мы к этой цели быстро и верно, широко шагая!',
    duration: 1,
    price: 2000,
    href: 'https://n946783.yclients.com',
  },
  {
    img: 'images/services/4.webp',
    title: 'Спортивный массаж',
    description: 'Спортивный массаж - это сильно. Он и перед, и после, и вместо тренировки. Как в боях – правил в нем нет. Ограничений по использованию определенной техники тоже: в ход идут локти и кулаки. Разбиваем забитое, выжимаем зажатое.',
    duration: 1,
    price: 2000,
    href: 'https://n947127.yclients.com',
  },
  {
    img: 'images/services/5.webp',
    title: 'Массаж лица',
    description: 'Массаж лица - скульптурно. Мимическим мышцам тоже нужна тренировка, чтобы быть в тонусе. В классическом понимании - боремся с морщинами, предотвращаем их появление.',
    duration: 1,
    price: 2000,
    href: 'https://n947130.yclients.com',
  },
  {
    img: 'images/services/6.webp',
    title: 'Релакс массаж',
    description: 'Релакс массаж - это медленно. Это от поверхностного – к недрам. Это чутко и неуловимо. Тело плавится под теплыми движениями рук, а разум отправляется бороздить просторы безграничного.',
    duration: 1,
    price: 2000,
    href: 'https://n947132.yclients.com',
  },
]

const gallery = [
  'images/gallery/4.webp',
  'images/gallery/3.webp',
  'images/gallery/2.webp',
  'images/gallery/1.webp',
]

const portfolio = [
  'images/portfolio/1.webp',
  'images/portfolio/2.webp',
  'images/portfolio/3.webp',
  'images/portfolio/4.webp',
  'images/portfolio/5.webp',
  'images/portfolio/6.webp'
]

const contacts: ContactItem[] = [
  {
    title: 'Адрес',
    value: {
      text: removeTags(address),
    },
  },
  {
    title: 'Телефон',
    value: {
      text: '+7 (921) 076-47-97',
      href: 'tel:+79210764797',
    },
  },
  {
    title: 'График работы',
    value: {
      text: 'вт-сб: 9:00 - 21:00',
    },
  },
]

const gallerySwiperOptions: SwiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }
}

const portfolioSwiperOptions: SwiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
      centeredSlides: true,
      centeredSlidesBounds: true,
      centerInsufficientSlides: true,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 50,
    }
  }
}

function handleAsideMenuToggle(state?: boolean) {
  isAsideMenuOpen.value = state ?? !isAsideMenuOpen.value

  toggleScrollLock(isAsideMenuOpen.value)
}
</script>

<style module src="./styles.module.css"></style>