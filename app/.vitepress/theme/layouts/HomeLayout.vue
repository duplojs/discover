<script setup lang="ts">
import TheVersus from "../components/TheVersus.vue";
import * as HomeExample from "@/examples/home";
</script>

<template>
	<div class="home w-full p-5 flex flex-col items-center">
		<div class="w-full max-w-300 flex flex-col items-center">
			<section class="w-full flex items-center gap-2 lg:h-80 flex-col lg:flex-row-reverse">
				<div class="lg:basis-1/2 h-40 lg:h-full flex justify-center">
					<img
						src="/images/logo.svg"
						class="h-full!"
					/>
				</div>

				<div class="lg:basis-1/2 gap-1 flex flex-col items-center lg:items-stretch">
					<h1 class="text-4xl! lg:text-6xl! font-bold!">
						DuploJS
					</h1>

					<h2 class="text-4xl! lg:text-6xl! text-center lg:text-left">
						Build your project with the good brick.
					</h2>

					<p class="lg:text-2xl text-center lg:text-left">
						Functional, Robust, and DX TypeScript ecosystem.
					</p>
				</div>
			</section>

			<section>
				<a href="https://utils.duplojs.dev">@duplojs/utils</a>

				<a href="https://server-utils.duplojs.dev">@duplojs/server-utils</a>

				<a href="https://http.duplojs.dev">@duplojs/http</a>

				<a href="https://form.duplojs.dev">@duplojs/from</a>

				<a href="https://json-web-token.duplojs.dev">@duplojs/json-web-token</a>

				<a href="https://playwright.duplojs.dev">@duplojs/playwright</a>
			</section>

			<TheVersus>
				<template #other>
					<HomeExample.UFArrayMinElementO />
				</template>

				<template #duplojs>
					<HomeExample.UFArrayMinElementD />
				</template>
			</TheVersus>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.home {
	font-family: var(--vp-font-family-base);
}
</style>
