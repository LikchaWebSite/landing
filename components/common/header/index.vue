<template>
  <header :class="$style.header">
    <Container :class="$style.container">
      <Logo
        :class="$style.logo"
      />

      <Navigation
        :items="menuItems"
        :class="$style.navigation"
      />

      <LinksList
        :items="links"
        :class="$style.linksList"
      />
    </Container>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/common/logo/index.vue'
import Container from '@/components/common/container/index.vue'
import Navigation, { MenuItem } from '@/components/common/navigation/index.vue'
import LinksList, { LinkItem } from '@/components/common/links-list/index.vue'

type Props = {
  menuItems?: MenuItem[]
  links?: LinkItem[]
}

withDefaults(defineProps<Props>(), {
  menuItems: () => [],
  links: () => [],
})
</script>

<style module src="./styles.module.css" />