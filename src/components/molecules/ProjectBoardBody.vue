<template>
  <div :class="$style.wrapper">
    <div :class="$style.text">My boards</div>
    <div
      :class="$style.boards"
      v-for="board in getBoards"
      :key="board"
      @click="createActiveBoard(board.name)"
    >
      {{ board.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters(["getBoards", "getActiveBoard"]),
  methods: {
    ...mapMutations(["setActiveBoard"]),
    createActiveBoard(name){
      this.setActiveBoard(name);
      console.log(this.getActiveBoard);
    }
  }
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .boards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: blue;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>