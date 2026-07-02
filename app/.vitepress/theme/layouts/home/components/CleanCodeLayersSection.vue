<script setup lang="ts">
import { computed, ref } from "vue";

type LayerId = "domain" | "application" | "infrastructure";

interface LayerFile {
	name: string;
	placeholder: string;
}

type LayerFiles = [LayerFile, ...LayerFile[]];

interface LayerContent {
	label: string;
	description: string;
	files: LayerFiles;
}

const layerOrder: LayerId[] = [
	"infrastructure",
	"application",
	"domain",
];

const layers: Record<LayerId, LayerContent> = {
	domain: {
		label: "Domain",
		description: "Define business concepts and rules without depending on external tools.",
		files: [
			{
				name: "user.entity.ts",
				placeholder: "// Domain layer example\n// Replace this placeholder with real code",
			},
			{
				name: "user.value-object.ts",
				placeholder: "// Domain layer example\n// Replace this placeholder with real code",
			},
			{
				name: "user.errors.ts",
				placeholder: "// Domain layer example\n// Replace this placeholder with real code",
			},
		],
	},
	application: {
		label: "Application",
		description: "Orchestrate use cases with explicit inputs, outputs and errors.",
		files: [
			{
				name: "create-user.usecase.ts",
				placeholder: "// Application layer example\n// Replace this placeholder with real code",
			},
			{
				name: "create-user.input.ts",
				placeholder: "// Application layer example\n// Replace this placeholder with real code",
			},
			{
				name: "create-user.result.ts",
				placeholder: "// Application layer example\n// Replace this placeholder with real code",
			},
		],
	},
	infrastructure: {
		label: "Infrastructure",
		description: "Connect your application to databases, HTTP clients and external services.",
		files: [
			{
				name: "user.repository.ts",
				placeholder: "// Infrastructure layer example\n// Replace this placeholder with real code",
			},
			{
				name: "database-user.repository.ts",
				placeholder: "// Infrastructure layer example\n// Replace this placeholder with real code",
			},
			{
				name: "mail-service.ts",
				placeholder: "// Infrastructure layer example\n// Replace this placeholder with real code",
			},
		],
	},
};

const activeLayerId = ref<LayerId>("domain");
const activeFileIndex = ref(0);
const activeLayer = computed(() => layers[activeLayerId.value]);
const activeFile = computed(() => activeLayer.value.files[activeFileIndex.value] ?? activeLayer.value.files[0]);
const activePlaceholderLines = computed(() => activeFile.value.placeholder.split("\n"));

function selectLayer(layerId: LayerId) {
	activeLayerId.value = layerId;
	activeFileIndex.value = 0;
}

function selectFile(fileIndex: number) {
	activeFileIndex.value = fileIndex;
}
</script>

