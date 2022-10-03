<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <Header />
    </div>
    <div :class="$style.board">
      <Board />
    </div>
    <div :class="$style.popup">
      <Popup />
    </div>
  </div>
</template>

<script>
import Header from "@/components/organisms/Header";
import Board from "@/components/organisms/Board";
import Popup from "@/components/molecules/Popup";
export default {
  components: {
    Header,
    Board,
    Popup,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  position: relative;
  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
}
</style>