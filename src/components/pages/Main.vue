<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <Header />
    </div>
    <div :class="$style.board">
      <Board />
    </div>
  </div>
</template>

<script>
import Header from "@/components/organisms/Header";
import Board from "@/components/organisms/Board";
export default {
  components: {
    Header,
    Board,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  padding: 0;
  margin: 0;
}
</style>