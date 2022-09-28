<template>
  <div :class="$style.wrapper">
    <div :class="$style.button">
      <div :class="$style.createButton" @click="getVisible">Создать</div>
    </div>
    <div v-if="isVisible" :class="$style.create">
      <input type="text" placeholder="Имя доски" v-model="text" />
      <div @click="submit" :class="$style.button">Добавить</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isVisible: false,
      text: "",
    };
  },
  methods: {
    ...mapMutations(["setBoard"]),
    getVisible() {
      this.isVisible = !this.isVisible;
    },
    submit() {
      this.setBoard(this.text);
      this.text = "";
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  gap: 1rem;
  .button {
    .createButton {
      padding: 0.6rem 3rem;
      background-color: rgb(255, 255, 255);
      border-radius: 0.2rem;
    }
  }
  .create {
    display: flex;
    gap: 1rem;
    input{
      text-align: center;
    }
    .button {
      padding: 0.6rem 3rem;
      background-color: rgb(2, 252, 56);
      border-radius: 0.2rem;
    }
  }
}
</style>