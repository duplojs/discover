<script setup lang="ts">
import { computed, ref, type Component } from "vue";
import TheVersus from "../../../components/TheVersus.vue";

interface CarouselItem {
	id: string;
	title: string;
	description?: string;
	other: Component;
	duplojs: Component;
	otherEmoji?: string;
	duplojsEmoji?: string;
}

const props = defineProps<{
	items: readonly CarouselItem[];
}>();

const activeIndex = ref(0);

const activeItem = computed(() => props.items[activeIndex.value]);
const hasNavigation = computed(() => props.items.length > 1);
const tabListStyle = computed(() => ({
	gridTemplateColumns: `repeat(${props.items.length}, minmax(0, 1fr))`,
}));

function setActiveIndex(index: number) {
	activeIndex.value = index;
}
</script>

<template>
	<div class="flex flex-col gap-3">
		<div
			v-if="activeItem"
			class="flex flex-col gap-3"
		>
			<div class="flex flex-col gap-2">
				<span class="text-[11px] font-extrabold uppercase tracking-[0.22em] text-zinc-500">
					Example
				</span>

				<h3 class="text-xl font-bold text-zinc-950 sm:text-2xl">
					{{ activeItem.title }}
				</h3>

				<p
					v-if="activeItem.description"
					class="max-w-[42rem] text-sm leading-6 text-zinc-600 sm:text-base"
				>
					{{ activeItem.description }}
				</p>
			</div>
		</div>

		<div
			v-if="hasNavigation"
			class="grid w-full gap-2 rounded-[22px] border border-zinc-200/80 bg-white/88 p-2 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
			:style="tabListStyle"
			role="tablist"
			aria-label="Example tabs"
		>
			<button
				v-for="(item, index) in items"
				:key="item.id"
				type="button"
				role="tab"
				:aria-selected="index === activeIndex"
				class="inline-flex min-w-0 items-center justify-center rounded-[16px] border px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.14em] transition"
				:class="index === activeIndex
					? 'border-[#ebc32b]/50 bg-[#fff7cc] text-[#8a6a05] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_18px_rgba(235,195,43,0.18)]'
					: 'border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-800'"
				@click="setActiveIndex(index)"
			>
				{{ item.title }}
			</button>
		</div>

		<TheVersus
			v-if="activeItem"
			class="w-full"
			:other-emoji="activeItem.otherEmoji"
			:duplojs-emoji="activeItem.duplojsEmoji"
		>
			<template #other>
				<component :is="activeItem.other" />
			</template>

			<template #duplojs>
				<component :is="activeItem.duplojs" />
			</template>
		</TheVersus>
	</div>
</template>
