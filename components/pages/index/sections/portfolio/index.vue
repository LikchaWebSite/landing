<template>
  <section :class="$style.section">
    <Container>
      <SectionTitle
        center
        :class="$style.title"
      >
        Портфолио
      </SectionTitle>
    </Container>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/section-title/index.vue'
import Container from '@/components/common/container/index.vue'
</script>

<style module src="./styles.module.css" />
