<script setup lang="ts">
import HomePackageLink from "./components/HomePackageLink.vue";
import HomeSection from "./components/HomeSection.vue";
import HomeVersusCarousel from "./components/HomeVersusCarousel.vue";
import * as HomeExample from "@/examples/home";

const ecosystemColumns = [
	[
		{
			label: "@duplojs/utils",
			href: "https://utils.duplojs.dev",
		},
		{
			label: "@duplojs/server-utils",
			href: "https://server-utils.duplojs.dev",
		},
		{
			label: "@duplojs/http",
			href: "https://http.duplojs.dev",
		},
	],
	[
		{
			label: "@duplojs/from",
			href: "https://form.duplojs.dev",
		},
		{
			label: "@duplojs/json-web-token",
			href: "https://json-web-token.duplojs.dev",
		},
		{
			label: "@duplojs/playwright",
			href: "https://playwright.duplojs.dev",
		},
	],
];

const exampleSections = [
	{
		id: "clean",
		eyebrow: "Clean",
		title: "Clean architecture examples",
		description: "Application and domain-oriented examples structured around clean architecture boundaries.",
		items: [
			{
				id: "clean-application",
				title: "Application",
				other: HomeExample.CleanApplicationO,
				duplojs: HomeExample.CleanApplicationD,
			},
			{
				id: "clean-domain",
				title: "Domain",
				other: HomeExample.CleanDomainO,
				duplojs: HomeExample.CleanDomainD,
			},
		],
	},
	{
		id: "command",
		eyebrow: "Command",
		title: "Command example",
		description: "Command-oriented composition with a direct comparison between a plain approach and the DuploJS variant.",
		items: [
			{
				id: "command-core",
				title: "Command",
				other: HomeExample.CommandO,
				duplojs: HomeExample.CommandD,
			},
		],
	},
	{
		id: "either",
		eyebrow: "Either",
		title: "Either flow examples",
		description: "Examples around fetch, file handling, and JWT-style flows grouped under the same error-handling family.",
		items: [
			{
				id: "either-fetch",
				title: "Fetch",
				other: HomeExample.EitherFetchO,
				duplojs: HomeExample.EitherFetchD,
			},
			{
				id: "either-file",
				title: "File",
				other: HomeExample.EitherFileO,
				duplojs: HomeExample.EitherFileD,
			},
			{
				id: "either-jwt",
				title: "JWT",
				other: HomeExample.EitherJwtO,
				duplojs: HomeExample.EitherJwtD,
			},
		],
	},
	{
		id: "form",
		eyebrow: "Form",
		title: "Form example",
		description: "A form-focused comparison between the existing stack and the DuploJS-flavoured implementation.",
		items: [
			{
				id: "form-core",
				title: "Form",
				other: HomeExample.FormO,
				duplojs: HomeExample.FormD,
			},
		],
	},
	{
		id: "http",
		eyebrow: "HTTP",
		title: "HTTP examples",
		description: "HTTP client and route patterns compared side by side with the DuploJS approach.",
		items: [
			{
				id: "http-client",
				title: "Client",
				other: HomeExample.HttpClientO,
				duplojs: HomeExample.HttpClientD,
			},
			{
				id: "http-route",
				title: "Route",
				other: HomeExample.HttpRouteO,
				duplojs: HomeExample.HttpRouteD,
			},
		],
	},
	{
		id: "utils-function",
		eyebrow: "Utils Function",
		title: "Utility function examples",
		description: "Small focused helpers where the API surface and typing gains of DuploJS are easiest to compare.",
		items: [
			{
				id: "utils-array-min-element",
				title: "Array min element",
				other: HomeExample.UFArrayMinElementO,
				duplojs: HomeExample.UFArrayMinElementD,
			},
			{
				id: "utils-entries",
				title: "Entries",
				other: HomeExample.UFEntriesO,
				duplojs: HomeExample.UFEntriesD,
			},
			{
				id: "utils-group-by",
				title: "Group by",
				other: HomeExample.UFGroupByO,
				duplojs: HomeExample.UFGroupByD,
			},
			{
				id: "utils-map-tuple",
				title: "Map tuple",
				other: HomeExample.UFMapTupleO,
				duplojs: HomeExample.UFMapTupleD,
			},
			{
				id: "utils-reduce",
				title: "Reduce",
				other: HomeExample.UFReduceO,
				duplojs: HomeExample.UFReduceD,
			},
		],
	},
] as const;
</script>

