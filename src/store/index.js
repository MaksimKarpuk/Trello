import { createStore } from "vuex";

export default createStore({
  state: {
    boards: [],
    lists: [],
    cards:[],
    isVisibleList: false,
  },
  getters: {
    getBoards(state) {
      return state.boards;
    },
    getVisibleList(state) {
      return state.isVisibleList;
    },
    getLists(state) {
      return state.lists;
    },
    getCards(state) {
      return state.cards;
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
      console.log(state.lists);
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
