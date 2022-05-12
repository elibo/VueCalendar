<script setup lang="ts">
import { useEventStore, Event } from "@/stores/Event";
import { useCalendarStore } from "@/stores/Calendar";

const props = defineProps({
  day: Number,
});
const calendar = useCalendarStore();
const store = useEventStore();
const events: Array<Event> = store.getEventsByDate(
  `${props.day}-${calendar.getMonthString}-${calendar.year}`
);
</script>

<template>
  <div class="cell">
    <li v-for="(event, i) in events" :key="{ i }">{{ event.name }}</li>
  </div>
</template>

<style lang="scss">
</style>