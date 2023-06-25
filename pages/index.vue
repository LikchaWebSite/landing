<template>
  <Hero id="hero" />
  <Services
    id="services"
    :services="services"
  />
  <About id="about" />
  <Gallery
    id="gallery"
    :images="gallery"
  />
  <Portfolio
    id="portfolio"
    :images="portfolio"
  />
  <Contacts
    id="contacts"
    :items="contacts"
  />
</template>

<script setup lang="ts">
import Hero from '@/components/pages/index/sections/hero/index.vue'
import Services from '@/components/pages/index/sections/services/index.vue'
import About from '@/components/pages/index/sections/about/index.vue'
import Gallery from '@/components/pages/index/sections/gallery/index.vue'
import Portfolio from '@/components/pages/index/sections/portfolio/index.vue'
import Contacts from '@/components/pages/index/sections/contacts/index.vue'
import { ServiceItem } from '~/components/pages/index/components/service-item/index.vue'
import { ContactItem } from '~/components/pages/index/components/contact-info-item/index.vue'

const services: ServiceItem[] = [
  {
    img: 'services/1.webp',
    title: 'Классический массаж',
    description: 'Как классическая музыка - образцовое ручное произведение, золотой фонд массажной культуры. Техники классического массажа сочетают глубину, содержательность, идейную значительность с совершенством формы.',
    duration: 1,
    price: 1500,
    href: '',
  },
  {
    img: 'services/2.webp',
    title: 'Балийский массаж',
    description: 'Время замедляется, а сила возрастает. Неспешная и глубокая прогулка рук вдоль линий тела, напоминающая омовение песчаных берегов острова волнами океана.',
    duration: 1,
    price: 1500,
    href: '',
  },
  {
    img: 'services/3.webp',
    title: 'Антицеллюлитный массаж',
    description: 'Антицеллюлитный массаж - беспощадно (при большом желании). При маленьком желании – просто горячо. У нас цель - организовать приток крови к подкожно-жировой клетчатке. Мы к этой цели быстро и верно, широко шагая!',
    duration: 1,
    price: 1500,
    href: '',
  },
  {
    img: 'services/4.webp',
    title: 'Спортивный массаж',
    description: 'Спортивный массаж - это сильно. Он и перед, и после, и вместо тренировки. Как в боях – правил в нем нет. Ограничений по использованию определенной техники тоже: в ход идут локти и кулаки. Разбиваем забитое, выжимаем зажатое.',
    duration: 1,
    price: 1500,
    href: '',
  },
  {
    img: 'services/5.webp',
    title: 'Массаж лица',
    description: 'Массаж лица - скульптурно. Мимическим мышцам тоже нужна тренировка, чтобы быть в тонусе. В классическом понимании - боремся с морщинами, предотвращаем их появление.',
    duration: 1,
    price: 1500,
    href: '',
  },
  {
    img: 'services/6.webp',
    title: 'Релакс массаж',
    description: 'Релакс массаж - это медленно. Это от поверхностного – к недрам. Это чутко и неуловимо. Тело плавится под теплыми движениями рук, а разум отправляется бороздить просторы безграничного.',
    duration: 1,
    price: 1500,
    href: '',
  },
]

const gallery = [
  'gallery/1.webp',
  'gallery/2.webp',
  'gallery/3.webp',
  'gallery/4.webp',
]

const portfolio = [
  'portfolio/1.jpg',
  'portfolio/2.jpg',
  'portfolio/3.jpg',
  'portfolio/4.jpg',
  'portfolio/5.jpg',
]

const contacts: ContactItem[] = [
  {
    title: 'Адрес',
    value: {
      text: 'Санкт-Петербург, Набережная реки Мойки 67-69 Кабинет 105',
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
</script>