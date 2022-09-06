<template>
  <div :class="$style.wrapper"><Header /></div>
</template>

<script>
import Header from "@/components/organisms/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" module>
.wrapper{
  width: 100vh;
}
</style>