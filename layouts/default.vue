<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const categoriesStore = useCategoriesStore();
const { categoriesList } = storeToRefs(categoriesStore);
const category = ref({});

onMounted(() => {
	if(categoriesList.value.length <= 0) categoriesStore.fetchCategories();
})

const changeRoute = () => {
	router.push('/content/' + category.value.id)
}

</script>

<template>
	<div>

		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				
				<span class="navbar-brand">
					<router-link to="/">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvGusdklr4lr9qaaFBMUmnEodneyEQ-qHTKMeXW83fA&s" alt="">
					</router-link>
					Almanaque Esportivo de Santos
				</span>

				<div class="row">
					<div class="col-40">
						<select class="form-select" v-model="category" @change="changeRoute()">
							<option :value="{}">Escolha uma categoria</option>
							<option v-for="category in categoriesList" :key="category.id" :value="category"> {{ category.nome }}</option>
						</select>
					</div>
				</div>
				
			</div>
		</nav>
		<main class="container pt-5">
			<slot />
		</main>
	</div>
</template>

<style lang="scss">
	.navbar-brand {
		img {
			max-height: 65px
		}
	}
</style>