<template>
	<div class="w-full bg-[linear-gradient(180deg,#fffef7_0%,#ffffff_32%,#f8f8f8_100%)] px-4 py-6 sm:px-6 lg:px-8">
		<div class="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
			<section class="relative flex w-full flex-col items-center gap-6 overflow-hidden rounded-[32px] border border-black/6 bg-white/88 px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:min-h-[26rem] lg:flex-row-reverse lg:px-10 lg:py-10">
				<div class="pointer-events-none absolute left-[-4rem] top-[-5rem] h-44 w-44 rounded-full bg-zinc-200/60 blur-3xl" />

				<div class="pointer-events-none absolute right-[-3rem] top-[-3rem] h-48 w-48 rounded-full bg-[#ffd73f]/35 blur-3xl" />

				<div class="pointer-events-none absolute bottom-[-5rem] left-[22%] h-40 w-40 rounded-full bg-[#ffeb53]/20 blur-3xl" />

				<div class="relative flex h-48 justify-center lg:h-full lg:basis-1/2">
					<div class="absolute inset-x-[12%] top-[10%] h-[72%] rounded-full bg-[radial-gradient(circle,rgba(255,215,63,0.42),rgba(255,215,63,0))] blur-3xl" />

					<img
						src="/images/logo.svg"
						class="relative z-10 h-full drop-shadow-[0_24px_36px_rgba(138,106,5,0.22)]"
					/>
				</div>

				<div class="relative flex flex-col items-center gap-4 text-center lg:basis-1/2 lg:items-start lg:text-left">
					<span class="inline-flex items-center gap-2 self-center rounded-full border border-[#ebc32b]/35 bg-[#fff7cc] px-3 py-1.5 text-[11px] leading-none font-extrabold uppercase tracking-[0.22em] text-[#8a6a05] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] lg:self-start">
						<span class="h-2 w-2 rounded-full bg-[#ffd73f]" />
						Build with the right brick
					</span>

					<h1 class="text-5xl! font-extrabold! tracking-[-0.05em] text-zinc-950 sm:text-6xl! lg:text-7xl!">
						DuploJS
					</h1>

					<h2 class="max-w-[12ch] text-3xl! font-semibold! leading-[0.95] text-zinc-800 sm:text-4xl! lg:text-6xl!">
						Build your project with the good brick.
					</h2>

					<p class="max-w-[38rem] text-base leading-7 text-zinc-600 sm:text-lg lg:text-xl">
						Functional, Robust, and DX TypeScript ecosystem.
					</p>

					<div class="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
						<a
							href="https://github.com/duplojs"
							class="inline-flex items-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-zinc-50! shadow-[0_12px_28px_rgba(15,23,42,0.22)] transition hover:bg-black"
						>
							Explore the project
						</a>

						<a
							href="https://www.npmjs.com/search?q=%40duplojs"
							class="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:border-[#ebc32b]/45 hover:text-[#8a6a05]"
						>
							Browse packages
						</a>
					</div>
				</div>
			</section>

			<HomeSection
				eyebrow="Ecosystem"
				title="Bricks of the ecosystem"
				description="Currently available building blocks of the ecosystem."
			>
				<div class="grid w-full gap-4 lg:grid-cols-2">
					<ul
						v-for="(column, index) in ecosystemColumns"
						:key="index"
						class="flex flex-col gap-3"
					>
						<HomePackageLink
							v-for="item in column"
							:key="item.href"
							:href="item.href"
							:label="item.label"
						/>
					</ul>
				</div>
			</HomeSection>

			<HomeSection
				v-for="section in exampleSections"
				:key="section.id"
				:eyebrow="section.eyebrow"
				:title="section.title"
				:description="section.description"
			>
				<HomeVersusCarousel :items="section.items" />
			</HomeSection>
		</div>
	</div>
</template>
