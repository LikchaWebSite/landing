<template>
  <div>
    <IconVariant
      :size="size"
      :color="color"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

export type Variant = 'instagram' | 'telegram' | 'map'

type Props = {
  icon: Variant
  color?: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: '#ffffff',
  size: 30,
})

const IconVariant = defineAsyncComponent(() => {
  return import(`./variants/${props.icon}.vue`)
})
</script>