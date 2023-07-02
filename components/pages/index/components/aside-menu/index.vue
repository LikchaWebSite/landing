<template>
  <Transition
    :enter-from-class="$style.fadeEnterFrom"
    :enter-active-class="$style.fadeEnterActive"
    :leave-active-class="$style.fadeLeaveActive"
    :leave-to-class="$style.fadeLeaveTo"
  >
    <div
      v-if="isOpen"
      :class="$style.paranja"
      @click="handleParanjaClick"
    >
      <Transition
        :enter-to-class="$style.slideEnterTo"
        :enter-from-class="$style.slideEnterFrom"
        :enter-active-class="$style.slideEnterActive"
        :leave-from-class="$style.slideLeaveFrom"
        :leave-active-class="$style.slideLeaveActive"
        :leave-to-class="$style.slideLeaveTo"
        appear
      >
        <div
          :class="$style.container"
          @click="handleContainerClick"
        >
          <IconButton
            icon="cross"
            :size="14"
            :class="$style.cross"
            @click="$emit('close')"
          />

          <Navigation
            layout="vertical"
            :items="menuItems"
            @click="$emit('close')"
          />

          <LinksList
            :items="links"
            :class="$style.linksList"
          />

          <small v-html="address"></small>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import IconButton from '@/components/common/icon-button/index.vue'
import Navigation, { MenuItem } from '@/components/pages/index/components/navigation/index.vue'
import LinksList, { LinkItem } from '@/components/common/links-list/index.vue'
import { THEME_SYMBOL } from '~/utils/constants/provide-symbols'

provide(THEME_SYMBOL, 'dark')

type Props = {
  isOpen: boolean
  address: string
  menuItems: MenuItem[]
  links: LinkItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  (emit: 'close'): void
}>()

function handleParanjaClick() {
  emit('close')
}

function handleContainerClick(e: Event) {
  e.stopPropagation()
}
</script>

<style module src="./styles.module.css"></style>