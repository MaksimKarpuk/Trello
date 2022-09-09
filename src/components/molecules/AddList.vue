<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainButton" >Add List</div>
    <div :class="$style.listInfo" v-if="isVisible">
      <input type="text" v-model="text" placeholder="Add list name" />
      <div :class="$style.button">Add List</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      isVisible: false,
    };
  },
  computed: mapGetters(["getVisibleList"]),
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
}
</style>