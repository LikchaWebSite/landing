<template>
  <p :class="$style.p">
    <slot></slot>
  </p>
</template>

<style module>
.p {
  margin: 0.5em 0 0.8em;
  line-height: 1.5;
}
</style>