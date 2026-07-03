<script setup lang="ts">
import { Box, ChevronRight, GitBranch, Server } from "@lucide/vue";
import { computed, markRaw, ref, type Component } from "vue";
import {
	ApplicationsPortsBook,
	ApplicationsPortsClient,
	ApplicationsUseCasesClientGiveBackBook,
	ClientMain,
	ClientSwagger,
	ClientTypesD,
	DomainsAggregatesClientGiveBackBook,
	DomainsAggregatesClientHaveBook,
	DomainsEntitiesBook,
	DomainsEntitiesClient,
	InfrastructureAdaptersIndex,
	InfrastructureAdaptersPortsBook,
	InfrastructureAdaptersPortsClient,
	InfrastructureCheckersBook,
	InfrastructureCheckersClient,
	InfrastructureRoutesClientGiveBackBook,
} from "@/examples/layers";

type LayerId = "domain" | "application" | "infrastructure";

interface LayerFile {
	label: string;
	component: Component;
}

type LayerFiles = [LayerFile, ...LayerFile[]];

interface LayerContent {
	label: string;
	description: string;
	diagramDescription: string;
	icon: Component;
	files: LayerFiles;
}

const layers: Record<LayerId, LayerContent> = {
	domain: {
		label: "Domain",
		description: "Define business concepts and rules without depending on external tools.",
		diagramDescription: "Define business concepts and rules.",
		icon: Box,
		files: [
			{
				label: "entities/book.ts",
				component: markRaw(DomainsEntitiesBook),
			},
			{
				label: "entities/client.ts",
				component: markRaw(DomainsEntitiesClient),
			},
			{
				label: "aggregates/clientGiveBackBook.ts",
				component: markRaw(DomainsAggregatesClientGiveBackBook),
			},
			{
				label: "aggregates/clientHaveBook.ts",
				component: markRaw(DomainsAggregatesClientHaveBook),
			},

		],
	},
	application: {
		label: "Application",
		description: "Orchestrate use cases with explicit inputs, outputs and errors.",
		diagramDescription: "Orchestrate use cases and application flows.",
		icon: GitBranch,
		files: [
			{
				label: "useCases/clientGiveBackBook.md",
				component: markRaw(ApplicationsUseCasesClientGiveBackBook),
			},
			{
				label: "ports/client.ts",
				component: markRaw(ApplicationsPortsClient),
			},
			{
				label: "ports/book.ts",
				component: markRaw(ApplicationsPortsBook),
			},
		],
	},
	infrastructure: {
		label: "Infrastructure",
		description: "Connect your application to routes, adapters, checkers and external services.",
		diagramDescription: "Connect to external systems and services.",
		icon: Server,
		files: [
			{
				label: "routes/clientGiveBack.ts",
				component: markRaw(InfrastructureRoutesClientGiveBackBook),
			},
			{
				label: "client/main.ts",
				component: markRaw(ClientMain),
			},
			{
				label: "client/types.d.ts",
				component: markRaw(ClientTypesD),
			},
			{
				label: "swagger.json",
				component: markRaw(ClientSwagger),
			},
			{
				label: "checkers/book.ts",
				component: markRaw(InfrastructureCheckersBook),
			},
			{
				label: "checkers/client.ts",
				component: markRaw(InfrastructureCheckersClient),
			},
			{
				label: "adapters/index.ts",
				component: markRaw(InfrastructureAdaptersIndex),
			},
			{
				label: "adapters/ports/book.ts",
				component: markRaw(InfrastructureAdaptersPortsBook),
			},
			{
				label: "adapters/ports/client.ts",
				component: markRaw(InfrastructureAdaptersPortsClient),
			},
		],
	},
};

