<template>
  <div :class="$style.wrapper" v-if="$store.state.isVisiblePopup === true">
    <div :class="$style.popup">
      <div :class="$style.header">
        {{ getActiveTask.name }}
        <div
          :class="$style.closePopup"
          @click="$store.state.isVisiblePopup = false"
        >
          &#10006;
        </div>
      </div>
      <div :class="$style.content"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getActiveTask"]),
  mounted(){
    console.log(this.getActiveTask);
  }
};
</script>

<style lang="scss" module>
.wrapper {
  .popup {
    width: 30rem;
    height: 30rem;
    background-color: white;
    transition: all 0.3s ease 0s;
    .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      .closePopup{
        cursor: pointer;
        padding: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .closePopup:hover{
        border-radius: 50%;
        background-color: rgba(122, 108, 108, 0.712);
      }
    }
  }
}
</style>