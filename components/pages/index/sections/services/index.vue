<template>
  <section :class="$style.section">
    <Container>
      <SectionTitle
        center
        :class="$style.title"
      >
        Меню
      </SectionTitle>

      <div :class="$style.servicesList">
        <ServiceItemComponent
          v-for="(item) in services"
          :key="item.title"
          :img="item.img"
          :title="item.title"
          :description="item.description"
          :duration="item.duration"
          :price="item.price"
          :href="item.href"
        />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '@/components/common/container/index.vue'
import SectionTitle from '@/components/common/section-title/index.vue'
import ServiceItemComponent, { ServiceItem } from '@/components/pages/index/components/service-item/index.vue'

defineProps<{
  services: ServiceItem[]
}>()
</script>

<style module src="./styles.module.css" />