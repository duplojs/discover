<script setup lang="ts">
withDefaults(
	defineProps<{
		eyebrow?: string;
		title: string;
		description?: string;
	}>(),
	{
		eyebrow: undefined,
		description: undefined,
	},
);
</script>

<template>
	<section class="relative w-full overflow-hidden rounded-[28px] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,244,245,0.88))] px-5 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8 lg:py-8">
		<div class="pointer-events-none absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-zinc-200/50 blur-3xl" />
		<div class="pointer-events-none absolute bottom-[-3rem] left-[-1rem] h-32 w-32 rounded-full bg-[#ffd73f]/18 blur-3xl" />

		<div
			v-if="eyebrow || title || description"
			class="mb-5 flex flex-col gap-2"
		>
			<span
				v-if="eyebrow"
				class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-zinc-500"
			>
				{{ eyebrow }}
			</span>

			<h2 class="text-2xl! font-bold! text-zinc-950 sm:text-3xl!">
				{{ title }}
			</h2>

			<p
				v-if="description"
				class="max-w-[48rem] text-sm leading-6 text-zinc-600 sm:text-base"
			>
				{{ description }}
			</p>
		</div>

		<slot />
	</section>
</template>
