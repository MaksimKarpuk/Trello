<template>
  <div :class="$style.wrapper">
    <ProjectBoardHead />
  </div>
</template>

<script>
import ProjectBoardHead from "@/components/molecules/ProjectBoardHead";
export default {
  components: {
    ProjectBoardHead,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  border: 0.1rem solid black;
  max-height: 100vh;
}
</style>