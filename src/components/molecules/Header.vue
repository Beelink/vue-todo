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
@import "../../assets/styles/_variables.scss";

.m-header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid $back-color;

  &__heading {
    margin: 0 16px;
    display: flex;
    flex: 1;
  }

  &__back {
    display: flex;
  }
}
</style>