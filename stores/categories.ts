import { defineStore } from "pinia";
import { useFetch } from '#imports';

export const useCategoriesStore = defineStore({
	id: "categories-store",
	state: () => {
		return {
			categoriesList: [] as any[],
			categoriesContent: [] as any[],
            selectedCategory: {},
		};
	},
	actions: {
		async fetchCategories() {
            let { data } = await useFetch('/api/categories');
            data.value.forEach(category => {
                this.categoriesList.push(category)
            });
		},
		async fetchCategoriesContent(id: string) {
			this.categoriesContent = [];
			
			let { data } = await useFetch(`/api/content/${id}`);
			data.value.forEach(content => {
                this.categoriesContent.push(content)
            });
			this.setSelectedCategory(id)
		},
        async setSelectedCategory(id: string) {
			console.log(this.categoriesList.find((category: any) => parseInt(category.id) === parseInt(id)))
            this.selectedCategory = this.categoriesList.find((category: any) => parseInt(category.id) === parseInt(id))
        }
	},
	getters: {
		getCategoriesList: (state) => state.categoriesList,
		getCategoriesContent: (state) => state.categoriesContent,
        getSelectedCategory: (state) => state.selectedCategory
	},
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot));
