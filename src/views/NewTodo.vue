<template>
  <div class="newTodo">
    <Header backButton>New todo</Header>
    <CreateForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreateForm from "../components/molecules/CreateForm.vue";
import Header from '../components/molecules/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    CreateForm,
    Header,
  }
})
</script>