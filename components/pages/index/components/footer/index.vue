<template>
  <footer :class="$style.footer">
    <Container>
      <div :class="$style.centerContainer">
        <Logo />
      </div>
    </Container>
    <div :class="$style.line"></div>
    <Container :class="$style.infoWrapper">
      <div :class="$style.infoContainer">
        <span :class="$style.info">
          © 2023 «Volokut». Все права защищены.
        </span>

        <a
          :class="$style.info"
          href="/policy"
        >
          Политика конфиденциальности
        </a>

        <a
          :class="$style.info"
          href="tel:+79210764797"
        >
          +7 (921) 076-47-97
        </a>

        <LinksList
          :items="links"
          :class="[
            $style.linksList,
            $style.info,
          ]"
        />
      </div>

      <div
        :class="[
          $style.infoContainer,
          $style.infoContainerCenter,
        ]"
      >
        <small
          :class="[
            $style.info,
            $style.infoCenter,
          ]"
        >
          * Instagram — проект Meta Platforms Inc., деятельность которой в России запрещена
        </small>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import Container from '@/components/common/container/index.vue'
import Logo from '@/components/common/logo/index.vue'
import LinksList, { LinkItem } from '@/components/common/links-list/index.vue'

type Props = {
  links?: LinkItem[]
}

withDefaults(defineProps<Props>(), {
  links: () => [],
})
</script>

<style module src="./styles.module.css" />