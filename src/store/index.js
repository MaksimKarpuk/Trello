import { createStore } from "vuex";

export default createStore({
  state: {
    boards: [],
    lists: [],
    isVisibleList: false,
  },
  getters: {
    getBoards(state) {
      return state.boards;
    },
    getVisibleList(state) {
      return state.isVisibleList;
    },
  },
  mutations: {
    setBoard(state, text) {
      if (text) {
        state.boards.push(text);
        state.isVisibleList = true;
      }
      console.log(state.boards);
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    setList(state, text) {
      if (text) {
        state.lists.push(text);
      }
      console.log(state.boards);
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
  },
  actions: {},
  modules: {},
});
