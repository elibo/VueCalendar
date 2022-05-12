<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useCalendarStore } from "@/stores/Calendar";
import { MONTHS } from "../helpers/AppConstants";
import Modal from "../components/Modal.vue";
import CellCalendar from "../components/Cell.vue";

import { getMonthCalendar } from "../helpers/CalendarHelper";

const store = useCalendarStore();

const showModal = ref(false);

const onClickCell = (day: number) => {
  showModal.value = true;
  store.day = day;
};
</script>

<template>
  <div class="month">
    <div>
      {{ MONTHS[store.month] }}
    </div>
    <tbody>
      <tr v-for="d in getMonthCalendar(store.month, store.year)" :key="{ d }">
        <td
          @click="onClickCell(x)"
          v-for="x in d.days"
          :key="{ x }"
          v-bind:class="{
            today:
              store.today === `${x + '-' + store.month + '-' + store.year}`,
          }"
        >
          <span class="number"> {{ x }} </span>
          <CellCalendar :day="x" />
        </td>
      </tr>
      <Modal
        v-if="showModal"
        :day="store.getDay"
        @close="(res) => (showModal = !res)"
      />
    </tbody>
  </div>
</template>

<style lang="scss">
.month {
  width: 100vw;
  margin: 1rem;
  td {
    cursor: pointer;
    color: #000000d9;
    margin: 0.5rem;
    padding: 1rem;
    border: 0;
    width: 5rem;
    height: 5rem;
    border-bottom: 2px solid #f0f0f0;
    border-radius: 0;

    &.today {
      border-color: #1890ff;
      background-color: #e6f7ff;
    }
    .number {
      font-size: 0.8rem;
      position: relative;
      top: -2.5rem;
      left: -0.6rem;
    }
  }
}
</style>