<template>
  <article :class="$style.container">
    <picture :class="$style.picture">
      <source
        :srcset="img.webp"
        type="image/webp"
      >
      <img
        :src="img.img"
        :alt="title"
      >
    </picture>

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
import { ImageWithSources } from '@/helpers/types'
import { pluralizeWithCount } from '@/helpers/pluralize'
import Button from '@/components/common/button/link.vue'

export type ServiceItem = {
  img: ImageWithSources
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

<style module src="./styles.module.css" />