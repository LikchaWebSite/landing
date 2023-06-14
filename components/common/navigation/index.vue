<template>
  <nav>
    <ul :class="$style.list">
      <li
        v-for="item in items"
        :key="item.label"
        :class="$style.item"
      >
        <a
          :href="item.link"
          :class="$style.link"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
export type MenuItem = {
  label: string
  link: string
}

type Props = {
  items: MenuItem[]
}

defineProps<Props>()
</script>

<style module src="./styles.module.css" />