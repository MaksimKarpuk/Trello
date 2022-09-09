<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainButton" @click="getVisible">Add List</div>
    <div :class="$style.listInfo" v-if="isVisible">
      <input type="text" v-model="text" placeholder="Add list name" />
      <div :class="$style.buttons">
        <div :class="$style.button" @click="submit">Set List</div>
        <div :class="$style.deleteButton" @click="cutOut">Delete</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      text: "",
      isVisible: false,
    };
  },
  methods: {
    ...mapMutations(["setList"]),
    getVisible() {
      this.isVisible = !this.isVisible;
    },
    submit() {
      this.setList(this.text);
      this.text = "";
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  .mainButton {
    cursor: pointer;
    border: 0.0625rem solid black;
    text-align: center;
    width: 18rem;
  }
  .listInfo {
    display: flex;
    .buttons {
      display: flex;
      gap: 1rem;
      .button {
        cursor: pointer;
      }
    }
  }
}
</style>