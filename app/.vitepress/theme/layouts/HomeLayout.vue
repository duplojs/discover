<script setup lang="ts">
import TheVersus from "../components/TheVersus.vue";
import * as HomeExample from "@/examples/home";
</script>

<template>
	<div class="home w-full p-5 flex flex-col items-center">
		<div class="w-full max-w-300 flex flex-col items-center gap-5">
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

			<section class="w-full flex flex-col gap-1">
				<h2 class="text-2xl!">
					Brick of the ecosystem :
				</h2>

				<div class="w-full flex flex-col gap-1 lg:flex-row">
					<ul class="list-disc! pl-5! lg:basis-1/2">
						<li>
							<a href="https://utils.duplojs.dev">@duplojs/utils</a>
						</li>

						<li>
							<a href="https://server-utils.duplojs.dev">@duplojs/server-utils</a>
						</li>

						<li>
							<a href="https://http.duplojs.dev">@duplojs/http</a>
						</li>
					</ul>

					<ul class="list-disc! pl-2 lg:basis-1/2">
						<li>
							<a href="https://form.duplojs.dev">@duplojs/from</a>
						</li>

						<li>
							<a href="https://json-web-token.duplojs.dev">@duplojs/json-web-token</a>
						</li>

						<li>
							<a href="https://playwright.duplojs.dev">@duplojs/playwright</a>
						</li>
					</ul>
				</div>
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
