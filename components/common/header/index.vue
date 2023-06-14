<template>
  <header :class="$style.header">
    <Container :class="$style.container">
      <Logo link="/" />

      <Navigation
        :items="menuItems"
        :class="$style.navigation"
      />
    </Container>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/common/logo/index.vue'
import Container from '@/components/common/container/index.vue'
import Navigation, { MenuItem } from '@/components/common/navigation/index.vue'

type Props = {
  menuItems?: MenuItem[]
}

withDefaults(defineProps<Props>(), {
  menuItems: () => [],
})
</script>

<style module src="./styles.module.css" />