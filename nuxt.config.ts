// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	css: ['~/assets/styles/main.scss'],
	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"],
			},
		]
	],
	pinia: {
		storesDirs: ["./stores/**"],
	},
})