<template>
  <section :class="$style.section">
    <Container>
      <div :class="[$style.wrapper, reversed ? $style.reversed : '']">
        <div :class="$style.side">
          <AosContainer animation="fade-right">
            <NuxtImg
              preload
              fit="cover"
              placeholder
              alt="Фотография Анжелики"
              :src="profileImage"
              :class="$style.image"
            />
          </AosContainer>
        </div>
        <div :class="[$style.side, $style.sticky]">
          <AosContainer animation="fade-left">
            <div :class="$style.content">
              <SectionTitle color="white">
                {{ title }}
              </SectionTitle>

              <span :class="$style.subtitle">
                в массаже {{ pluralizedExperience }}.
              </span>

              <p :class="$style.text">
                <slot></slot>
              </p>
            </div>
          </AosContainer>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import AosContainer from '@/components/common/aos-container/index.vue'
import SectionTitle from '@/components/pages/index/components/section-title/index.vue'
import Container from '@/components/common/container/index.vue'

const props = defineProps<{
  imageMaxWidth?: number
  title: string
  reversed?: boolean
  experience: number
  profileImage: string
}>()

const variants = [
  'годов',
  'год',
  'года',
  'годов',
]

const pluralizedExperience = computed(() => pluralizeWithCount(props.experience, variants))
</script>

<style module src="./styles.module.css" />