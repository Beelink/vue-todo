<template>
  <form 
    class="m-createForm"
    @submit.prevent="submitForm"
  >
    <input 
      type="text" 
      placeholder="Title" 
      class="m-createForm__title"
      v-model="title"
    />
    <textarea 
      placeholder="Text" 
      class="m-createForm__text"
      v-model="text"
    />
    <button type="submit">Create</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import router from '../../router'
import generator from '../../helpers/generator'

export default defineComponent({
  name: 'CreateForm',
  data() {
    return {
      title: "",
      text: "",
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    submitForm() {
      this.addTodo({
        title: this.title,
        text: this.text,
        id: generator.generateId(),
      })
      this.title = "",
      this.text = ""
      // router.push('/')
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.m-createForm {
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  margin: 8px auto;
  max-width: 256px;

  input, textarea {
    border: 2px solid $back-color;
    border-radius: $radius;
    padding: 8px 16px;
    margin-top: 8px;
  }
}

</style>