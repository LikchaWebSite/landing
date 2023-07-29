<template>
  <section :class="$style.section">
    <Container>
      <div :class="$style.wrapper">
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
        <div :class="$style.side">
          <AosContainer animation="fade-left">
            <div :class="$style.content">
              <SectionTitle color="white">
                Я - Лика
              </SectionTitle>

              <span :class="$style.subtitle">
                в массаже 2 года.
              </span>

              <p :class="$style.text">
                Мой массаж – обволакивающий. Это самое точное слово для описания того, как я взаимодействую с каждой фиброй тела.
                <br><br>
                В прошлом - на серьезном занималась баскетболом, что отличает мой массаж силой крупных рычагов и быстротой слаженных движений, когда нужно.
                <br><br>
                В том же прошлом окончила музыкальную школу по классу фортепиано, что одаривает мой массаж маневренностью и чуткостью мелкой моторики.
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

defineProps<{
  profileImage: string
}>()
</script>

<style module src="./styles.module.css" />