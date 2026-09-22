<template>
  <a
    :href="href"
    :target="target"
    :class="[
      $style.button,
      $style[color],
    ]"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
type Props = {
  color?: 'white' | 'black'
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

withDefaults(defineProps<Props>(), {
  color: 'white',
  href: undefined,
  target: undefined,
})
</script>

<style module src="./styles.module.css" />