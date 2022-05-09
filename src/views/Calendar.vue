<script setup lang="ts">
import { ref } from "@vue/reactivity";
import YearNavigator from "../components/YearNavigator.vue";
import YearCalendar from "../components/YearCalendar.vue";

const year = ref(new Date().getFullYear());
</script>

<template>
  <div>
    <YearNavigator :actualYear="year" @change="(res) => (year += res)" />
    <YearCalendar :year="year" />
  </div>
</template>

<style>
</style>
