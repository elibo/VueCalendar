<script setup lang="ts">
const props = defineProps({
  actualYear: Number,
});

const emits = defineEmits(["change"]);

const previousYear = () => {
  emits("change", -1);
};

const nextYear = () => {
  emits("change", +1);
};
</script>

<template>
  <div class="navigator-wrapper">
    <button class="prev-button" @click="previousYear">anterior</button>
    {{ props.actualYear }}
    <button class="next-button" @click="nextYear">siguiente</button>
  </div>
</template>

<style>
.navigator-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}
</style>