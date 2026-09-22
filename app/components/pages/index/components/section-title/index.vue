<template>
  <h2
    :class="[
      $style.title,
      $style[color],
      center && $style.center,
    ]"
  >
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
type Props = {
  color?: 'white' | 'black';
  center?: boolean;
};

withDefaults(defineProps<Props>(), {
  color: 'black',
  center: false,
})
</script>

<style module src="./styles.module.css" />
