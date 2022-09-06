<template>
  <div :class="$style.wrapper">
    <div :class="$style.text">My boards</div>
    <div :class="$style.boards"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>