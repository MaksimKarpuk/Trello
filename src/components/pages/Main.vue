<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <Header />
    </div>
    <div :class="$style.board">
      <Board />
    </div>
    <div :class="$style.popup">
      <Popup/>
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
    Popup
  },
};
</script>

<style lang="scss" module>
.wrapper {
  padding: 0;
  margin: 0;
  .popup{
    position: absolute;
    top: 15rem;
    left: 40rem;
    transition-duration: 1s;
  }
}
</style>