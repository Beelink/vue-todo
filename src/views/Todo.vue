<template>
  <div class="todo">
    <Header backButton>
      <input 
        class="todo__title"
        type="text"
        placeholder="Title"
        v-model="title"
        @input="updateTodoInfo()"
      />
    </Header>
    <textarea 
      v-model="text"
      @input="updateTodoInfo()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from "vuex"
import Header from "../components/molecules/Header.vue"

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
    const todo = this.todoById(this.$route.params.id)
    this.title = todo.title
    this.text = todo.text
  },
  computed: {
    ...mapGetters({
      todoById: 'todoById'
    }),
  },
  methods: {
    ...mapMutations(['updateTodo']),
    updateTodoInfo() {
      this.updateTodo({
        title: this.title,
        text: this.text,
        id: this.$route.params.id,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.todo {
  &__title {
    font-weight: bold;
    border: none;
    padding: 0;
    width: 100%;
  }

  textarea {
    border: 2px solid $back-color;
    border-radius: $radius;
    padding: 8px 16px;
    margin-top: 16px;
    max-width: 100%;
    box-sizing: border-box; 
    min-height: 128px;
    width: 100%;
  }
}
</style>