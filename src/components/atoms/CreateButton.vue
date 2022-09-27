<template>
  <div :class="$style.wrapper">
    <div :class="$style.button">
      <button :class="$style.button" @click="getVisible">Создать</button>
    </div>
    <div v-if="isVisible" :class="$style.create">
      <input type="text" placeholder="Имя доски" v-model="text" />
      <button @click="submit">Create</button>
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
  display: block;
}
</style>