<template>
  <section :class="$style.hero">
    <Container :class="$style.container">
      <div :class="$style.content">
        <h1 :class="$style.title">
          volok u t
        </h1>

        <span :class="$style.subtitle">
          Комната массажных дел <br> на набережной Мойки
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
import Button from '@/components/common/button/link.vue'
import Container from '@/components/common/container/index.vue'
import DecorationMark from '@/components/pages/index/components/decoration-mark/index.vue'

defineProps<{
  ctaLink: string
}>()
</script>

<style module src="./styles.module.css"></style>