<template>
	<section
		id="clean-code-layers"
		class="clean-code-layers"
	>
		<div class="clean-code-layers__inner">
			<div class="clean-code-layers__copy">
				<p class="clean-code-layers__eyebrow">
					<span aria-hidden="true" />

					Clean architecture
				</p>

				<h2 class="clean-code-layers__title">
					Explore code by layer
				</h2>

				<p class="clean-code-layers__intro">
					DuploJS helps separate business rules, application flows and infrastructure details into explicit, readable layers. Explore each layer and see how the code stays predictable from domain to runtime.
				</p>

				<div
					class="clean-code-layers__diagram"
					aria-label="Application layers"
				>
					<div
						v-for="layerId in layerOrder"
						:key="`${layerId}-box`"
						class="clean-code-layers__diagram-box"
						:class="[
							`clean-code-layers__diagram-box--${layerId}`,
							{ 'clean-code-layers__diagram-box--active': activeLayerId === layerId },
						]"
						aria-hidden="true"
					/>

					<button
						v-for="layerId in layerOrder"
						:key="layerId"
						class="clean-code-layers__diagram-button"
						:class="[
							`clean-code-layers__diagram-button--${layerId}`,
							{ 'clean-code-layers__diagram-button--active': activeLayerId === layerId },
						]"
						type="button"
						:aria-pressed="activeLayerId === layerId"
						@click="selectLayer(layerId)"
					>
						<span>{{ layers[layerId].label }}</span>
					</button>
				</div>

				<div class="clean-code-layers__selected">
					<span>{{ activeLayer.label }}</span>

					<p>{{ activeLayer.description }}</p>
				</div>
			</div>

			<div class="clean-code-layers__viewer">
				<div class="clean-code-layers__viewer-top">
					<span
						class="clean-code-layers__viewer-dots"
						aria-hidden="true"
					>
						<span />

						<span />

						<span />
					</span>

					<strong>{{ activeFile.name }}</strong>

					<span class="clean-code-layers__viewer-badge">
						{{ activeLayer.label }}
					</span>
				</div>

				<div
					class="clean-code-layers__tabs"
					role="tablist"
					aria-label="Layer files"
				>
					<button
						v-for="(file, fileIndex) in activeLayer.files"
						:key="file.name"
						class="clean-code-layers__tab"
						:class="{ 'clean-code-layers__tab--active': activeFileIndex === fileIndex }"
						type="button"
						role="tab"
						:aria-selected="activeFileIndex === fileIndex"
						@click="selectFile(fileIndex)"
					>
						{{ file.name }}
					</button>
				</div>

				<div
					:key="`${activeLayerId}-${activeFile.name}`"
					class="clean-code-layers__code"
				>
					<code>
						<span
							v-for="(line, lineIndex) in activePlaceholderLines"
							:key="`${activeFile.name}-${lineIndex}`"
							class="clean-code-layers__code-line"
						>
							<span class="clean-code-layers__line-number">
								{{ lineIndex + 1 }}
							</span>

							<span class="clean-code-layers__line-content">
								{{ line }}
							</span>
						</span>
					</code>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.clean-code-layers {
	--layers-bg: #FFFDF5;
	--layers-bg-warm: #F7F4EA;
	--layers-surface: #FFFFFF;
	--layers-text-primary: #111111;
	--layers-text-secondary: #4B463D;
	--layers-text-muted: #7A7367;
	--layers-border: rgba(17, 17, 17, 0.10);
	--layers-border-strong: rgba(17, 17, 17, 0.16);
	--layers-brand: var(--color-brand-primary);
	--layers-brand-strong: #BD8E20;
	--layers-brand-soft: rgba(247, 203, 61, 0.16);
	--layers-brand-glow: rgba(247, 203, 61, 0.26);

	position: relative;
	z-index: 2;
	overflow: hidden;
	padding: 118px clamp(20px, 4vw, 64px) 126px;
	border-radius: 0;
	background:
		radial-gradient(circle at 82% 8%, rgba(247, 203, 61, 0.11), transparent 28%),
		linear-gradient(180deg, var(--layers-bg-warm) 0%, var(--layers-bg) 100%);
	color: var(--layers-text-primary);
	box-shadow: none;
}

.clean-code-layers::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background-image:
		linear-gradient(rgba(17, 17, 17, 0.035) 1px, transparent 1px),
		linear-gradient(90deg, rgba(17, 17, 17, 0.035) 1px, transparent 1px);
	background-position: center top;
	background-size: 72px 72px;
	mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.42), transparent 74%);
}

.clean-code-layers::after {
	display: none;
}

.clean-code-layers__inner {
	position: relative;
	z-index: 1;
	display: grid;
	grid-template-columns: minmax(360px, 0.72fr) minmax(0, 1fr);
	align-items: center;
	gap: clamp(44px, 6vw, 92px);
	width: min(100%, 1480px);
	margin: 0 auto;
}

.clean-code-layers__copy {
	min-width: 0;
}

