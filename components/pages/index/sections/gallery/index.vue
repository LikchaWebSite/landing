<template>
  <section :class="$style.section">
    <Container>
      <SectionTitle
        center
        :class="$style.title"
      >
        {{ title }}
      </SectionTitle>

      <swiper-container ref="swiper">
        <swiper-slide
          v-for="image in images"
          :key="image"
        >
          <NuxtImg
            :src="image"
            :class="$style.image"
            loading="lazy"
          />
        </swiper-slide>
      </swiper-container>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { SwiperOptions } from 'swiper'
import SectionTitle from '@/components/common/section-title/index.vue'
import Container from '@/components/common/container/index.vue'

const props = defineProps<{
  title: string
  images: string[]
  swiperOptions: SwiperOptions
}>()

const swiper = ref(null)

const localSwiperOptions: SwiperOptions = {
  ...props.swiperOptions,
  mousewheel: true,
  grabCursor: true,
}

onMounted(() => {
  if (!swiper.value) {
    return
  }

  Object.assign(swiper.value, localSwiperOptions)

  // @ts-expect-error
  swiper.value?.initialize()
})
</script>

<style module src="./styles.module.css" />
