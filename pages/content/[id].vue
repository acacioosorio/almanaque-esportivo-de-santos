<script setup>
const { params } = useRoute();
const categoriesStore = useCategoriesStore();

const { getSelectedCategory } = storeToRefs(categoriesStore);

const { data: content } = useAsyncData(() => {
	return $fetch(`/api/content/${params.id}`);
});

const teste = () => {
	categoriesStore.setSelectedCategory(params.id)
}

onMounted(() => {
	categoriesStore.fetchCategoriesContent(params.id);
})

</script>

<template>
	
	<h1 class="h4 mb-3">{{ getSelectedCategory.id }} - {{ getSelectedCategory.nome }}</h1>

	<article class="card mb-5" v-for="details in content">
		<div class="card-body">
			<h1 class="h4">{{ details.id }} - {{ details.titulo }}</h1>
			<p v-html="details.resumo"></p>
			<div v-html="details.texto"></div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
.card {
	border-width: 2px;
	border-color: #525252;
}

</style>