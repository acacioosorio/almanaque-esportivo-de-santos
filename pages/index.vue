<script setup>
import { useAsyncData } from 'nuxt/app';

const { data: categorias } = useAsyncData(() => {
	return $fetch('/api/categories');
});
</script>

<template>
	<div>
		<ul>
			<li v-for="categoria in categorias" :key="categoria.id">
				<nuxt-link :to="'/content/' + categoria.id">{{ categoria.nome }}</nuxt-link>
			</li>
		</ul>
	</div>
</template>
