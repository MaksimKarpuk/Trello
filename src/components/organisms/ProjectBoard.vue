<template>
  <div :class="$style.wrapper">
    <ProjectBoardHead />
    <ProjectBoardBody />
  </div>
</template>

<script>
import ProjectBoardHead from "@/components/molecules/ProjectBoardHead";
import ProjectBoardBody from "@/components/molecules/ProjectBoardBody";
export default {
  components: {
    ProjectBoardHead,
    ProjectBoardBody,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  border: 0.1rem solid black;
  max-height: 100vh;
  max-width: 15rem;
  width: 100%;
}
</style>