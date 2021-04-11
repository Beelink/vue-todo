<template>
  <li class="m-todoItem">
    <router-link class="m-todoItem__link"
      :to="{
        name: 'Todo',
        params: {
          id,
        }
      }"
    >
      <span class="m-todoItem__index">
        {{ index }})
      </span>
      <span class="m-todoItem__title">
        {{ title }}
      </span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoItem',
  props: [
    'index',
    'title',
    'text',
    'id',
  ],
})
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.m-todoItem {
  list-style: none;

  &__link {
    text-decoration: none;
    color: $text-color;
    padding: 4px 0;
    display: block;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>