<template>
  <section :class="$style.section">
    <SectionTitle
      center
      :class="[
        $style.title,
        $style.outer,
      ]"
    >
      Контакты
    </SectionTitle>

    <div :class="$style.wrapper">
      <div :class="$style.contentWrapper">
        <Container>
          <div :class="$style.content">
            <SectionTitle
              :class="[
                $style.title,
                $style.inner,
              ]"
            >
              Контакты
            </SectionTitle>

            <div :class="$style.contactsList">
              <ContactInfoItem 
                v-for="item in items"
                :key="item.title"
                :title="item.title"
              >
                <span v-if="!item.value.href">
                  {{ item.value.text }}
                </span>
                <a
                  :href="item.value.href"
                  v-else
                >
                  {{ item.value.text }}
                </a>
              </ContactInfoItem>
            </div>
          </div>
        </Container>
      </div>
      <div :class="$style.mapWrapper">
        <ClientOnly>
          <MapScript />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactInfoItem, { ContactItem } from '@/components/pages/index/components/contact-info-item/index.vue'
import SectionTitle from '@/components/pages/index/components/section-title/index.vue'
import Container from '@/components/common/container/index.vue'
import { createElementBlock } from 'vue'

const config = useRuntimeConfig()

defineProps<{
  items: ContactItem[]
}>()

const MapScript = createElementBlock('script', {
  type: 'text/javascript',
  charset: 'utf-8',
  async: true,
  src: config.public.mapUrl,
})
</script>

<style module src="./styles.module.css" />