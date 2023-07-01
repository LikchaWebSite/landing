<template>
  <svg
    :height="size"
    :width="size"
    viewBox="0 0 23 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="16"
      width="23"
      height="2"
      fill="currentColor"
    ></rect>
    <rect
      y="8"
      width="18"
      height="2"
      fill="currentColor"
    ></rect>
    <rect
      width="23"
      height="2"
      fill="currentColor"
    ></rect>
  </svg>
</template>

<script setup lang="ts">
import { BaseVariantProps } from './types'

defineProps<BaseVariantProps>()
</script>