<template>
  <li :class="$style.li">
    <slot></slot>
  </li>
</template>

<style module>
.li {
  line-height: 1.5;
}

.li + .li {
  margin-top: 0.8em;
}
</style>