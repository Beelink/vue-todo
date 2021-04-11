import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Todo from "../views/Todo.vue"
import NewTodo from "../views/NewTodo.vue"
import NotFound from "../views/NotFound.vue"

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
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: NotFound 
  },
  { 
    path: '/:pathMatch(.*)', 
    name: 'bad-not-found', 
    component: NotFound 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;