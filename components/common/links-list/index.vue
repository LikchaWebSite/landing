<template>
  <ul :class="$style.container">
    <li
      v-for="link in items"
      :key="link.url"
      :class="[
        $style.item,
        link.isMarked && $style.marked,
        theme === 'dark' && $style.dark,
      ]"
    >
      <a
        :href="link.url"
        :class="$style.link"
        target="_blank"
      >
        <Icon
          :icon="link.icon"
        />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Icon, { Variant } from '@/components/common/icon/index.vue'
import { THEME_SYMBOL } from '~/utils/constants/provide-symbols'

const theme = inject(THEME_SYMBOL, 'light')

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