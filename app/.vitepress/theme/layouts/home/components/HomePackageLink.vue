<script setup lang="ts">
defineProps<{
	href: string;
	label: string;
}>();
</script>

<template>
	<li>
		<a
			:href="href"
			class="group flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-white/88 px-4 py-3 text-sm font-semibold text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:-translate-y-0.5 hover:border-[#ebc32b]/35 hover:text-zinc-950 hover:shadow-[0_16px_32px_rgba(15,23,42,0.07)]"
		>
			<span>{{ label }}</span>

			<span class="text-zinc-300 transition group-hover:text-[#ebc32b]">↗</span>
		</a>
	</li>
</template>
