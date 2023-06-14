<template>
  <button
    :class="[
      $style.button,
      $style[color],
    ]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type Props = {
  type?: 'button' | 'reset' | 'submit'
  color?: 'white' | 'black'
}

type Emits = {
  (event: 'click'): PointerEvent
}

defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  color: 'white',
  type: 'button',
})
</script>

<style module src="./styles.module.css" />