const activeLayerId = ref<LayerId>("domain");
const activeFileIndex = ref(0);
const activeLayer = computed(() => layers[activeLayerId.value]);
const activeFile = computed(() => activeLayer.value.files[activeFileIndex.value] ?? activeLayer.value.files[0]);

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
						class="clean-code-layers__layer"
						:class="[
							'clean-code-layers__layer--infrastructure',
							{ 'clean-code-layers__layer--active': activeLayerId === 'infrastructure' },
						]"
					>
						<div class="clean-code-layers__layer-content">
							<button
								class="clean-code-layers__layer-button"
								:class="{ 'clean-code-layers__layer-button--active': activeLayerId === 'infrastructure' }"
								type="button"
								:aria-pressed="activeLayerId === 'infrastructure'"
								@click="selectLayer('infrastructure')"
							>
								<span
									class="clean-code-layers__layer-icon clean-code-layers__layer-icon--infrastructure"
									aria-hidden="true"
								>
									<component
										:is="layers.infrastructure.icon"
										:size="20"
										:stroke-width="1.9"
									/>
								</span>

								<span>{{ layers.infrastructure.label }}</span>

								<ChevronRight
									class="clean-code-layers__layer-chevron"
									:size="19"
									:stroke-width="2.1"
									aria-hidden="true"
								/>
							</button>

							<span>{{ layers.infrastructure.diagramDescription }}</span>
						</div>

						<div
							class="clean-code-layers__layer-transition clean-code-layers__layer-transition--to-application"
							aria-hidden="true"
						>
							<span class="clean-code-layers__layer-arrow" />
						</div>

						<div
							class="clean-code-layers__layer"
							:class="[
								'clean-code-layers__layer--application',
								{ 'clean-code-layers__layer--active': activeLayerId === 'application' },
							]"
						>
							<div class="clean-code-layers__layer-content">
								<button
									class="clean-code-layers__layer-button"
									:class="{ 'clean-code-layers__layer-button--active': activeLayerId === 'application' }"
									type="button"
									:aria-pressed="activeLayerId === 'application'"
									@click="selectLayer('application')"
								>
									<span
										class="clean-code-layers__layer-icon clean-code-layers__layer-icon--application"
										aria-hidden="true"
									>
										<component
											:is="layers.application.icon"
											:size="20"
											:stroke-width="1.9"
										/>
									</span>

									<span>{{ layers.application.label }}</span>

									<ChevronRight
										class="clean-code-layers__layer-chevron"
										:size="19"
										:stroke-width="2.1"
										aria-hidden="true"
									/>
								</button>

								<span>{{ layers.application.diagramDescription }}</span>
							</div>

							<div
								class="clean-code-layers__layer-transition clean-code-layers__layer-transition--to-domain"
								aria-hidden="true"
							>
								<span class="clean-code-layers__layer-arrow" />
							</div>

							<div
								class="clean-code-layers__layer"
								:class="[
									'clean-code-layers__layer--domain',
									{ 'clean-code-layers__layer--active': activeLayerId === 'domain' },
								]"
							>
								<div class="clean-code-layers__layer-content">
									<button
										class="clean-code-layers__layer-button"
										:class="{ 'clean-code-layers__layer-button--active': activeLayerId === 'domain' }"
										type="button"
										:aria-pressed="activeLayerId === 'domain'"
										@click="selectLayer('domain')"
									>
										<span
											class="clean-code-layers__layer-icon clean-code-layers__layer-icon--domain"
											aria-hidden="true"
										>
											<component
												:is="layers.domain.icon"
												:size="20"
												:stroke-width="1.9"
											/>
										</span>

										<span>{{ layers.domain.label }}</span>

										<ChevronRight
											class="clean-code-layers__layer-chevron"
											:size="19"
											:stroke-width="2.1"
											aria-hidden="true"
										/>
									</button>

									<span>{{ layers.domain.diagramDescription }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="clean-code-layers__selected">
					<span
						class="clean-code-layers__selected-icon"
						:class="`clean-code-layers__selected-icon--${activeLayerId}`"
						aria-hidden="true"
					>
						<component
							:is="activeLayer.icon"
							:size="22"
							:stroke-width="1.9"
						/>
					</span>

					<div class="clean-code-layers__selected-copy">
						<span class="clean-code-layers__selected-label">
							Active layer
						</span>

						<strong>{{ activeLayer.label }}</strong>

						<p>{{ activeLayer.description }}</p>
					</div>
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

					<strong>{{ activeFile.label }}</strong>

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
						:key="file.label"
						class="clean-code-layers__tab"
						:class="{ 'clean-code-layers__tab--active': activeFileIndex === fileIndex }"
						type="button"
						role="tab"
						:aria-selected="activeFileIndex === fileIndex"
						@click="selectFile(fileIndex)"
					>
						{{ file.label }}
					</button>
				</div>

				<div
					:key="`${activeLayerId}-${activeFile.label}`"
					class="clean-code-layers__code"
				>
					<div class="code-example-content">
						<component :is="activeFile.component" />
					</div>
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
	height: 950px;
	position: relative;
	z-index: 1;
	display: flex;
	gap: 40px;
	width: min(100%, 1480px);
	margin: 0 auto;
}

