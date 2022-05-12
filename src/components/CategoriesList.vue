<script setup lang="ts">
import { useCategoryStore } from "@/stores/Category";

const store = useCategoryStore();
</script>

<template>
  <div v-for="(cat, i) in store.categories" :key="{ cat }">
    <p>{{ cat }}<button @click="store.removeCategory(i)">remove</button></p>
  </div>
</template>

<style lang="scss">
</style>