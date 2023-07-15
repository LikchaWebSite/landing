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
import { AsideLink } from 'components/common/aside-navigation/types'

const route = useRoute()
const [{ body }] = await queryContent(route.path).find()

const links = ref<AsideLink[]>([])

onMounted(() => {
  links.value = body.children
    .filter(({ tag }: {tag: string}) => tag === 'h2')
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