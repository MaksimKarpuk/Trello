<template>
  <div :class="$style.wrapper" v-show="getBoards.length">
    <div :class="$style.mainButton" @click="getVisible">Добавить лист</div>
    <div :class="$style.listInfo" v-if="isVisible">
      <input type="text" v-model="text" placeholder="Имя листа" />
      <div :class="$style.button" @click="submit">Установить лист</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      text: "",
      isVisible: false,
    };
  },
  computed: mapGetters(["getBoards"]),
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
    background-color: white;
    text-align: center;
    padding: 1rem 8rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
  }
  .listInfo {
    max-width: 24rem;
    input {
      width: 100%;
      height: 2rem;
      outline: none;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      margin: 0 0 0.5rem 0;
    }
    .button {
      cursor: pointer;
      max-width: 25rem;
      width: 100%;
      height: 3.8rem;
      text-align: center;
      vertical-align: middle;
      background-color: white;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>