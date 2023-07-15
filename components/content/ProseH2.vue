<template>
  <h2
    :id="id"
    :class="$style.title"
  >
    <a
      v-if="id && generate"
      :href="`#${id}`"
      :class="$style.link"
    >
      <slot></slot>
    </a>
    <slot v-else></slot>
  </h2>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

defineProps<{ id?: string }>()
const heading = 2
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<style module>
.title {
  margin: 0.5em 0 0.8em;
}

.link {
  text-decoration: none;
  transition: color ease-in-out 0.2s;
}

.link:hover {
  color: var(--accent);
}
</style>