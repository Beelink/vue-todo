<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from "vuex"

export default defineComponent({
  name: 'App',
  async mounted() {
    this.fetchTodos()
  },
  methods: {
    ...mapActions({
      fetchTodos: 'fetchTodos'
    })
  },
})
</script>

<style lang="scss">
@import "./assets/styles/_variables.scss";

#app {
    margin: 0;
    font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    padding: 16px;
    text-align: center;
    color: $text-color;
    margin: 16px auto;
    max-width: 512px;
    border: 2px solid $back-color;
    border-radius: $radius;
}
</style>