.clean-code-layers__eyebrow {
	display: inline-flex;
	align-items: center;
	gap: 14px;
	margin: 0 0 26px;
	color: var(--layers-brand-strong);
	font-weight: 820;
	font-size: 0.88rem;
	line-height: 1.2;
	letter-spacing: 0.18em;
	text-transform: uppercase;
}

.clean-code-layers__eyebrow span {
	display: block;
	width: 2px;
	height: 28px;
	background: var(--layers-brand);
	box-shadow: 0 0 18px var(--layers-brand-glow);
}

.clean-code-layers__title {
	max-width: 640px;
	margin: 0;
	color: var(--layers-text-primary);
	font-weight: 840;
	font-size: clamp(3rem, 2.36rem + 2vw, 4.25rem);
	line-height: 1.02;
	letter-spacing: 0;
	text-wrap: balance;
}

.clean-code-layers__intro {
	max-width: 640px;
	margin: 26px 0 0;
	color: var(--layers-text-secondary);
	font-size: clamp(1.04rem, 0.98rem + 0.26vw, 1.18rem);
	line-height: 1.62;
}

.clean-code-layers__diagram {
	position: relative;
	width: min(100%, 560px);
	aspect-ratio: 1.45;
	margin-top: 42px;
}

.clean-code-layers__diagram-box,
.clean-code-layers__diagram-button {
	position: absolute;
	border-radius: 18px;
	transition:
		background-color 180ms ease,
		border-color 180ms ease,
		box-shadow 180ms ease,
		color 180ms ease,
		transform 180ms ease;
}

.clean-code-layers__diagram-box {
	pointer-events: none;
	border: 1px solid var(--layers-border);
	background:
		linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(251, 248, 239, 0.78)),
		var(--layers-surface);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.78);
}

.clean-code-layers__diagram-box--active {
	border-color: rgba(247, 203, 61, 0.9);
	background:
		linear-gradient(180deg, rgba(247, 203, 61, 0.18), rgba(255, 255, 255, 0.86)),
		var(--layers-surface);
	box-shadow:
		0 18px 44px rgba(17, 17, 17, 0.07),
		0 0 34px var(--layers-brand-glow),
		inset 0 1px 0 rgba(255, 255, 255, 0.88);
}

.clean-code-layers__diagram-button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: 1px solid transparent;
	background: rgba(255, 255, 255, 0.74);
	color: var(--layers-text-secondary);
	font-weight: 800;
	font-size: 1.03rem;
	line-height: 1;
	cursor: pointer;
	box-shadow: 0 10px 28px rgba(17, 17, 17, 0.05);
}

.clean-code-layers__diagram-button:hover,
.clean-code-layers__diagram-button:focus-visible {
	border-color: rgba(189, 142, 32, 0.42);
	background: rgba(255, 255, 255, 0.94);
	color: var(--layers-text-primary);
	transform: translateY(-2px);
}

.clean-code-layers__diagram-button--active {
	border-color: rgba(247, 203, 61, 0.9);
	background: rgba(247, 203, 61, 0.2);
	color: var(--layers-text-primary);
	box-shadow:
		0 12px 34px rgba(17, 17, 17, 0.07),
		0 0 28px var(--layers-brand-glow);
}

.clean-code-layers__diagram-box--infrastructure {
	inset: 0;
	z-index: 1;
}

.clean-code-layers__diagram-box--application {
	inset: 86px 52px 50px;
	z-index: 2;
}

.clean-code-layers__diagram-box--domain {
	inset: 170px 112px 92px;
	z-index: 3;
	border-radius: 14px;
}

.clean-code-layers__diagram-button--infrastructure {
	inset: 20px 24px auto;
	z-index: 4;
	height: 50px;
}

.clean-code-layers__diagram-button--application {
	inset: 106px 76px auto;
	z-index: 5;
	height: 50px;
}

