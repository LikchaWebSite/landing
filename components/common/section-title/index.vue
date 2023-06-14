<template>
  <h2
    :class="[$style.title, $style[color]]"
  >
    <slot></slot>
  </h2>
</template>

<script setup lang="ts">
type Props = {
  color?: 'white' | 'black';
};

withDefaults(defineProps<Props>(), {
  color: 'black',
})
</script>

<style module src="./styles.module.css" />
