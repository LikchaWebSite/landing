<template>
  <div :class="$style.container">
    <h3 :class="$style.title">
      {{ title }}
    </h3>

    <div :class="$style.value">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
export type ContactItem = {
  title: string
  value: {
    text: string
    href?: string
  }
}

defineProps<{
  title: string
}>()
</script>

<style module src="./styles.module.css" />