.clean-code-layers__copy {
	max-width: 540px;
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
	margin: 0;
	color: var(--layers-text-primary);
	font-weight: 840;
	font-size: clamp(3rem, 2.36rem + 2vw, 4.25rem);
	line-height: 1.02;
	letter-spacing: 0;
	text-wrap: balance;
}

.clean-code-layers__intro {
	margin: 26px 0 0;
	color: var(--layers-text-secondary);
	font-size: clamp(1.04rem, 0.98rem + 0.26vw, 1.18rem);
	line-height: 1.62;
}

.clean-code-layers__diagram {
	position: relative;
	margin-top: 26px;
}

.clean-code-layers__layer {
	position: relative;
	display: flex;
	flex-direction: column;
	border: 1px solid var(--layers-border);
	border-radius: 18px;
	overflow: visible;
	transition:
		background-color 180ms ease,
		border-color 180ms ease,
		box-shadow 180ms ease,
		transform 180ms ease;
}

.clean-code-layers__layer--infrastructure {
	z-index: 1;
	padding: 18px;
	background:
		radial-gradient(circle, rgba(17, 24, 39, 0.08) 1px, transparent 1.4px) 0 0 / 18px 18px,
		rgba(239, 246, 255, 0.55);
	border-color: rgba(59, 130, 246, 0.2);
}

.clean-code-layers__layer--application {
	z-index: 2;
	margin: 0;
	padding: 18px;
	background:
		repeating-linear-gradient(45deg, rgba(249, 115, 22, 0.045) 0 1px, transparent 1px 12px),
		rgba(255, 247, 237, 0.72);
	border-color: rgba(249, 115, 22, 0.2);
}

.clean-code-layers__layer--domain {
	z-index: 3;
	margin: 0;
	padding: 18px;
	background:
		radial-gradient(circle at 50% 92%, rgba(247, 203, 61, 0.18), transparent 54%),
		rgba(247, 203, 61, 0.12);
	border-color: rgba(247, 203, 61, 0.7);
	box-shadow:
		0 18px 48px rgba(247, 203, 61, 0.12),
		inset 0 1px 0 rgba(255, 255, 255, 0.64);
}

.clean-code-layers__layer--active {
	box-shadow:
		0 18px 54px rgba(17, 17, 17, 0.08),
		0 0 34px rgba(247, 203, 61, 0.16),
		inset 0 0 0 1px rgba(255, 255, 255, 0.56);
}

.clean-code-layers__layer-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	text-align: center;
}

.clean-code-layers__layer-content strong {
	color: #1E293B;
	font-weight: 830;
	font-size: 1.08rem;
	line-height: 1;
}

.clean-code-layers__layer-content > span {
	color: #475569;
	font-size: 0.86rem;
	line-height: 1.3;
}

.clean-code-layers__layer-button {
	position: relative;
	display: grid;
	grid-template-columns: auto minmax(0, 1fr) auto;
	align-items: center;
	gap: 14px;
	width: min(276px, calc(100% - 48px));
	min-height: 52px;
	margin-top: 6px;
	padding: 0 16px 0 14px;
	border: 1px solid rgba(17, 17, 17, 0.14);
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.94);
	box-shadow:
		0 12px 32px rgba(17, 17, 17, 0.06),
		inset 0 1px 0 rgba(255, 255, 255, 0.82);
	color: #111111;
	font-weight: 800;
	font-size: 0.92rem;
	line-height: 1;
	cursor: pointer;
	transition:
		background-color 180ms ease,
		border-color 180ms ease,
		box-shadow 180ms ease,
		transform 180ms ease;
}

.clean-code-layers__layer-button:hover,
.clean-code-layers__layer-button:focus-visible {
	border-color: rgba(228, 175, 41, 0.58);
	background: #FFFFFF;
	box-shadow:
		0 14px 34px rgba(17, 17, 17, 0.09),
		0 0 18px rgba(247, 203, 61, 0.09);
	transform: translateY(-2px);
}

.clean-code-layers__layer-button:focus-visible {
	outline: 2px solid rgba(247, 203, 61, 0.72);
	outline-offset: 4px;
}

.clean-code-layers__layer-button--active {
	border-color: var(--layers-brand);
	background:
		linear-gradient(180deg, rgba(247, 203, 61, 0.1), rgba(255, 255, 255, 0.96)),
		#FFFFFF;
	box-shadow:
		0 16px 42px rgba(247, 203, 61, 0.18),
		0 8px 28px rgba(17, 17, 17, 0.08),
		inset 0 0 0 1px rgba(247, 203, 61, 0.22);
	transform: scale(1.02);
}

