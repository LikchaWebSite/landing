<template>
  <section :class="$style.section">
    <Container>
      <SectionTitle
        center
        :class="$style.title"
      >
        Портфолио
      </SectionTitle>

      <swiper-container ref="swiper">
        <swiper-slide
          v-for="image in images"
          :key="image"
        >
          <NuxtImg
            :src="image"
            loading="lazy"
            :height="240"
          />
        </swiper-slide>
      </swiper-container>
    </Container>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/section-title/index.vue'
import Container from '@/components/common/container/index.vue'
import { SwiperOptions } from 'swiper'

defineProps<{
  images: string[]
}>()

const swiper = ref(null)

const swiperParams: SwiperOptions = {
  slidesPerView: 5,
  mousewheel: true,
  grabCursor: true,
  spaceBetween: 88,
}

onMounted(() => {
  if (!swiper.value) {
    return
  }

  Object.assign(swiper.value, swiperParams)

  // @ts-expect-error
  swiper.value?.initialize()
})
</script>

<style module src="./styles.module.css" />
