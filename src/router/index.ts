import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Todo from "../views/Todo.vue"
import NewTodo from "../views/NewTodo.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo/:id",
    name: "Todo",
    component: Todo,
    props: true,
  },
  {
    path: "/new",
    name: "New",
    component: NewTodo,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;