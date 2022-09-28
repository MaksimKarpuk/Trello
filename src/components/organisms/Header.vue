<template>
  <div :class="$style.wrapper">
    <CreateButton />
  </div>
</template>

<script>
import CreateButton from "@/components/atoms/CreateButton";
export default {
  components: {
    CreateButton,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-height: 3rem;
  max-width: 100%;
  background-color: #172b4d;
  
}
</style>