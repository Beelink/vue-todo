<template>
  <div class="todo">
    <Header backButton>
      <input 
        class="todo__title"
        type="text"
        placeholder="Title"
        :value="title"
      />
    </Header>
    <textarea :value="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from "vuex"
import Header from "../components/molecules/Header.vue";

export default defineComponent({
  name: 'Todo',
  components: {
    Header,
  },
  data() {
    return {
      title: "",
      text: "",
    }
  },
  mounted() {
    // console.log(this.$route.params.id)
    const todo = this.todoById(this.$route.params.id)
    // console.log(todo)
    this.title = todo.title
    this.text = todo.text
  },
  computed: {
    ...mapGetters({
      todoById: 'todoById'
    }),
  },
})
</script>

<style lang="scss" scoped>
.todo {
  &__title {
    font-weight: bold;
    border: none;
    padding: 0;
    width: 100%;
  }
}
</style>