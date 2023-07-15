<template>
  <div :class="$style.page">
    <AsideNavigation
      :links="links"
      :class="$style.navigation"
    />

    <ContentDoc />
  </div>
</template>

<script setup lang="ts">
import AsideNavigation from '@/components/common/aside-navigation/index.vue'
import { MarkdownNode } from '@nuxt/content/dist/runtime/types'
import { AsideLink } from 'components/common/aside-navigation/types'

const { currentRoute } = useRouter()

const { data } = await useAsyncData(queryContent(currentRoute.value.path).findOne)

const links = ref<AsideLink[]>([])

onMounted(() => {
  links.value = (data.value?.body?.children ?? [])
    .filter(({ tag }: MarkdownNode) => tag === 'h2')
    .map(({ props, children }: any) => {
      return {
        href: `#${props.id}`,
        active: currentRoute.value.hash === `#${props.id}`,
        text: children[0].value,
      }
    })
})

watch(currentRoute, ({ hash }) => {
  links.value = links.value
    .map((link) => ({
      ...link,
      active: hash === link.href,
    }))
})
</script>

<style module src="./styles.module.css"></style>