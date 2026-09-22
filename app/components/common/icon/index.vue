<template>
  <IconVariant
    :size="size"
    :style="{
      color: resultColor,
    }"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { THEME_SYMBOL } from '~/utils/constants/provide-symbols'

export type Variant = 'instagram' | 'telegram' | 'map' | 'burger' | 'cross' | 'spa' | 'logo'

const theme = inject(THEME_SYMBOL, '#ffffff')

type Props = {
  icon: Variant
  color?: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: undefined,
  size: 30,
})

const IconVariant = defineAsyncComponent(() => {
  return import(`./variants/${props.icon}.vue`)
})

const resultColor = computed(() => {
  return props.color ?? (theme === 'dark' ? '#000000' : '#ffffff')
})
</script>