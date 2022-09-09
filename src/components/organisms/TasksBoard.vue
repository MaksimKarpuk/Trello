<template>
  <div :class="$style.wrapper">
    <TaskBoardHead />
    <div :class="$style.task">
      <div :class="$style.cards">
        <div :class="$style.card" v-for="card in getLists" :key="card">
          {{ card }}
          <div :class="$style.cardItem" v-for="item in getCards" :key="item">
            {{ item }}
          </div>
          <div :class="$style.cardButton" @click="getVisible">Add Card</div>
          <div :class="$style.cardItemInfo" v-if="isVisible">
            <input type="text" v-model="text" placeholder="Add card name" />
            <div :class="$style.buttons">
              <div :class="$style.button" @click="submit">Set Card</div>
              <div :class="$style.deleteButton" @click="cutOut">Delete</div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.lists" v-if="getVisibleList">
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
    };
  },
  components: {
    TaskBoardHead,
    AddList,
  },
  computed: mapGetters(["getVisibleList", "getLists", "getCards"]),
  methods: {
    ...mapMutations(["setCard"]),
    getVisible() {
      this.isVisible = !this.isVisible;
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
  border: 0.1rem solid black;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(147, 202, 202);
  .task {
    display: flex;
    .cards {
      display: flex;
      gap: 0.5rem;
      .card {
        border: 0.0625rem solid white;
        width: 15rem;
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
    .lists {
      max-width: 18rem;
    }
  }
}
</style>