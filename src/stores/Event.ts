import { defineStore } from 'pinia';

export interface Event {
    name: String,
    date: String,
    category: String
}

export interface EventsState {
    events: Array<Event>,
}

export const useEventStore = defineStore({
    id: 'event',
    state: () => (
        {
            events: []
        } as EventsState),
    getters: {
        getEvents: (state) => state.events,
        getEventsByDate: (state) => { return (date: string) => state.events.filter((ev) => ev.date === date) }
    },
    actions: {
        addEvent(event: Event) {
            this.events.push(event)
        },
        removeEvent(event: Event) {
            const ind = this.events.findIndex((e) => (e.name === event.name && e.date === event.date))
            this.events.splice(ind, 1);
        }
    }
})
