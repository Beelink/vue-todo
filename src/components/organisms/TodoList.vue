<template>
  <div class="o-todoList">
    <h2 class="o-todoList__heading">Todo list:</h2>
    <ul class="o-todoList__list">
      <TodoItem
        v-for="(todo, index) in allTodos" 
        :index="index + 1"
        :title="todo.title" 
        :text="todo.text"
        :key="todo"
        :id="todo.id"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from "vuex"
import TodoItem from "../molecules/TodoItem.vue";

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters({
      allTodos: 'allTodos'
    })
  },
})
</script>

<style lang="scss" scoped>
.o-todoList {
  &__list {
    padding: 0;
  }
}
</style>