<template>
  <div :class="$style.wrapper">
    <div :class="$style.text">My boards</div>
    <div :class="$style.boards" v-for="board in getBoards" :key="board">{{board}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getBoards"]),
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>