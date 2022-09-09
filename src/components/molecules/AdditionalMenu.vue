<template>
  <div :class="$style.wrapper">
    <img src="../../static/images/menu.webp" alt="SVG" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.wrapper {
  max-width: 2rem;
  max-height: 2rem;
  cursor: pointer;
  padding: 0 0.5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>