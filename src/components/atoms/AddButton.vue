<template>
  <router-link 
    class="a-addButton"
    :to="{
      name: 'New',
    }"
  >
    <span class="a-addButton__text">New todo</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddButton',
})
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.a-addButton {
  background: $accent-color;
  text-decoration: none;
  padding: 16px;
  border-radius: $radius;
  display: inline-block;

  &__text {
    color: #fff;
  }
}
</style>