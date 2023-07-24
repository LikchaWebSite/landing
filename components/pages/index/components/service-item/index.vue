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

    <span :class="$style.price">
      {{ durationText }} – {{ price }}₽
    </span>

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
  duration: number
  price: number
  href: string
}

const props = defineProps<ServiceItem>()

const durationText = computed(() => {
  const variants = [
    'часов',
    'час',
    'часа',
    'часов',
  ]

  return pluralizeWithCount(props.duration, variants)
})
</script>

<style module src="./styles.module.css" />~/utils/pluralize