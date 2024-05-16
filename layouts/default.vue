<template>
	<div>

		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<span class="navbar-brand">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvGusdklr4lr9qaaFBMUmnEodneyEQ-qHTKMeXW83fA&s" alt="">
					Almanaque Esportivo de Santos
				</span>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav ms-auto mb-2 mb-md-0">
						<li class="nav-item">
							<router-link class="nav-link" to="/">Home</router-link>
						</li>
					</ul>
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