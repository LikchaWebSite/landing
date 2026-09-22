<template>
  <aside :class="$style.aside">
    <nav :class="$style.nav">
      <ul :class="$style.list">
        <li
          v-for="link in links"
          :key="link.text"
          :class="$style.listItem"
        >
          <NuxtLink
            :to="link.href"
            :target="link.target"
            :class="[
              $style.link,
              link.active && $style.active,
            ]"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { AsideLink } from './types'

withDefaults(defineProps<{
  links?: AsideLink[]
}>(), {
  links: () => [],
})
</script>

<style module src="./styles.module.css" />