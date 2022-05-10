<script setup lang="ts">
import { useCalendarStore } from "@/stores/Calendar";

const store = useCalendarStore()

</script>

<template>
  <div class="navigator-wrapper">
    <button class="prev-button" @click="store.decrement()">anterior</button>
    {{ store.year }}
    <button class="next-button" @click="store.increment()">siguiente</button>
  </div>
</template>

<style lang="scss">

.navigator-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}
</style>