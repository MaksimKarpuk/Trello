<template>
  <div :class="$style.wrapper">
    <div :class="$style.text">Доски</div>
    <div :class="$style.board">
      <div
        :class="$style.boardItem"
        v-for="board in getBoards"
        :key="board"
        @click="createActiveBoard(board.name)"
      >
        {{ board.name }}
        <div :class="deleteButton" @click="deleteBoard(board.name)">х</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters(["getBoards"]),
  methods: {
    ...mapMutations(["setActiveBoard", "deleteActiveBoard"]),
    createActiveBoard(name) {
      this.setActiveBoard(name);
    },
    deleteBoard(name){
      this.deleteActiveBoard(name);
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .board {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .boardItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      background-color: blue;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
    }
    .deleteButton {
      border: 00.0625rem solid white;
    }
  }
}
</style>