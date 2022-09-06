import { createStore } from "vuex";

export default createStore({
  state: {
    boards: [],
  },
  getters: {},
  mutations: {
    setBoard(state,text){
      if(text){
        state.boards.push(text);
      }
      console.log(state.boards);
    }
  },
  actions: {},
  modules: {},
});
