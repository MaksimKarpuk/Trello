<template>
  <div :class="$style.wrapper">
    <div :class="$style.text">Доски</div>
    <div :class="$style.board">
      <div
        :class="$style.boardItem"
        v-for="board in getBoards"
        :key="board.id"
        @click="createActiveBoard(board.name)"
      >
        {{ board.name }}
        <div :class="deleteButton" @click="deleteBoard(board.id)">&#10006;</div>
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
    deleteBoard(id){
      this.deleteActiveBoard(id);
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .text{
    font-size: 1.5rem;
  }
  .board {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .boardItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      background-color: rgb(74, 49, 212);
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.2rem;
    }
    .deleteButton {
    }
  }
}
</style>