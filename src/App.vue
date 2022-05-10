<script setup lang="ts">
import Categories from "./views/Categories.vue";
</script>

<template>
  <div class="side-panel">
    <Categories />
  </div>

  <div class="main-panel">
    <RouterView />
  </div>
</template>

<style lang="scss">

.side-panel {
  float: left;
  width: 20%;
  height: 97vh;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
}
.main-panel {
  float: left;
  width: 75%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
