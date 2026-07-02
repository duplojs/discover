<script setup lang="ts">
import { computed } from "vue";
import type { VersusFileTab } from "@/data/versusExamples";

const props = withDefaults(
	defineProps<{
		title: string;
		badge: string;
		files: readonly VersusFileTab[];
		activeFileIndex: number;
		highlight?: boolean;
	}>(),
	{
		highlight: false,
	},
);

const emit = defineEmits<{
	selectFile: [fileIndex: number];
}>();

const activeFile = computed(() => props.files[props.activeFileIndex] ?? props.files[0]);

function selectFile(fileIndex: number) {
	emit("selectFile", fileIndex);
}
</script>

<template>
	<article
		class="comparison-code-window"
		:class="{ 'comparison-code-window--highlight': highlight }"
	>
		<header class="comparison-code-window__header">
			<div>
				<h3>{{ title }}</h3>

				<span>{{ badge }}</span>
			</div>
		</header>

		<div class="comparison-code-window__editor">
			<div class="comparison-code-window__topbar">
				<span
					class="comparison-code-window__dots"
					aria-hidden="true"
				>
					<span />

					<span />

					<span />
				</span>

				<strong v-if="activeFile">{{ activeFile.label }}</strong>
			</div>

			<div
				v-if="activeFile && props.files.length > 1"
				class="comparison-code-window__tabs"
				role="tablist"
				:aria-label="`${title} files`"
			>
				<button
					v-for="(file, fileIndex) in files"
					:key="file.id"
					class="comparison-code-window__tab"
					:class="{ 'comparison-code-window__tab--active': activeFileIndex === fileIndex }"
					type="button"
					role="tab"
					:aria-selected="activeFileIndex === fileIndex"
					@click="selectFile(fileIndex)"
				>
					{{ file.label }}
				</button>
			</div>

			<div
				v-if="activeFile"
				:key="activeFile.id"
				class="comparison-code-window__code"
			>
				<component
					:is="activeFile.component"
					class="comparison-code-window__markdown"
				/>
			</div>
		</div>
	</article>
</template>

