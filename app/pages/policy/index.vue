<template>
  <div :class="$style.page">
    <AsideNavigation
      :links="links"
      :class="$style.navigation"
    />

    <ContentRenderer v-if="data" :value="data" />
  </div>
</template>

<script setup lang="ts">
import AsideNavigation from '@/components/common/aside-navigation/index.vue'
import { type AsideLink } from '@/components/common/aside-navigation/types'

definePageMeta({
  layout: 'empty',
})

const { currentRoute } = useRouter()

const { data } = await useAsyncData(currentRoute.value.path, () => queryCollection('content').path(currentRoute.value.path).first())

const links = ref<AsideLink[]>([])

onMounted(() => {
  const root = data.value?.body

  if (!root) {
    return
  }

  links.value = root.value
    .filter(([_, attributes]) => {
      return typeof attributes === 'object' && 'id' in attributes
    })
    .map(([_, attributes, title]) => {
      return {
        href: `#${(attributes as Record<string, string>).id}`,
        active: currentRoute.value.hash === `#${(attributes as Record<string, string>).id}`,
        text: String(title),
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