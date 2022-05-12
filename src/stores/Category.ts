import { defineStore } from 'pinia';

export interface CategoryState {
    categories: Array<String>,
}

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => (
        {
            categories: []
        } as CategoryState),
    getters: {
        getCategories: (state) => state.categories,

    },
    actions: {
        addCategory(category: any) {
            const ind = this.categories.findIndex(c => c.toLowerCase() === category.toLowerCase());
            if (ind === -1) {
                this.categories.push(category)
            }
        },
        removeCategory(index: number) {
            this.categories.splice(index, 1);
        }
    }
})
