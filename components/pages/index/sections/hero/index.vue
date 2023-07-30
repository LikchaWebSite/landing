<template>
  <section :class="$style.hero">
    <Container :class="$style.container">
      <div :class="$style.content">
        <Icon
          icon="logo"
          :size="titleSize"
          :class="$style.title"
        />

        <span :class="$style.subtitle">
          Комната массажных дел на&nbsp;набережной Мойки
        </span>

        <Button
          :href="ctaLink"
          target="_blank"
          :class="$style.button"
        >
          Записаться
        </Button>
      </div>

      <DecorationMark :class="$style.mark" />
    </Container>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/common/icon/index.vue'
import Button from '@/components/common/button/link.vue'
import Container from '@/components/common/container/index.vue'
import DecorationMark from '@/components/pages/index/components/decoration-mark/index.vue'
import { WIDTH_SYMBOL } from '@/utils/constants/provide-symbols'

const width = inject(WIDTH_SYMBOL, ref(100))

defineProps<{
  ctaLink: string
}>()

const titleSize = computed((): number => {
  if (width.value <= 400) {
    return 200
  }
  
  else if (width.value <= 768) {
    return 300
  }

  return 400
})
</script>

<style module src="./styles.module.css"></style>