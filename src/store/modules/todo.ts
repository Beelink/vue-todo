import { ActionContext } from 'vuex'
import { State } from '../index'

export interface Todo {
  id: Number,
  title: String,
  text: String,
}

export default {
  actions: {
    async fetchTodos(context: ActionContext<State, State>) {
      const todos = [
        {
          id: 123,
          title: "Todo 1",
          text: "Todo 1 text",
        },
        {
          id: 234,
          title: "Todo 2",
          text: "Todo 2 text",
        },
      ]
      context.commit('updateTodos', todos)
    }
  },
  mutations: {
    updateTodos(state: State, todos: Array<Todo>) {
      state.todos = todos
    },
    addTodo(state: State, newTodo: Todo) {
      state.todos.push(newTodo)
    },
  },
  state: {
    todos: [],
  },
  getters: {
    allTodos(state: State) {
      return state.todos
    },
    todoById(state: State) {
      return (id: Number) => {
        return state.todos.find((value: Todo) => value.id == id)
      }
    },
  },
}