<template>
  <div :class="$style.wrapper">
    <TaskBoardHead />
    <div :class="$style.task">
      <div :class="$style.lists">
        <div
          :class="$style.list"
          v-if="getActiveBoard"
          @click="getVisibleButton"
        >
          {{ getActiveBoard.lists[1].name }}
          <div>
            <div :class="$style.cardItem" v-for="item in getCards" :key="item">
              {{ item }}
            </div>
            <div
              :class="$style.cardButton"
              @click="getVisible"
              v-show="isVisibleButton"
            >
              Add Card
            </div>
            <div :class="$style.cardItemInfo" v-if="isVisible">
              <input type="text" v-model="text" placeholder="Add card name" />
              <div :class="$style.buttons">
                <div :class="$style.button" @click="submit">Set Card</div>
                <div :class="$style.deleteButton" @click="cutOut">Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.addList">
        <AddList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TaskBoardHead from "@/components/molecules/TaskBoardHead";
import AddList from "@/components/molecules/AddList";
export default {
  data() {
    return {
      text: "",
      isVisible: false,
      isVisibleButton: false,
    };
  },
  components: {
    TaskBoardHead,
    AddList,
  },
  computed: mapGetters([
    "getLists",
    "getCards",
    "getActiveBoard",
  ]),
  methods: {
    ...mapMutations(["setCard"]),
    getVisible() {
      this.isVisible = !this.isVisible;
    },
    getVisibleButton() {
      this.isVisibleButton = !this.isVisibleButton;
    },
    submit() {
      this.setCard(this.text);
      this.text = "";
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  background-color: rgb(147, 202, 202);
  .task {
    display: flex;
    gap: 0.5rem;
    .lists {
      .list {
        display: flex;
        gap: 1rem;
        flex-wrap: nowrap;
        cursor: pointer;
        height: 3rem;
        background-color: pink;
        justify-content: center;
        align-items: center;
        .cardButton {
          cursor: pointer;
        }
        .cardItemInfo {
          .buttons {
            .button {
              cursor: pointer;
            }
          }
        }
      }
    }
    .addList {
      max-width: 18rem;
      background-color: white;
      border: none;
    }
  }
}
</style>