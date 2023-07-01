<template>
  <div
    :class="$style.container"
    ref="textContainer"
  >
    <span
      :class="$style.textContainer"
    >
      <CircleText />
    </span>
    
    <Icon
      icon="map"
      :size="40"
      color="#BB7F5B"
      :class="$style.icon"
    />
  </div>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import Icon from '@/components/common/icon/index.vue'
const textContainer = ref<HTMLSpanElement>()
const text = 'volokut volokut volokut volokut '

function degreesToRadians(angle: number): number {
  return (angle * Math.PI) / 180
}

function fromPolarToDecartesSystem(angle: number, radius: number): {x: number; y: number} {
  const x = radius * Math.cos(degreesToRadians(angle))
  const y = radius * Math.sin(degreesToRadians(angle))

  return {
    x,
    y,
  }
}

const CircleText = computed(() => {
  const container = textContainer.value
  const children: VNode[] = []

  if (container) {
    const splittedText = text.split('')
  
    const containerSize = container.getBoundingClientRect().height
    const radius = (containerSize - 30) / 2
    const charAngleShift = 360 / splittedText.length

    const renderedChars = splittedText.map((char, index) => {
      const angle = index * charAngleShift
      const {x, y} = fromPolarToDecartesSystem(angle, radius)

      return h('div', {
        class: styles.textItem,
        style: {
          textAlign: 'center',
          position: 'absolute',
          top: `${y}px`,
          left: `${x}px`,
          transform: `
            rotate(${angle + 90}deg)
          `
        },
      }, char)
    })

    children.push(...renderedChars)
  }

  return () => children
})

</script>

<style module src="./styles.module.css" />