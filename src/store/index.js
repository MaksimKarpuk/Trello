import { createStore } from "vuex";

export default createStore({
  state: {
    boards: JSON.parse(localStorage.getItem("boards")) || [],
    isActiveBoard: null,
    isActiveList: null,
  },
  getters: {
    getActiveBoard(state) {
      return state.boards.find((board) => board.name === state.isActiveBoard);
    },
    getActiveList(state) {
      return state.boards.lists;
    },
    getBoards(state) {
      return state.boards;
    },
    getCards(state) {
      return state.cards;
    },
  },
  mutations: {
    setActiveBoard(state, name) {
      state.isActiveBoard = name;
    },
    setActiveList(state, name) {
      state.isActiveList = name;
      console.log(state.isActiveList);
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
    delteListItem(state, name) {
      for (let i = 0; i < state.boards.length; i++) {
        if (state.isActiveBoard === state.boards[i].name) {
          state.boards[i].lists = state.boards[i].lists.filter((list) => list.name !== name);
        }
      }
    },

    setTask(state, text) {
      if (text) {
        for (let i = 0; i < state.boards.length; i++) {
          if (state.isActiveBoard === state.boards[i].name) {
            for (let j = 0; j < state.boards[i].lists.length; j++) {
              if (state.isActiveList === state.boards[i].lists[j].name) {
                state.boards[i].lists[j].tasks.push({
                  name: text,
                });
              }
            }
          }
        }
      }
      console.log(state.boards[0].lists);
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
  },
  actions: {},
  modules: {},
});
