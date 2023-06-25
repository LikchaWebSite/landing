<template>
  <section :class="$style.section">
    <Container>
      <SectionTitle
        center
        :class="$style.title"
      >
        Обстановка
      </SectionTitle>

      <swiper-container ref="swiper">
        <swiper-slide
          v-for="image in images"
          :key="image"
        >
          <NuxtImg
            :src="image"
            loading="lazy"
            :height="350"
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

defineProps<{
  images: string[]
}>()

const swiper = ref(null)

const swiperParams: SwiperOptions = {
  slidesPerView: 4,
  mousewheel: true,
  grabCursor: true,
  spaceBetween: 50,
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
