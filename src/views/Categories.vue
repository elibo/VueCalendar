<script setup lang="ts">
import NewCategory from "../components/NewCategory.vue";
import CategoriesList from "../components/CategoriesList.vue";

import { ref } from "@vue/reactivity";

const categories = ref([]);
</script>

<template>
  <div>
    categories view
    <NewCategory @add="(category) => categories.push(category)" />
    <CategoriesList :list="categories" />
  </div>
</template>

<style>
</style>