<style scoped>
.comparison-code-window {
	min-width: 0;
	padding: 18px;
	border: 1px solid rgba(255, 255, 255, 0.09);
	border-radius: 16px;
	background:
		linear-gradient(180deg, rgba(18, 22, 28, 0.76), rgba(13, 16, 20, 0.88)),
		var(--color-bg-surface);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
	transition:
		border-color 180ms ease,
		box-shadow 180ms ease,
		transform 180ms ease;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.comparison-code-window--highlight {
	border-color: rgba(247, 203, 61, 0.34);
	box-shadow:
		0 0 38px rgba(247, 203, 61, 0.08),
		inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.comparison-code-window__header {
	margin-bottom: 16px;
}

.comparison-code-window__header div {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}

.comparison-code-window__header h3 {
	margin: 0;
	color: var(--color-text-primary);
	font-weight: 780;
	font-size: clamp(1.05rem, 0.98rem + 0.22vw, 1.18rem);
	line-height: 1.2;
	letter-spacing: 0;
}

.comparison-code-window__header span {
	display: inline-flex;
	align-items: center;
	min-height: 28px;
	padding: 0 10px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.035);
	color: var(--color-text-muted);
	font-weight: 760;
	font-size: 0.74rem;
	line-height: 1;
}

.comparison-code-window--highlight .comparison-code-window__header span {
	border-color: var(--color-brand-border);
	background: var(--color-brand-soft);
	color: var(--color-brand-primary);
}

.comparison-code-window__editor {
	overflow: hidden;
	border: 1px solid var(--color-border-subtle);
	border-radius: 13px;
	background: #050608;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}

.comparison-code-window__topbar {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr);
	align-items: center;
	gap: 14px;
	min-height: 50px;
	padding: 0 16px;
	border-bottom: 1px solid var(--color-border-subtle);
	background: rgba(5, 6, 8, 0.76);
}

.comparison-code-window__topbar strong {
	min-width: 0;
	overflow: hidden;
	color: var(--color-text-secondary);
	font-weight: 660;
	font-size: 0.88rem;
	line-height: 1.2;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.comparison-code-window__dots {
	display: inline-flex;
	gap: 7px;
}

.comparison-code-window__dots span {
	width: 9px;
	height: 9px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.2);
}

.comparison-code-window__dots span:first-child {
	background: #F97373;
}

.comparison-code-window__dots span:nth-child(2) {
	background: #F7CB3D;
}

.comparison-code-window__dots span:last-child {
	background: #61D394;
}

.comparison-code-window__tabs {
	display: flex;
	gap: 2px;
	overflow-x: auto;
	padding: 10px 12px 0;
	border-bottom: 1px solid var(--color-border-subtle);
	scrollbar-width: thin;
}

.comparison-code-window__tab {
	flex: 0 0 auto;
	min-height: 38px;
	padding: 0 13px;
	border: 1px solid transparent;
	border-bottom: 0;
	border-radius: 8px 8px 0 0;
	background: transparent;
	color: var(--color-text-muted);
	font: inherit;
	font-weight: 650;
	font-size: 0.82rem;
	line-height: 1;
	cursor: pointer;
	transition:
		background-color 160ms ease,
		border-color 160ms ease,
		color 160ms ease;
}

.comparison-code-window__tab:hover,
.comparison-code-window__tab:focus-visible {
	background: rgba(255, 255, 255, 0.045);
	color: var(--color-text-secondary);
	outline: 2px solid transparent;
}

.comparison-code-window__tab:focus-visible {
	box-shadow: 0 0 0 2px rgba(247, 203, 61, 0.34);
}

.comparison-code-window__tab--active {
	border-color: var(--color-border-subtle);
	background: rgba(247, 203, 61, 0.09);
	color: var(--color-brand-primary);
	box-shadow: inset 0 2px 0 var(--color-brand-primary);
}

.comparison-code-window__code {
	min-height: 310px;
	max-height: 1000px;
	overflow-x: auto;
	background:
		linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
		#07090C;
	background-size: 64px 64px;
	color: var(--color-text-secondary);
	font-size: 0.91rem;
	line-height: 1.7;
	flex-grow: 1;
}

.comparison-code-window__markdown {
	display: block;
	min-width: max-content;
	animation: comparison-code-window-fade 180ms ease;
}

.comparison-code-window__markdown[class*="language-"],
.comparison-code-window__markdown :deep(div[class*="language-"]) {
	margin: 0;
	border-radius: 0;
	background: transparent;
}

.comparison-code-window__markdown :deep(pre) {
	margin: 0;
	padding: 24px;
	background: transparent;
}

.comparison-code-window__markdown :deep(code) {
	font-size: inherit;
	line-height: 1.7;
}

.comparison-code-window__markdown :deep(.line) {
	min-height: 1.7em;
}

@keyframes comparison-code-window-fade {
	from {
		opacity: 0.58;
		transform: translateY(4px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@media (prefers-reduced-motion: reduce) {
	.comparison-code-window,
	.comparison-code-window__tab,
	.comparison-code-window__markdown {
		transition: none;
		animation: none;
	}
}

@media (max-width: 720px) {
	.comparison-code-window {
		padding: 14px;
		border-radius: 14px;
		display: auto;
	}

	.comparison-code-window__header div {
		align-items: flex-start;
	}

	.comparison-code-window__editor {
		display: auto;
		border-radius: 11px;
	}

	.comparison-code-window__topbar {
		min-height: 46px;
		padding: 0 14px;
	}

	.comparison-code-window__tab {
		min-height: 36px;
		padding: 0 12px;
		font-size: 0.79rem;
	}

	.comparison-code-window__code {
		min-height: 250px;
		font-size: 0.84rem;
	}

	.comparison-code-window__markdown :deep(pre) {
		padding: 20px 18px;
	}
}
</style>
