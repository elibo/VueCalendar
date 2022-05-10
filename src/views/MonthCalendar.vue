<script setup lang="ts">
import { useCalendarStore } from "@/stores/Calendar";
import { MONTHS } from "../helpers/AppConstants";
import { getMonthCalendar } from "../helpers/CalendarHelper";

const store = useCalendarStore()

</script>

<template>
<div class="month">
 <div >
      {{ MONTHS[store.month] }}
 </div>
    <tbody>
          <tr v-for="d in getMonthCalendar(store.month, store.year)" :key="{ d }">
            <td
              v-for="x in d.days"
              :key="{ x }"
              v-bind:class="{ today: store.today === `${x + ':' + store.month + ':' + store.year}` }"
            >
              {{ x }}
            </td>
          </tr>
        </tbody>
</div>
</template>

<style lang="scss">
.month{
  width: 100vw;
  margin:1rem;
  td {
    cursor:pointer;
    color: #000000d9;
    margin: 0.5rem;
    padding: 2rem;
    border: 0;
    border-bottom: 2px solid #f0f0f0;
    border-radius: 0;
    font-size: 2rem;

    &.today {
      border-color: #1890ff;
      background-color: #e6f7ff;
    }
  }
}

</style>