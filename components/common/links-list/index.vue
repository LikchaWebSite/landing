<template>
  <ul :class="$style.container">
    <li
      v-for="link in items"
      :key="link.url"
      :class="[
        $style.item,
        link.isMarked && $style.itemMarked,
      ]"
    >
      <a
        :href="link.url"
        :class="$style.link"
      >
        <Icon :icon="link.icon" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Icon, { Variant } from '@/components/common/icon/index.vue'

export type LinkItem = {
  url: string
  icon: Variant
  isMarked?: boolean
}

defineProps<{
  items: LinkItem[]
}>()
</script>

<style module src="./styles.module.css" />