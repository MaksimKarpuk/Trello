<template>
  <div
    :class="$style.wrapper"
    v-if="$store.state.isVisiblePopup === true"
    @click="setUnvisiblePopUp()"
  >
    <div :class="$style.popup" @click.stop>
      <div :class="$style.header">
        {{ getActiveTask.name }}
        <div :class="$style.closePopup" @click="setUnvisiblePopUp()">
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
            <textarea cols="50" rows="10" v-model="text"></textarea>
            <div :class="$style.buttons">
              <div :class="$style.save" @click="addDescription">Сохранить</div>
              <div :class="$style.cancel" @click="isVisible = false">
                Отмена
              </div>
            </div>
          </div>
          <div
            :class="$style.descriptionText"
            v-for="text in getDescription"
            :key="text"
          >
            {{ text }}
            <div
              :class="$style.deleteDescription"
              @click="deleteDescription(text)"
            >
              &#10006;
            </div>
          </div>
        </div>
        <hr />
        <div :class="$style.marks">
          <div :class="$style.text">Оценка</div>
          <select :class="$style.select" v-model="selected">
            <option v-for="mark in marks" :key="mark.id">
              {{ mark.value }}
            </option>
          </select>
          <div :class="$style.selectedMark">{{ getMark }}</div>
          <div :class="$style.save" @click="addMark(selected)">Сохранить</div>
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
      selected: "",
      isVisible: false,
      marks: [
        { value: 1, id: 1 },
        { value: 2, id: 2 },
        { value: 3, id: 3 },
        { value: 5, id: 4 },
        { value: 8, id: 5 },
        { value: 13, id: 6 },
        { value: 21, id: 7 },
        { value: 34, id: 8 },
        { value: 55, id: 9 },
      ],
    };
  },
  computed: mapGetters(["getActiveTask", "getDescription","getMark"]),

  mounted() {
    console.log(this.getActiveTask);
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    ...mapMutations([
      "setDescription",
      "filterDescription",
      "madeMark",
      "makeUnvisiblePopUp",
    ]),
    handleKeydown(e) {
      if (this.isVisible && e.key === "Escape") {
        this.setUnvisiblePopUp();
      }
    },
    addDescription() {
      this.setDescription(this.text);
      this.text = "";
    },
    deleteDescription(text) {
      this.filterDescription(text);
    },
    addMark(text) {
      this.madeMark(text);
      this.selected = "";
    },
    setUnvisiblePopUp() {
      this.makeUnvisiblePopUp();
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
    overflow: scroll;
    width: 30rem;
    height: 35rem;
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
        margin: 0 0 1rem 0;
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
          margin: 0 0 1rem 0;
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
        .descriptionText {
          border: 0.0625rem solid black;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          .deleteDescription {
            cursor: pointer;
          }
        }
      }
      .marks {
        .text {
          margin: 0 0 0.5rem 0;
        }
        .select {
          margin: 0 0 0.5rem 0;
        }
        .save {
          padding: 0.5rem 3rem;
          background-color: aqua;
          cursor: pointer;
          border-radius: 0.3rem;
          max-width: 10rem;
          text-align: center;
        }
      }
    }
  }
}
</style>