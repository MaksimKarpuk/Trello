<template>
  <div :class="$style.wrapper">
    <ProjectBoard />
    <TasksBoard />
  </div>
</template>

<script>
import ProjectBoard from "@/components/organisms/ProjectBoard";
import TasksBoard from "@/components/organisms/TasksBoard";
export default {
  components: {
    ProjectBoard,
    TasksBoard,
  },
};
</script>

<style lang="scss" module>
.wrapper {
    display: flex;
}
</style>