<template>
  <header
    :class="[
      $style.header,
      isScrolled && $style.scrolled,
    ]"
  >
    <Container :class="$style.container">
      <Logo
        :class="$style.logo"
        link="/"
      />

      <Navigation
        :items="menuItems"
        :class="$style.navigation"
      />

      <LinksList
        :items="links"
        :class="$style.linksList"
      />

      <IconButton
        icon="burger"
        :class="$style.burger"
        @click="$emit('burger-button-click')"
      />
    </Container>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/common/logo/index.vue'
import Container from '@/components/common/container/index.vue'
import IconButton from '@/components/common/icon-button/index.vue'
import Navigation, { MenuItem } from '@/components/pages/index/components/navigation/index.vue'
import LinksList, { LinkItem } from '@/components/common/links-list/index.vue'

type Props = {
  isScrolled: boolean
  menuItems?: MenuItem[]
  links?: LinkItem[]
}

defineEmits<{
  (event: 'burger-button-click'): void
}>()

withDefaults(defineProps<Props>(), {
  menuItems: () => [],
  links: () => [],
})
</script>

<style module src="./styles.module.css" />