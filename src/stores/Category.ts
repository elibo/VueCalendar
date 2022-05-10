import { defineStore } from 'pinia'

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: ['']
    }),
    getters: {
        getCategories: (state) => state.categories,

    },
    actions: {
        addCategory(category: any) {
            this.categories.push(category)
        },
    }
})
