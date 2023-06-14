<template>
  <div :class="$style.layout">
    <Header :menu-items="menuItems" />

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/common/header/index.vue'
import Footer from '@/components/common/footer/index.vue'
import { MenuItem } from '@/components/common/navigation/index.vue'

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
</script>

<style module src="./default.module.css" />