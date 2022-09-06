<template>
  <div :class="$style.wrapper">
    <Header />
    <Board/>
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
.wrapper{
  display: block;
}
</style>