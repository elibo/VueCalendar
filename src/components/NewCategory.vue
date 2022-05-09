<script setup lang="ts">
import { ref } from "@vue/reactivity";

const emit = defineEmits(["add"]);
const newCategory = ref("");
const addCategory = () => {
  emit("add", newCategory.value);
  newCategory.value = "";
};
</script>

<template>
  <div>
    <input v-model="newCategory" v-on:keyup.enter="addCategory" />
    <button @click="addCategory">add</button>
  </div>
</template>

<style>
</style>