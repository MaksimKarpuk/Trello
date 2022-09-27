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
  max-width: 15rem;
  width: 100%;
  height: 100vh;
  background-color: hsla(307,84.4%,15.1%,0.9);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
  text-align: center;
  padding: 1rem 0.5rem;
}
</style>