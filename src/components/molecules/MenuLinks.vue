<template>
  <div :class="$style.wrapper">
    <div :class="$style.links" v-for="link in links" :key="link.id">
      {{ link.text }}
      <div :class="$style.arrow"></div>
    </div>
  </div>
</template>

<script>
import content from "../../assets/content.json";
export default {
  data() {
    return {
      links: content.links,
    };
  },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  gap: 0.25rem;
  white-space: nowrap;
  .links {
    padding: 0.5rem 0.75rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    color: white;
    .arrow {
      content: "";
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
}
</style>