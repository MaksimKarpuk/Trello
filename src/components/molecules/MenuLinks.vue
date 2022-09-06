<template>
  <div :class="$style.wrapper">
    <div :class="$style.links" v-for="link in links" :key="link.id">
      {{ link.text }}
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
.wrapper{
  display: flex;
  gap: 0.25rem;
  white-space: nowrap;
  .links{
    padding: 0.5rem 0.75rem;
  }
}
</style>