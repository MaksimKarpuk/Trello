<template>
  <div :class="$style.wrapper">
    <div :class="$style.lists">
      <div :class="$style.listsItem" v-if="getActiveBoard">
        <div
          v-for="item in getActiveBoard.lists"
          :key="item.name"
          @click="setList(item.name)"
          :class="$style.list"
        >
          <div :class="$style.listTitle">
            {{ item.name }}
            <div :class="$style.deleteList">x</div>
          </div>
          <div :class="$style.tasks">
            <div :class="$style.addTastButton" @click="getVisible">
              Add Card
            </div>
            <div
              :class="$style.taskInput"
              v-if="isVisible && $store.state.isActiveList === item.name"
            >
              <input type="text" v-model="text" placeholder="Add card name" />
              <div :class="$style.taskButtons">
                <div :class="$style.setTaskButton" @click="submit">
                  Set Task
                </div>
                <div :class="$style.deleteTaskButton" @click="cutOut">
                  Delete Task
                </div>
              </div>
            </div>
            <div v-for="task in item.tasks" :key="task.name">
              {{ task.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.addList">
      <AddList />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddList from "@/components/molecules/AddList";
export default {
  data() {
    return {
      text: "",
      isVisible: false,
    };
  },
  components: {
    AddList,
  },
  computed: mapGetters(["getActiveBoard"]),
  methods: {
    ...mapMutations(["setTask", "setActiveList"]),
    getVisible() {
      this.isVisible = !this.isVisible;
    },
    submit() {
      this.setTask(this.text);
      this.text = "";
    },
    setList(name) {
      this.setActiveList(name);
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  max-height: 100%;
  display: flex;
  gap: 1rem;
  overflow: scroll;
  width: 100%;
  background-color: rgb(49, 184, 162);
  padding: 1rem;
  .lists {
    .listsItem {
      display: flex;
      gap: 1rem;
      .list {
        background-color: white;
        width: 25rem;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .tasks {
          .addTastButton {
          }
          .taskInput {
            .taskButtons {
              .setTaskButton {
              }
              .deleteTaskButton {
              }
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