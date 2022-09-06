<template>
  <div :class="$style.wrapper">
    <TaskBoardHead/>
  </div>
</template>

<script>
import TaskBoardHead from "@/components/molecules/TaskBoardHead"
export default {
components:{
    TaskBoardHead,
}
}
</script>

<style lang="scss" module>
.wrapper {
    border: 0.1rem solid black;
    max-height: 100vh;
}
</style>