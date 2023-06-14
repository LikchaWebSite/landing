<template>
  <section :class="$style.hero">
    <Container>
      <div :class="$style.content">
        <h1 :class="$style.title">
          <span>volok</span>
          <span>u</span>
          <span>t</span>
        </h1>

        <span :class="$style.subtitle">
          Комната массажных дел <br> на набережной реки Мойки
        </span>

        <Button
          href="/"
          target="_blank"
        >
          Записаться
        </Button>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/common/button/link.vue'
import Container from '@/components/common/container/index.vue'
</script>

<style module src="./styles.module.css"></style>