<template>
  <NuxtLink
    :href="href"
    :target="target"
    :class="$style.link"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  target?: string
}>(), {
  href: '',
  target: undefined
})
</script>

<style module>
.link {
  transition: color ease-in-out 0.2s;
  line-height: 1.5;
}

.link:hover {
  color: var(--accent);
}
</style>