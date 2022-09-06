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
  
}
</style>