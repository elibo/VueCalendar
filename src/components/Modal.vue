<script setup lang="ts">
import { useCategoryStore } from "@/stores/Category";
import { useEventStore } from "@/stores/Event";
import { useCalendarStore } from "@/stores/Calendar";

import { ref } from "@vue/reactivity";

const props = defineProps({
  day: Number,
});

const store = useCategoryStore();
const state = useEventStore();
const calendar = useCalendarStore();
const name = ref("");
const selected = ref("");
const emit = defineEmits(["close"]);

const newEvent = () => {
  const ev = {
    name: name.value,
    category: selected.value,
    date: `${props.day}-${calendar.getMonthString}-${calendar.getYear}`,
  };
  state.addEvent(ev);
  emit("close", true);
};
</script>

<template>
  <div class="modal">
    <div class="close" @click="emit('close', true)">X</div>
    <div class="form">
      <input v-model="name" />
      <select v-model="selected">
        <option disabled value="">Select a category</option>
        <option v-for="cat in store.categories" :key="{ cat }">
          {{ cat }}
        </option>
      </select>
    </div>
    <button @click="newEvent()">add event</button>
  </div>
</template>

<style lang="scss">
.modal {
  background: grey;
  position: absolute;
  z-index: 1;
  padding: 1rem;
  top: 15%;
  right: 25%;
  .close {
    float: right;
    cursor: pointer;
  }
  .form {
    flex-direction: row;
  }
}
</style>