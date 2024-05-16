<script setup>
import { useAsyncData } from 'nuxt/app';
import { useFetch } from '#imports';

const categorias = ref([]);

const fetchCategories = async () => {
	try {
		let { data } = await useFetch('/api/categories');
		console.log(data)
		categorias.value = data;
	} catch (err) {
		console.log(err)
	}
}

onMounted(() => {
	fetchCategories()
})

</script>

<template>
	<div>
		<pre>
			{{ categorias }}
		</pre>
		<!-- <ul>
			<li v-for="categoria in categorias" :key="categoria.id">
				<nuxt-link :to="'/content/' + categoria.id">{{ categoria.nome }}</nuxt-link>
			</li>
		</ul> -->
	</div>
</template>
