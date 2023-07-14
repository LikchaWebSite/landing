<template>
  <div
    ref="container"
    :class="$style.container"
  >
    <slot v-if="shouldRender"></slot>
  </div>  
</template>

<script setup lang="ts">
defineProps<{
  offset: number
}>()

const container = ref<HTMLDivElement | null>(null)
const shouldRender = ref(false)

const callback: IntersectionObserverCallback = function ([{ isIntersecting }], observer) {
  shouldRender.value = isIntersecting

  if (isIntersecting) {
    observer.disconnect()
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '100px 0px'
  })

  if (container.value) {
    observer.observe(container.value)
  }
})
</script>

<style module src="./styles.module.css" />