<template>
  <div
    :data-aos-anchor-placement="anchorPlacement"
    :data-aos-duration="duration"
    :data-aos-easing="easing"
    :data-aos-offset="offset"
    :data-aos-anchor="anchor"
    :data-aos-delay="delay"
    :data-aos-once="once"
    :data-aos="animation"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { Animation, Easing, AnchorPlacement } from './types'

type Props = {
  animation: Animation
  anchorPlacement?: AnchorPlacement
  duration?: number
  easing?: Easing
  anchor?: string
  offset?: number
  delay?: number
  once?: boolean
}

withDefaults(defineProps<Props>(), {
  anchorPlacement: 'top-bottom',
  anchor: undefined,
  easing: 'ease',
  once: true,
  offset: 200,
  duration: 600,
  delay: 0,
})
</script>