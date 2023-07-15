<template>
  <div :class="$style.page">
    <div>
      <AsideNavigation
        :links="links"
        :class="$style.navigation"
      />
    </div>

    <ContentDoc />
  </div>
</template>

<script setup lang="ts">
import AsideNavigation from '@/components/common/aside-navigation/index.vue'
import { MarkdownNode } from '@nuxt/content/dist/runtime/types'
import { AsideLink } from 'components/common/aside-navigation/types'

const links = ref<AsideLink[]>([])
const route = useRoute()

useAsyncData(async () => {
  const { body } = await queryContent(route.path).findOne()

  links.value = body.children
    .filter(({ tag }: MarkdownNode) => tag === 'h2')
    .map(({ props, children }: any) => {
      return {
        href: `#${props.id}`,
        active: route.hash === `#${props.id}`,
        text: children[0].value,
      }
    })
})

watch(route, ({ hash }) => {
  links.value = links.value
    .map((link) => ({
      ...link,
      active: hash === link.href,
    }))
})
</script>

<style module src="./styles.module.css"></style>