.clean-code-layers__layer-button--active::after {
	position: absolute;
	top: 50%;
	right: 42px;
	width: 8px;
	height: 8px;
	content: "";
	border-radius: 999px;
	background: var(--layers-brand);
	box-shadow: 0 0 12px rgba(247, 203, 61, 0.48);
	transform: translateY(-50%);
}

.clean-code-layers__layer-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	border-radius: 999px;
	background: rgba(17, 17, 17, 0.04);
	color: #334155;
}

.clean-code-layers__layer-icon--infrastructure {
	color: #2563EB;
	background: rgba(59, 130, 246, 0.11);
}

.clean-code-layers__layer-icon--application {
	color: #EA580C;
	background: rgba(249, 115, 22, 0.11);
}

.clean-code-layers__layer-icon--domain {
	color: var(--layers-brand-strong);
	background: rgba(247, 203, 61, 0.22);
}

.clean-code-layers__layer-chevron {
	color: #111111;
	transition:
		color 180ms ease,
		transform 180ms ease;
}

.clean-code-layers__layer-button:hover .clean-code-layers__layer-chevron,
.clean-code-layers__layer-button:focus-visible .clean-code-layers__layer-chevron {
	transform: translateX(2px);
}

.clean-code-layers__layer-button--active .clean-code-layers__layer-icon {
	color: var(--layers-brand-strong);
	background: rgba(247, 203, 61, 0.18);
}

.clean-code-layers__layer-button--active .clean-code-layers__layer-chevron {
	color: var(--layers-brand-strong);
	transform: translateX(2px);
}

.clean-code-layers__layer-transition {
	position: relative;
	height: 32px;
	pointer-events: none;
}

.clean-code-layers__layer-arrow {
	position: absolute;
	top: 100%;
	left: min(calc(50% + 156px), calc(100% - 44px));
	z-index: 4;
	width: 20px;
	height: 52px;
	color: var(--layers-brand);
	opacity: 0.64;
	animation: clean-code-layers-flow 2.4s ease-in-out infinite;
	transform: translateY(-50%);
}

.clean-code-layers__layer-arrow::before,
.clean-code-layers__layer-arrow::after {
	position: absolute;
	content: "";
}

.clean-code-layers__layer-arrow::before {
	top: 0;
	bottom: 10px;
	left: 50%;
	width: 2px;
	border-radius: 999px;
	background: repeating-linear-gradient(
		to bottom,
		currentColor 0 5px,
		transparent 5px 9px
	);
	box-shadow: 0 0 10px currentColor;
	transform: translateX(-50%);
}

.clean-code-layers__layer-arrow::after {
	left: 50%;
	bottom: 1px;
	width: 8px;
	height: 8px;
	border-right: 2px solid currentColor;
	border-bottom: 2px solid currentColor;
	transform: translateX(-50%) rotate(45deg);
}

.clean-code-layers__layer-transition--to-application .clean-code-layers__layer-arrow {
	color: rgba(59, 130, 246, 0.6);
}

.clean-code-layers__layer-transition--to-domain .clean-code-layers__layer-arrow {
	color: rgba(249, 115, 22, 0.62);
	animation-delay: -0.55s;
}

.clean-code-layers__selected {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr);
	align-items: start;
	gap: 16px;
	height: 128px;
	margin-top: 24px;
	padding: 20px 22px 20px 20px;
	border: 1px solid rgba(17, 17, 17, 0.12);
	border-left: 4px solid var(--layers-brand);
	border-radius: 8px;
	background: #FFFFFF;
	box-shadow: 0 18px 50px rgba(17, 17, 17, 0.06);
}

.clean-code-layers__selected-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 46px;
	height: 46px;
	border-radius: 999px;
	background: rgba(247, 203, 61, 0.16);
	color: var(--layers-brand-strong);
}

.clean-code-layers__selected-icon--infrastructure {
	background: rgba(59, 130, 246, 0.11);
	color: #2563EB;
}

.clean-code-layers__selected-icon--application {
	background: rgba(249, 115, 22, 0.11);
	color: #EA580C;
}

.clean-code-layers__selected-copy {
	display: grid;
	gap: 8px;
	min-width: 0;
}

.clean-code-layers__selected-label {
	color: var(--layers-brand-strong);
	font-weight: 820;
	font-size: 0.76rem;
	line-height: 1;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}

