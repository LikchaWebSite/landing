<template>
  <a
    :href="link"
    :class="$style.logo"
  >
    <Icon
      icon="logo"
      :size="size"
      :class="$style.icon"
    />
  </a>
</template>

<script setup lang="ts">
import Icon from '~/components/common/icon/index.vue'
type Props = {
  size?: number
  link?: string
  fill?: 'white' | 'black'
}

withDefaults(defineProps<Props>(), {
  fill: 'white',
  link: undefined,
  size: 62,
})
</script>

<style module src="./styles.module.css"></style>