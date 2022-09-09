<template>
  <div :class="$style.wrapper">
    <TaskBoardHead />
    <div :class="$style.lists" v-if="getVisibleList">
      <AddList />
    </div>
  </div>
</template>

<script>
import TaskBoardHead from "@/components/molecules/TaskBoardHead";
import AddList from "@/components/molecules/AddList";
export default {
  components: {
    TaskBoardHead,
    AddList,
  },
  computed: mapGetters(["getVisibleList"]),
};
</script>

<style lang="scss" module>
.wrapper {
  border: 0.1rem solid black;
  max-height: 100vh;
}
</style>