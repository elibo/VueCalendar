<script setup lang="ts">
import { useCategoryStore } from "@/stores/Category";

const store = useCategoryStore();
</script>

<template>
  <div v-for="cat in store.categories" :key="{ cat }">
    <p>{{ cat }}</p>
  </div>
</template>

<style lang="scss">

</style>