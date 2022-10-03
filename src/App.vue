<template>
  <div :class="$style.wrapper">
    <Main />
  </div>
</template>

<script>
import Main from "@/components/pages/Main";
export default {
  components: {
    Main,
  },
};
</script>

<style lang="scss" module>
body{
  padding: 0;
  margin: 0;
}
</style>