import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    boards: JSON.parse(localStorage.getItem("boards")) || [],
    lists: JSON.parse(localStorage.getItem("lists")) || [],
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    isActiveBoard: null,
    isActiveList: null,
    isActiveTaskId: null,
    isVisiblePopup: false,
  },
  getters: {
    getActiveBoard(state) {
      return state.boards.find((board) => board.name === state.isActiveBoard);
    },
    getLists(state) {
      return state.lists.filter(
        (list) => list.boardName === state.isActiveBoard
      );
    },
    getTasks(state) {
      return state.tasks.filter(
        (task) => task.boardName === state.isActiveBoard
      );
    },
    getBoards(state) {
      return state.boards;
    },
    getisActiveList(state) {
      return state.isActiveList;
    },
    getActiveTask (state){
      return state.tasks.find((task)=>task.id===state.isActiveTaskId)
    },
  },
  mutations: {
    setActiveBoard(state, name) {
      state.isActiveBoard = name;
    },
    setActiveList(state, name) {
      state.isActiveList = name;
    },
    setBoard(state, text) {
      if (text && state.boards.filter((x) => x.name === text).length === 0) {
        state.boards.push({
          name: text,
          id: uuidv4(),
        });
        console.log(state.boards);
        state.isVisibleList = !state.isVisibleList;
      }
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    deleteActiveBoard(state, id) {
      state.boards = state.boards.filter((board) => board.id !== id);
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    setList(state, text) {
      if (text) {
        state.lists.push({
          name: text,
          id: uuidv4(),
          boardName: state.isActiveBoard,
        });
      }
      console.log(state.lists);
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
    deleteListItem(state, id) {
      state.lists = state.lists.filter((list) => list.id !== id);
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
    setTask(state, text) {
      if (text) {
        state.tasks.push({
          name: text,
          id: uuidv4(),
          boardName: state.isActiveBoard,
          listName: state.isActiveList,
        });
      }
      console.log(state.tasks);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTaskItem(state, id) {
      state.tasks = state.tasks.filter((x) => x.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTask(state, { listName, taskId }) {
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, listName: listName } : task
      );
    },
    setChosenTask(state, id) {
      state.isActiveTaskId = id;
      console.log(state.isActiveTaskId);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },

  actions: {},
  modules: {},
});
