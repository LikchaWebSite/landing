<template>
  <nav>
    <ul
      :class="[
        $style.list,
        isVertical && $style.vertical
      ]"
    >
      <li
        v-for="item in items"
        :key="item.label"
        :class="$style.item"
      >
        <a
          :href="item.link"
          :class="[
            $style.link,
            isVertical && $style.large,
            theme === 'dark' && $style.dark,
          ]"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { THEME_SYMBOL } from '~/utils/constants/provide-symbols'

export type MenuItem = {
  label: string
  link: string
}

type Props = {
  layout?: 'vertical' | 'horizontal'
  items: MenuItem[]
}

const theme = inject(THEME_SYMBOL, 'light')

const props = withDefaults(defineProps<Props>(), {
  layout: 'horizontal'
})

const isVertical = computed(() => {
  return props.layout === 'vertical'
})
</script>

<style module src="./styles.module.css" />