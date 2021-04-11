<template>
  <div class="m-header">
    <div v-if="backButton" class="m-header__back">
      <BackButton pathName="Home" />
    </div>
    <h1 class="m-header__heading">
      <slot></slot>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../atoms/BackButton.vue';

export default defineComponent({
  name: 'Todo',
  components: {
    BackButton,
  },
  props: {
    backButton: Boolean
  }
})
</script>

<style lang="scss" scoped>
.m-header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  &__heading {
    margin: 0 16px;
    display: flex;
  }

  &__back {
    display: flex;
  }
}
</style>