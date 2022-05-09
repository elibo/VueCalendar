<script setup lang="ts">
import { getYearCalendar } from "../helpers/CalendarHelper";
import { MONTHS, WEEK } from "../helpers/AppConstants";
const props = defineProps({
  year: Number,
});

const today =
  new Date().getDate() +
  ":" +
  new Date().getMonth() +
  ":" +
  new Date().getFullYear();
</script>

<template>
  <div class="calendar-wrapper">
    <div v-for="(month, i) in MONTHS" :key="{ i }" class="calendar-container">
      {{ month }}
      <table class="calendar">
        <thead class="calendar-header">
          <tr>
            <th v-for="day in WEEK" :key="{ day }">{{ day }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="d in getYearCalendar(i, props.year)" :key="{ d }">
            <td
              v-for="x in d.days"
              :key="{ x }"
              v-bind:class="{ today: today === `${x + ':' + i + ':' + year}` }"
            >
              {{ x }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.calendar-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  max-width: 70vw;
  overflow-y: auto;
  height: 85vh;
}
.calendar-container {
  margin: 0.5rem;
}
.calendar td {
  color: #000000d9;
  margin: 0 4px;
  padding: 4px 8px 0;
  border: 0;
  border-top: 2px solid #f0f0f0;
  border-radius: 0;
}
.calendar td.today {
  border-color: #1890ff;
  background-color: #e6f7ff;
}
.calendar {
  width: 100%;
}
.calendar .calendar-header {
  font-size: 16px;
}
</style>