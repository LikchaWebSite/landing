<template>
  <footer :class="$style.footer">
    <Container>
      <div :class="$style.centerContainer">
        <Logo />
      </div>
    </Container>
    <div :class="$style.line"></div>
    <Container>
      <div :class="$style.infoContainer">
        <span :class="$style.info">
          © 2023 «Volokut». Все права защищены.
        </span>

        <a
          :class="$style.info"
          href=""
        >
          Политика конфиденциальности
        </a>

        <a
          :class="$style.info"
          :href="`tel:+79210764797`"
        >
          +7 (921) 076-47-97
        </a>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import Container from '@/components/common/container/index.vue'
import Logo from '@/components/common/logo/index.vue'
</script>

<style module src="./styles.module.css" />