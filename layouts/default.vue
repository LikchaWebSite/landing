<template>
  <div :class="$style.layout">
    <Header
      :menu-items="menuItems"
      :links="headerLinks"
      :class="$style.header"
      @burger-button-click="handleAsideMenuToggle"
    />

    <main :class="$style.main">
      <NuxtPage />
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
import Header from '@/components/common/header/index.vue'
import Footer from '@/components/common/footer/index.vue'
import AsideMenu from '@/components/pages/index/components/aside-menu/index.vue'
import { MenuItem } from '@/components/common/navigation/index.vue'
import { LinkItem } from '@/components/common/links-list/index.vue'

const isAsideMenuOpen = ref(false)

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

const headerLinks: LinkItem[] = [
  {
    url: '',
    icon: 'instagram',
    isMarked: true,
  },
  {
    url: '',
    icon: 'map',
  },
]

const footerLinks: LinkItem[] = [
  {
    url: '',
    icon: 'telegram',
  },
  {
    url: '',
    icon: 'instagram',
    isMarked: true,
  },
]

const address = `
  Санкт-Петербург, <br>
  Набережная реки Мойки 67-69 <br>
  Кабинет 105
`

function handleAsideMenuToggle(state?: boolean) {
  isAsideMenuOpen.value = state ?? !isAsideMenuOpen.value
}
</script>

<style module src="./default.module.css" />