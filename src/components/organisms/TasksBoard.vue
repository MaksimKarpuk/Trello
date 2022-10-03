<template>
  <div :class="$style.wrapper">
    <div :class="$style.lists">
      <div :class="$style.listsItem" v-if="getActiveBoard">
        <div
          v-for="item in $store.getters.getLists"
          :key="item.id"
          @click="madeActiveList(item.name)"
          :class="$style.list"
          @drop="onDrop($event, item.name)"
          @dragover.prevent
          @dragenter.prevent
        >
          <div :class="$style.listTitle">
            {{ item.name }}
            <div :class="$style.deleteList" @click="deleteList(item.id)">
              &#10006;
            </div>
          </div>
          <div :class="$style.tasks">
            <div :class="$style.addTastButton" @click="getVisible(item.name)">
              Добавить задание
            </div>
            <div
              :class="$style.taskInput"
              v-if="isVisible && $store.state.isActiveList === item.name"
            >
              <input type="text" v-model="text" placeholder="Имя задания" />
              <div :class="$style.setTaskButton" @click="submit">
                Установить задание
              </div>
            </div>
            <div
              v-for="task in $store.getters.getTasks.filter(
                (i) => i.listName === item.name
              )"
              :key="task.id"
              :class="$style.task"
              @dragstart="onDragStart($event, task)"
              draggable="true"
              @click="[setActiveTask(task.id), $store.state.isVisiblePopup=true]"
              
            >
              {{ task.name }}
              <div :class="$style.deleteTask" @click="deleteTask(task.id)">
                &#10006;
              </div>
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
  computed: mapGetters(["getActiveBoard", "getisActiveList"]),
  methods: {
    ...mapMutations([
      "setTask",
      "setActiveList",
      "deleteListItem",
      "moveTask",
      "deleteTaskItem",
      "setChosenTask"
    ]),
    getVisible(name) {
      if (name === this.getisActiveList) {
        this.isVisible = !this.isVisible;
      }
    },
    submit() {
      this.setTask(this.text);
      this.text = "";
    },
    madeActiveList(name) {
      this.setActiveList(name);
    },
    deleteList(id) {
      this.deleteListItem(id);
    },
    deleteTask(id) {
      this.deleteTaskItem(id);
    },
    onDragStart(e, task) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("taskId", task.id);
    },
    onDrop(e, listName) {
      const taskId = e.dataTransfer.getData("taskId");
      this.moveTask({ listName, taskId });
    },
    setActiveTask(id){
      this.setChosenTask(id);
    }
  },
};
</script>

<style lang="scss" module>
.wrapper {
  max-width: 100%;
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
              text-align: center;
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
              margin: 0 0 0.5rem 0;
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