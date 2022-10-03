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
      <div :class="$style.content">
        <div :class="$style.description">
          <div :class="$style.text">Описание</div>
          <div :class="$style.add" @click="isVisible = true">
            Добавить описание
          </div>
          <div :class="$style.area" v-if="isVisible">
            <textarea cols="56" rows="10" v-model="text"></textarea>
            <div :class="$style.buttons">
              <div :class="$style.save" @click="addDescription">Сохранить</div>
              <div :class="$style.cancel" @click="isVisible = false">
                Отмена
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      text: "",
      isVisible: false,
    };
  },
  computed: mapGetters(["getActiveTask"]),

  mounted() {
    console.log(this.getActiveTask);
  },
  methods: {
    ...mapMutations(["setDescription"]),
    addDescription() {
      this.setDescription(this.text);
      this.text = "";
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  height: 56rem;
  background-color: rgba(0, 0, 0, 0.863);
  display: flex;
  justify-content: center;
  align-items: center;
  .popup {
    width: 30rem;
    height: 30rem;
    background-color: white;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      .closePopup {
        cursor: pointer;
        padding: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .closePopup:hover {
        border-radius: 50%;
        background-color: rgba(122, 108, 108, 0.712);
      }
    }
    .content {
      padding: 1rem;
      .description {
        .text {
          margin: 0 0 1rem 0;
        }
        .add {
          max-width: 10rem;
          padding: 0.5rem 3rem;
          background-color: aqua;
          cursor: pointer;
          border-radius: 0.3rem;
          margin: 0 0 1rem 0;
          text-align: center;
        }
        .buttons {
          display: flex;
          gap: 1rem;
          .save {
            padding: 0.5rem 3rem;
            background-color: aqua;
            cursor: pointer;
            border-radius: 0.3rem;
          }
          .cancel {
            padding: 0.5rem 3rem;
            border: 0.0625rem solid aqua;
            cursor: pointer;
            border-radius: 0.5rem;
          }
        }
      }
    }
  }
}
</style>