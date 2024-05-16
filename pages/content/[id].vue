<script setup>
const { params } = useRoute();

const { data: content } = useAsyncData(() => {
	return $fetch(`/api/content/${params.id}`);
});

</script>

<template>

	<article class="card" v-for="details in content">
		<div class="card-body">
			<h1 class="h4">{{ details.titulo }}</h1>
			<p v-html="details.resumo"></p>
			<div v-html="details.texto"></div>
		</div>
	</article>
</template>
