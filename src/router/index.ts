import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import MonthCalendar from '../views/MonthCalendar.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/month',
      name: 'month',
      component: MonthCalendar
    }
  ]
})

export default router