.clean-code-layers__diagram-button--domain {
	inset: 170px 112px 92px;
	z-index: 6;
	border-radius: 14px;
}

.clean-code-layers__selected {
	display: grid;
	gap: 10px;
	max-width: 560px;
	min-height: 112px;
	margin-top: 24px;
	padding: 20px 22px;
	border: 1px solid var(--layers-border);
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.68);
	box-shadow: 0 18px 48px rgba(17, 17, 17, 0.045);
}

.clean-code-layers__selected span {
	color: var(--layers-brand-strong);
	font-weight: 820;
	font-size: 0.9rem;
	line-height: 1;
	text-transform: uppercase;
}

.clean-code-layers__selected p {
	margin: 0;
	color: var(--layers-text-secondary);
	font-size: 1rem;
	line-height: 1.55;
}

.clean-code-layers__viewer {
	min-width: 0;
	overflow: hidden;
	border: 1px solid var(--color-border-subtle);
	border-radius: 18px;
	background:
		linear-gradient(180deg, rgba(18, 22, 28, 0.96), rgba(8, 10, 13, 0.96)),
		var(--color-bg-surface);
	box-shadow:
		0 28px 86px rgba(8, 10, 13, 0.34),
		0 0 50px rgba(247, 203, 61, 0.08);
}

.clean-code-layers__viewer-top {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr) auto;
	align-items: center;
	gap: 18px;
	min-height: 58px;
	padding: 0 20px;
	border-bottom: 1px solid var(--color-border-subtle);
	background: rgba(5, 6, 8, 0.48);
}

.clean-code-layers__viewer-top strong {
	min-width: 0;
	overflow: hidden;
	color: var(--color-text-primary);
	font-weight: 680;
	font-size: 0.95rem;
	line-height: 1.2;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.clean-code-layers__viewer-dots {
	display: inline-flex;
	gap: 7px;
}

.clean-code-layers__viewer-dots span {
	width: 10px;
	height: 10px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.22);
}

.clean-code-layers__viewer-dots span:first-child {
	background: #F97373;
}

.clean-code-layers__viewer-dots span:nth-child(2) {
	background: #F7CB3D;
}

.clean-code-layers__viewer-dots span:last-child {
	background: #61D394;
}

.clean-code-layers__viewer-badge {
	display: inline-flex;
	align-items: center;
	min-height: 30px;
	padding: 0 12px;
	border: 1px solid var(--color-brand-border);
	border-radius: 999px;
	background: var(--color-brand-soft);
	color: var(--color-brand-primary);
	font-weight: 760;
	font-size: 0.8rem;
	line-height: 1;
}

.clean-code-layers__tabs {
	display: flex;
	gap: 2px;
	overflow-x: auto;
	padding: 12px 14px 0;
	border-bottom: 1px solid var(--color-border-subtle);
	scrollbar-width: thin;
}

.clean-code-layers__tab {
	flex: 0 0 auto;
	min-height: 42px;
	padding: 0 16px;
	border: 1px solid transparent;
	border-bottom: 0;
	border-radius: 8px 8px 0 0;
	background: transparent;
	color: var(--color-text-muted);
	font-weight: 650;
	font-size: 0.9rem;
	line-height: 1;
	cursor: pointer;
	transition:
		background-color 160ms ease,
		border-color 160ms ease,
		color 160ms ease;
}

.clean-code-layers__tab:hover,
.clean-code-layers__tab:focus-visible {
	background: rgba(255, 255, 255, 0.04);
	color: var(--color-text-secondary);
}

.clean-code-layers__tab--active {
	border-color: var(--color-border-subtle);
	background: rgba(247, 203, 61, 0.09);
	color: var(--color-brand-primary);
	box-shadow: inset 0 2px 0 var(--color-brand-primary);
}

.clean-code-layers__code {
	min-height: 420px;
	margin: 0;
	padding: 28px 0 34px;
	overflow-x: auto;
	background:
		linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
		var(--color-bg-surface);
	background-size: 72px 72px;
	color: var(--color-text-secondary);
	font-size: 0.98rem;
	line-height: 1.7;
}

