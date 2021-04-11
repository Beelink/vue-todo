<template>
  <div class="notFound">
    <Header backButton>Not found</Header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "../components/molecules/Header.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
})
</script>