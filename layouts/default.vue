<template>
  <div :class="$style.layout">
    <Header
      :menu-items="menuItems"
      :links="headerLinks"
      :class="$style.header"
    />

    <main :class="$style.main">
      <NuxtPage />
    </main>

    <Footer
      :links="footerLinks"
      :class="$style.footer"
    />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/common/header/index.vue'
import Footer from '@/components/common/footer/index.vue'
import { MenuItem } from '@/components/common/navigation/index.vue'
import { LinkItem } from '@/components/common/links-list/index.vue'

const menuItems: MenuItem[] = [
  {
    label: 'Меню',
    link: '',
  },
  {
    label: 'Я – Лика',
    link: '',
  },
  {
    label: 'Обстановка',
    link: '',
  },
  {
    label: 'Портфолио',
    link: '',
  },
  {
    label: 'Контакты',
    link: '',
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
</script>

<style module src="./default.module.css" />