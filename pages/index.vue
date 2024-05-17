<script setup>
const categoriesStore = useCategoriesStore();
const { categoriesList } = storeToRefs(categoriesStore);

onMounted(() => {
	if(categoriesList.value.length <= 0) categoriesStore.fetchCategories();
})

</script>

<template>
	<div>
		<ul>
			<li v-for="categoria in categoriesList" :key="categoria.id">
				<nuxt-link :to="'/content/' + categoria.id">{{ categoria.id }} - {{ categoria.nome }}</nuxt-link>
			</li>
		</ul>
	</div>
</template>
