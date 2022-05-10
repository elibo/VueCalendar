<script setup lang="ts">
import { MONTHS, WEEK } from "../helpers/AppConstants";
import { useCalendarStore } from "@/stores/Calendar";
import { getMonthCalendar } from "../helpers/CalendarHelper";
import router from "@/router";
const store = useCalendarStore();

const viewMonth = (month:number)=>{
  store.setMonth(month)
  router.push('/month');
}
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

        <tbody >
          <tr v-for="d in getMonthCalendar(i, store.year)" :key="{ d }">
            <td @click="viewMonth(i)"
              v-for="x in d.days"
              :key="{ x }"
              v-bind:class="{ today: store.today === `${x + ':' + i + ':' + store.year}` }"
            >
              {{ x }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
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

.calendar {
  cursor: pointer;
  width: 100%;
  .calendar-header {
    font-size: 16px;
  }
}
  td {
    color: #000000d9;
    margin: 0 4px;
    padding: 4px 8px 0;
    border: 0;
    border-bottom: 2px solid #f0f0f0;
    border-radius: 0;

    &.today {
      border-color: #1890ff;
      background-color: #e6f7ff;
    }
  }
</style>