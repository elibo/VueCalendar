<script setup lang="ts">
const props = defineProps<{
  list: Array<string>;
}>();
</script>

<template>
  <div v-for="cat in props.list" :key="{ cat }">
    <p>{{ cat }}</p>
  </div>
</template>

<style>
</style>