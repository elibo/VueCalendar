import { defineStore } from 'pinia'

export const useCalendarStore = defineStore({
  id: 'calendar',
  state: () => ({
    today:
      new Date().getDate() +
      ":" +
      new Date().getMonth() +
      ":" +
      new Date().getFullYear(),
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  }),
  getters: {
    getYear: (state) => state.year,
    getMonth: (state) => state.month,
    getToday: (state) => state.today
  },
  actions: {
    increment() {
      this.year++;
    },
    decrement() {
      this.year--;
    },
    setMonth(month: number) {
      this.month = month;
    }
  }
})
