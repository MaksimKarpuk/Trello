import { createStore } from "vuex";

export default createStore({
  state: {
    boards: [],
    isVisibleList: false,
    isActiveBoard: null,
  },
  getters: {
    getActiveBoard(state) {
      return state.boards.filter((board) => board.name === state.isActiveBoard);
    },
    getBoards(state) {
      return state.boards;
    },
    getVisibleList(state) {
      return state.isVisibleList;
    },
    getLists(state) {
      return state.boards;
    },
    getCards(state) {
      return state.cards;
    },
  },
  mutations: {
    setActiveBoard(state, name) {
      state.isActiveBoard = name;
      console.log(state.isActiveBoard);
    },
    setBoard(state, text) {
      if (text) {
        state.boards.push({
          name: text,
          lists: [],
          id: text,
        });
        state.isVisibleList = true;
      }
      console.log(state.boards);
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    setList(state, text) {
      if (text) {
        state.boards.lists.push({
          name: text,
          tasks: [
            {
              name: "",
            },
          ],
          id: text,
        });
      }
      console.log(state.boards.lists);
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
    setCard(state, text) {
      if (text) {
        state.cards.push(text);
      }
      console.log(state.cards);
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
  },
  actions: {},
  modules: {},
});
