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
            <div :class="$style.deleteList" @click="deleteList(item.name)">
              &#10006;
            </div>
          </div>
          <div :class="$style.tasks">
            <div :class="$style.addTastButton" @click="getVisible">
              Добавить задание
            </div>
            <div
              :class="$style.taskInput"
              v-if="isVisible && $store.state.isActiveList === item.name"
            >
              <input type="text" v-model="text" placeholder="Имя задания" />
              <div :class="$style.setTaskButton" @click="submit">Set Task</div>
            </div>
            <div
              v-for="task in item.tasks"
              :key="task.name"
              :class="$style.task"
            >
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
    ...mapMutations(["setTask", "setActiveList", "delteListItem"]),
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
    deleteList(name) {
      this.delteListItem(name);
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
  background-color: rgb(116, 171, 202);
  padding: 1rem;
  .lists {
    .listsItem {
      display: flex;
      gap: 1rem;
      .list {
        width: 24rem;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .listTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: rgb(233, 163, 163);
          font-size: 1.2rem;
          border-radius: 0.5rem;
          margin: 0 0 0.5rem 0;
        }
        .tasks {
          .addTastButton {
            cursor: pointer;
            background-color: white;
            text-align: center;
            padding: 1rem 6rem;
            border-radius: 0.5rem;
            font-size: 1.2rem;
            margin: 0 0 0.5rem 0;
          }
          .taskInput {
            input {
              width: 100%;
              height: 2rem;
              outline: none;
              border: none;
              border-radius: 0.5rem;
              font-size: 1rem;
              margin: 0 0 0.5rem 0;
            }

            .setTaskButton {
              cursor: pointer;
              max-width: 25rem;
              width: 100%;
              height: 2rem;
              text-align: center;
              vertical-align: middle;
              background-color: white;
              border-radius: 0.5rem;
              font-size: 1.2rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .task {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: rgb(233, 163, 163);
            font-size: 1rem;
            border-radius: 0.5rem;
            margin: 0 0 0.5rem 0;
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