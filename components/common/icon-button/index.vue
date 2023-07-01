<template>
  <button
    type="button"
    :class="$style.button"
    @click="$emit('click')"
  >
    <Icon
      :icon="icon"
      :size="size"
    />
  </button>
</template>

<script setup lang="ts">
import Icon, { Variant } from '@/components/common/icon/index.vue'

withDefaults(defineProps<{
  icon: Variant
  size?: number
}>(), {
  size: 20
})

defineEmits<{
  (event: 'click'): void
}>()
</script>

<style module src="./styles.module.css"></style>