.clean-code-layers__code code {
	display: block;
	min-width: max-content;
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
	animation: clean-code-layers-fade 180ms ease;
}

.clean-code-layers__code-line {
	display: grid;
	grid-template-columns: 62px minmax(0, 1fr);
	min-height: 27px;
	padding-right: 26px;
}

.clean-code-layers__line-number {
	color: rgba(126, 122, 112, 0.72);
	text-align: right;
	user-select: none;
}

.clean-code-layers__line-content {
	padding-left: 24px;
	color: var(--color-text-secondary);
}

@keyframes clean-code-layers-fade {
	from {
		opacity: 0.56;
		transform: translateY(4px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@media (max-width: 1160px) {
	.clean-code-layers__inner {
		grid-template-columns: 1fr;
		align-items: start;
	}

	.clean-code-layers__copy,
	.clean-code-layers__title,
	.clean-code-layers__intro,
	.clean-code-layers__diagram,
	.clean-code-layers__selected {
		max-width: 760px;
	}

	.clean-code-layers__viewer {
		width: 100%;
	}
}

@media (max-width: 720px) {
	.clean-code-layers {
		padding: 78px 20px 86px;
		border-radius: 0;
	}

	.clean-code-layers__eyebrow {
		margin-bottom: 20px;
		font-size: 0.82rem;
		letter-spacing: 0.14em;
	}

	.clean-code-layers__title {
		font-size: 2.75rem;
		line-height: 1.06;
	}

	.clean-code-layers__intro {
		margin-top: 22px;
		font-size: 1rem;
	}

	.clean-code-layers__diagram {
		aspect-ratio: 1.08;
		margin-top: 34px;
	}

	.clean-code-layers__diagram-box,
	.clean-code-layers__diagram-button {
		border-radius: 14px;
		font-size: 0.94rem;
	}

	.clean-code-layers__diagram-box--application {
		inset: 72px 28px 42px;
	}

	.clean-code-layers__diagram-box--domain {
		inset: 146px 62px 74px;
	}

	.clean-code-layers__diagram-button--infrastructure {
		inset: 16px 18px auto;
		height: 44px;
	}

	.clean-code-layers__diagram-button--application {
		inset: 88px 46px auto;
		height: 44px;
	}

	.clean-code-layers__diagram-button--domain {
		inset: 146px 62px 74px;
	}

	.clean-code-layers__selected {
		min-height: 0;
		padding: 18px;
	}

	.clean-code-layers__viewer {
		border-radius: 14px;
	}

	.clean-code-layers__viewer-top {
		grid-template-columns: auto minmax(0, 1fr);
		gap: 14px;
		padding: 0 16px;
	}

	.clean-code-layers__viewer-badge {
		grid-column: 1 / -1;
		width: max-content;
		margin-bottom: 14px;
	}

	.clean-code-layers__tab {
		min-height: 40px;
		padding: 0 13px;
		font-size: 0.84rem;
	}

	.clean-code-layers__code {
		min-height: 300px;
		font-size: 0.9rem;
	}

	.clean-code-layers__code-line {
		grid-template-columns: 48px minmax(0, 1fr);
		padding-right: 18px;
	}

	.clean-code-layers__line-content {
		padding-left: 18px;
	}
}

@media (max-width: 440px) {
	.clean-code-layers__title {
		font-size: 2.34rem;
	}

	.clean-code-layers__diagram-box--application {
		inset: 70px 22px 40px;
	}

	.clean-code-layers__diagram-box--domain {
		inset: 142px 42px 70px;
	}

	.clean-code-layers__diagram-button--application {
		inset: 86px 38px auto;
	}

	.clean-code-layers__diagram-button--domain {
		inset: 142px 42px 70px;
	}
}
</style>