.clean-code-layers__selected strong {
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
	display: grid;
	grid-template-rows: auto auto minmax(0, 1fr);
	align-self: stretch;
	justify-self: stretch;
	width: 100%;
	margin-top: 54px;
	min-width: 0;
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.10);
	border-radius: 22px;
	background:
		linear-gradient(180deg, rgba(18, 22, 28, 0.82), rgba(8, 10, 13, 0.96)),
		#080A0D;
	box-shadow:
		0 34px 90px rgba(17, 17, 17, 0.22),
		0 0 50px rgba(247, 203, 61, 0.08);
	flex-grow: 1;
}

.clean-code-layers__viewer-top {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr) auto;
	align-items: center;
	gap: 18px;
	min-height: 64px;
	padding: 0 22px;
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
	gap: 8px;
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

.clean-code-layers__viewer-badge::before {
	width: 7px;
	height: 7px;
	content: "";
	border-radius: 999px;
	background: currentColor;
	box-shadow: 0 0 12px rgba(247, 203, 61, 0.5);
}

.clean-code-layers__tabs {
	display: flex;
	gap: 2px;
	overflow-x: auto;
	padding: 12px 14px 0;
	border-bottom: 1px solid var(--color-border-subtle);
	scrollbar-width: none;
}

.clean-code-layers__tabs::-webkit-scrollbar {
	display: none;
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
	border-color: var(--color-brand-primary);
	background: rgba(247, 203, 61, 0.09);
	color: var(--color-brand-primary);
	box-shadow: inset 0 2px 0 var(--color-brand-primary);
}

.clean-code-layers__code {
	min-height: 0;
	margin: 0;
	padding: 0;
	overflow-x: auto;
	overflow-y: auto;
	background:
		linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
		var(--color-bg-surface);
	background-size: 72px 72px;
	color: var(--color-text-secondary);
	font-size: 0.98rem;
	line-height: 1.7;
}

.code-example-content {
	padding: 24px;
	min-width: max-content;
	overflow: auto;
	animation: clean-code-layers-fade 180ms ease;
}

.code-example-content :deep(.vp-code-group),
.code-example-content :deep(.language-ts),
.code-example-content :deep(.language-js),
.code-example-content :deep(div[class*="language-"]) {
	margin: 0;
}

.code-example-content :deep(pre) {
	margin: 0;
	background: transparent;
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

@keyframes clean-code-layers-flow {
	0%,
	100% {
		opacity: 0.42;
		transform: translateY(-58%);
	}

	50% {
		opacity: 0.86;
		transform: translateY(-42%);
	}
}

@media (prefers-reduced-motion: reduce) {
	.clean-code-layers__layer-arrow,
	.code-example-content {
		animation: none;
	}
}

@media (max-width: 1280px) {
	.clean-code-layers__inner {
		height: auto;
		flex-direction: column;
		justify-items: stretch;
	}

	.clean-code-layers__viewer {
		height: 600px;
		margin-top: 0;
	}

	.clean-code-layers__copy {
		max-width: 100%;
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
		display: grid;
		gap: 12px;
		aspect-ratio: auto;
		margin-top: 34px;
	}

	.clean-code-layers__layer {
		position: relative;
		min-height: auto;
		padding: 16px;
		border-radius: 14px;
		overflow: visible;
	}

	.clean-code-layers__layer--application {
		margin: 0;
		padding: 16px 14px;
	}

	.clean-code-layers__layer--domain {
		margin: 0;
		padding: 16px 12px;
	}

	.clean-code-layers__layer-content {
		align-items: flex-start;
		width: 100%;
		text-align: left;
	}

	.clean-code-layers__layer-content strong {
		font-size: 1rem;
	}

	.clean-code-layers__layer-content > span {
		font-size: 0.82rem;
	}

	.clean-code-layers__layer-button {
		width: 100%;
		min-height: 50px;
		margin-top: 14px;
		font-size: 0.9rem;
	}

	.clean-code-layers__layer-icon {
		width: 32px;
		height: 32px;
	}

	.clean-code-layers__layer-transition {
		height: 34px;
	}

	.clean-code-layers__layer-arrow {
		display: none;
	}

	.clean-code-layers__selected {
		grid-template-columns: 1fr;
		height: auto;
		min-height: 128px;
		padding: 18px;
	}

	.clean-code-layers__viewer {
		border-radius: 14px;
		max-width: none;
		height: 520px;
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
		font-size: 0.9rem;
	}
}

@media (max-width: 440px) {
	.clean-code-layers__title {
		font-size: 2.34rem;
	}

	.clean-code-layers__layer-button {
		grid-template-columns: auto minmax(0, 1fr) auto;
		gap: 10px;
		padding-right: 14px;
		padding-left: 12px;
	}
}
</style>
