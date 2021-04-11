import { createStore } from "vuex"
import { initialState } from "./initialState";
import todo from './modules/todo'

export type State = typeof initialState;

const store = createStore({
  state: initialState,
  modules: {
    todo
  }
})

export default store
