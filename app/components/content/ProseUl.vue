<template>
  <ul :class="$style.ul">
    <slot></slot>
  </ul>
</template>

<style module>
.ul {
  padding-left: 1.3em;
  margin: 1em 0;
}
</style>