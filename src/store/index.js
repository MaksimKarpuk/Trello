import { createStore } from "vuex";

export default createStore({
  state: {
    boards: JSON.parse(localStorage.getItem("boards")) || [],
    isVisibleList: false,
    isActiveBoard: null,
  },
  getters: {
    getActiveBoard(state) {
      return state.boards.find((board) => board.name === state.isActiveBoard);
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
    deleteActiveBoard(state, name) {
      state.boards = state.boards.filter((board) => board.name !== name);
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    setBoard(state, text) {
      if (text) {
        state.boards.push({
          name: text,
          lists: [],
        });
        state.isVisibleList = !state.isVisibleList;
      }
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    setList(state, text) {
      if (text) {
        for (let i = 0; i < state.boards.length; i++) {
          if (state.isActiveBoard === state.boards[i].name) {
            state.boards[i].lists.push({
              name: text,
              tasks: [],
            });
          }
        }
      }
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    // setCard(state, text) {
    //   if (text) {
    //     state.cards.push(text);
    //   }
    //   console.log(state.cards);
    //   localStorage.setItem("cards", JSON.stringify(state.cards));
    // },
  },
  actions: {},
  modules: {},
});
