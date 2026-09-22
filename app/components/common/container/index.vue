<template>
  <div
    :class="$style.container"
    :style="{
      maxWidth: `${maxWidth + 40}px`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type Props = {
  maxWidth?: number
}

withDefaults(defineProps<Props>(), {
  maxWidth: 1200,
})
</script>

<style module src="./styles.module.css" />