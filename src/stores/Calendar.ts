import { defineStore } from 'pinia'

export const useCalendarStore = defineStore({
  id: 'calendar',
  state: () => ({
    day: new Date().getDate(),
    today:
      new Date().getDate() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getFullYear(),
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  }),
  getters: {
    getYear: (state) => state.year,
    getMonth: (state) => state.month,
    getMonthString: (state) => (state.month + 1).toString().padStart(2, '0'),
    getToday: (state) => state.today,
    getDay: (state) => state.day
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
