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
        <AosContainer
          v-for="(item, index) in services"
          :key="item.title"
          animation="fade-up"
          :delay="(index % 3) * 150"
          :duration="600"
        >
          <ServiceItemComponent
            :img="item.img"
            :title="item.title"
            :description="item.description"
            :duration="item.duration"
            :price="item.price"
            :href="item.href"
          />
        </AosContainer>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import AosContainer from '@/components/common/aos-container/index.vue'
import Container from '@/components/common/container/index.vue'
import SectionTitle from '@/components/pages/index/components/section-title/index.vue'
import ServiceItemComponent, { ServiceItem } from '@/components/pages/index/components/service-item/index.vue'

defineProps<{
  services: ServiceItem[]
}>()
</script>

<style module src="./styles.module.css" />