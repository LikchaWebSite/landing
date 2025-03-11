<template>
  <article :class="$style.container">
    <NuxtImg
      preload
      :src="img"
      :alt="title"
      placeholder
      fit="cover"
    />

    <h3 :class="$style.title">
      {{ title }}
    </h3>

    <p :class="$style.description">
      {{ description }}
    </p>

    <div :class="$style.pricesBlock">
      <span
        v-for="({price, duration}, index) in prices"
        :key="index"
        :class="$style.price"
      >
        {{ pluralizeDuration(duration) }} – {{ price }}₽
      </span>
    </div>

    <Button
      color="black"
      :href="href"
      :class="$style.button"
    >
      Записаться
    </Button>
  </article>
</template>

<script setup lang="ts">
import { pluralizeWithCount } from '@/utils/pluralize'
import Button from '@/components/common/button/link.vue'

export type ServiceItem = {
  img: string
  title: string
  description: string
  prices: {
    price: number;
    duration: number;
  }[]
  href: string
}

const variants = [
  'часов',
  'час',
  'часа',
  'часов',
]

defineProps<ServiceItem>()

const pluralizeDuration = (duration: number) => pluralizeWithCount(duration, variants)
</script>

<style module src="./styles.module.css" />