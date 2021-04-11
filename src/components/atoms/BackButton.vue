<template>
  <router-link 
    class="a-backButton"
    :to="{
      name: pathName,
    }"
  >
    <span class="a-backButton__text">Go back</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackButton',
  props: [
    'pathName'
  ]
})
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.a-backButton {
  background: $accent-color;
  text-decoration: none;
  padding: 16px;
  border-radius: $radius;

  &__text {
    color: #fff;
  }
}
</style>