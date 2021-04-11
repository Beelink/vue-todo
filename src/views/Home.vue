<template>
  <div class="home">
    <Header>Home</Header>
    <TodoList />
    <AddButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "../components/molecules/Header.vue";
import TodoList from "../components/organisms/TodoList.vue";
import AddButton from "../components/atoms/AddButton.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    TodoList,
    AddButton,
  },
})
</script>