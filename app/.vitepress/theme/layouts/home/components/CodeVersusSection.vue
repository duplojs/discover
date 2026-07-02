<script setup lang="ts">
import { computed, ref } from "vue";
import { versusGroups, type VersusExample, type VersusGroup } from "@/data/versusExamples";
import ComparisonCodeWindow from "./ComparisonCodeWindow.vue";

const [firstGroup] = versusGroups;
const activeGroupId = ref(firstGroup.id);
const activeExampleId = ref(firstGroup.examples[0].id);
const activeWithoutFileIndex = ref(0);
const activeWithFileIndex = ref(0);

const activeGroup = computed<VersusGroup>(() => (
	versusGroups.find(({ id }) => id === activeGroupId.value) ?? firstGroup
));

const activeExample = computed<VersusExample>(() => (
	activeGroup.value.examples.find(({ id }) => id === activeExampleId.value) ?? (activeGroup.value.examples[0])
));

function selectGroup(group: VersusGroup) {
	activeGroupId.value = group.id;
	activeExampleId.value = group.examples[0]?.id ?? "";
	activeWithoutFileIndex.value = 0;
	activeWithFileIndex.value = 0;
}

function selectExample(example: VersusExample) {
	activeExampleId.value = example.id;
	activeWithoutFileIndex.value = 0;
	activeWithFileIndex.value = 0;
}
</script>

<template>
	<section
		id="code-versus"
		class="code-versus"
	>
		<div class="code-versus__inner">
			<div class="code-versus__copy">
				<p class="code-versus__eyebrow">
					<span aria-hidden="true" />

					WITH VS WITHOUT
				</p>

				<h2 class="code-versus__title">
					Same problem. More predictability.
				</h2>

				<p class="code-versus__intro">
					Compare common TypeScript patterns with DuploJS alternatives designed for robustness, explicit intent and predictable behavior.
				</p>
			</div>

			<div class="code-versus__comparator">
				<div
					class="code-versus__categories"
					role="tablist"
					aria-label="Comparison categories"
				>
					<button
						v-for="group in versusGroups"
						:key="group.id"
						class="code-versus__category"
						:class="{ 'code-versus__category--active': activeGroup.id === group.id }"
						type="button"
						role="tab"
						:aria-selected="activeGroup.id === group.id"
						@click="selectGroup(group)"
					>
						<span>{{ group.label }}</span>

						<small>{{ group.description }}</small>
					</button>
				</div>

				<div
					:key="activeGroup.id"
					class="code-versus__active"
				>
					<div
						v-if="activeGroup.examples.length > 1"
						class="code-versus__examples"
						role="tablist"
						:aria-label="`${activeGroup.label} examples`"
					>
						<button
							v-for="example in activeGroup.examples"
							:key="example.id"
							class="code-versus__example"
							:class="{ 'code-versus__example--active': activeExample.id === example.id }"
							type="button"
							role="tab"
							:aria-selected="activeExample.id === example.id"
							@click="selectExample(example)"
						>
							{{ example.label }}
						</button>
					</div>

					<div class="code-versus__active-copy">
						<div class="code-versus__example-copy">
							<h3>{{ activeExample.label }}</h3>

							<p>{{ activeExample.description }}</p>
						</div>

						<ul
							class="code-versus__benefits"
							aria-label="Active comparison benefits"
						>
							<li
								v-for="benefit in activeExample.benefits"
								:key="benefit"
							>
								{{ benefit }}
							</li>
						</ul>
					</div>

					<div class="code-versus__windows">
						<ComparisonCodeWindow
							:title="activeExample.without.label"
							:badge="activeExample.without.badge"
							:files="activeExample.without.files"
							:active-file-index="activeWithoutFileIndex"
							@select-file="activeWithoutFileIndex = $event"
						/>

						<ComparisonCodeWindow
							:title="activeExample.with.label"
							:badge="activeExample.with.badge"
							:files="activeExample.with.files"
							:active-file-index="activeWithFileIndex"
							highlight
							@select-file="activeWithFileIndex = $event"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.code-versus {
	--versus-bg: #F7F4EA;
	--versus-bg-soft: #FFFDF5;
	--versus-surface: #FFFFFF;
	--versus-text-primary: #111111;
	--versus-text-secondary: #4B463D;
	--versus-text-muted: #7A7367;
	--versus-border: rgba(17, 17, 17, 0.10);
	--versus-brand: var(--color-brand-primary);
	--versus-brand-strong: #BD8E20;
	--versus-brand-soft: rgba(247, 203, 61, 0.16);
	--versus-brand-glow: rgba(247, 203, 61, 0.26);

	position: relative;
	z-index: 2;
	overflow: hidden;
	scroll-margin-top: 108px;
	padding: 126px clamp(20px, 4vw, 64px) 118px;
	border-radius: 64px 64px 0 0;
	background:
		radial-gradient(circle at 22% 18%, rgba(247, 203, 61, 0.13), transparent 28%),
		linear-gradient(180deg, var(--versus-bg-soft) 0%, var(--versus-bg) 100%);
	color: var(--versus-text-primary);
	box-shadow: 0 -30px 92px rgba(0, 0, 0, 0.22);
}

.code-versus::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background-image:
		linear-gradient(rgba(17, 17, 17, 0.028) 1px, transparent 1px),
		linear-gradient(90deg, rgba(17, 17, 17, 0.028) 1px, transparent 1px);
	background-position: center top;
	background-size: 72px 72px;
	mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent 70%);
}

.code-versus::after {
	position: absolute;
	top: 0;
	left: 50%;
	width: min(860px, 76vw);
	height: 1px;
	transform: translateX(-50%);
	pointer-events: none;
	content: "";
	background: linear-gradient(90deg, transparent, rgba(247, 203, 61, 0.62), transparent);
	box-shadow: 0 0 34px rgba(247, 203, 61, 0.18);
}

.code-versus__inner {
	position: relative;
	z-index: 1;
	width: min(100%, 1480px);
	margin: 0 auto;
}

.code-versus__copy {
	max-width: 760px;
}

.code-versus__eyebrow {
	display: inline-flex;
	align-items: center;
	gap: 14px;
	margin: 0 0 24px;
	color: var(--versus-brand-strong);
	font-weight: 820;
	font-size: 0.88rem;
	line-height: 1.2;
	letter-spacing: 0.18em;
	text-transform: uppercase;
}

.code-versus__eyebrow span {
	display: block;
	width: 2px;
	height: 28px;
	background: var(--versus-brand);
	box-shadow: 0 0 18px var(--versus-brand-glow);
}

.code-versus__title {
	max-width: 760px;
	margin: 0;
	color: var(--versus-text-primary);
	font-weight: 840;
	font-size: clamp(3rem, 2.36rem + 2vw, 4.25rem);
	line-height: 1.02;
	letter-spacing: 0;
	text-wrap: balance;
}

.code-versus__intro {
	max-width: 690px;
	margin: 26px 0 0;
	color: var(--versus-text-secondary);
	font-size: clamp(1.04rem, 0.98rem + 0.26vw, 1.18rem);
	line-height: 1.62;
}

.code-versus__comparator {
	margin-top: 50px;
	overflow: hidden;
	border: 1px solid var(--color-border-subtle);
	border-radius: 24px;
	background:
		radial-gradient(circle at 76% 18%, rgba(247, 203, 61, 0.12), transparent 26%),
		linear-gradient(180deg, rgba(18, 22, 28, 0.98), rgba(5, 6, 8, 0.98)),
		var(--color-bg-page);
	box-shadow:
		0 28px 86px rgba(17, 17, 17, 0.22),
		0 0 58px rgba(247, 203, 61, 0.1);
}

.code-versus__categories {
	display: grid;
	grid-template-columns: repeat(6, minmax(150px, 1fr));
	gap: 1px;
	overflow-x: auto;
	padding: 14px;
	border-bottom: 1px solid var(--color-border-subtle);
	background: rgba(5, 6, 8, 0.42);
	scrollbar-width: thin;
}

.code-versus__category {
	display: grid;
	gap: 8px;
	min-width: 150px;
	min-height: 92px;
	padding: 16px;
	border: 1px solid transparent;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.025);
	color: var(--color-text-muted);
	font: inherit;
	text-align: left;
	cursor: pointer;
	transition:
		background-color 160ms ease,
		border-color 160ms ease,
		color 160ms ease,
		box-shadow 160ms ease;
}

.code-versus__category span {
	color: var(--color-text-secondary);
	font-weight: 760;
	font-size: 0.92rem;
	line-height: 1.2;
}

.code-versus__category small {
	display: -webkit-box;
	overflow: hidden;
	color: var(--color-text-muted);
	font-size: 0.78rem;
	line-height: 1.42;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

.code-versus__category:hover,
.code-versus__category:focus-visible {
	border-color: rgba(247, 203, 61, 0.22);
	background: rgba(247, 203, 61, 0.055);
	color: var(--color-text-secondary);
	outline: 2px solid transparent;
}

.code-versus__category:focus-visible {
	box-shadow: 0 0 0 2px rgba(247, 203, 61, 0.34);
}

.code-versus__category--active {
	border-color: var(--color-brand-border);
	background: rgba(247, 203, 61, 0.1);
	box-shadow: inset 0 2px 0 var(--color-brand-primary);
}

.code-versus__category--active span {
	color: var(--color-brand-primary);
}

.code-versus__category--active small {
	color: var(--color-text-secondary);
}

.code-versus__active {
	padding: clamp(22px, 3vw, 36px);
	animation: code-versus-fade 180ms ease;
}

.code-versus__examples {
	display: flex;
	gap: 8px;
	overflow-x: auto;
	margin: 0 0 24px;
	padding-bottom: 4px;
	scrollbar-width: thin;
}

.code-versus__example {
	flex: 0 0 auto;
	min-height: 40px;
	padding: 0 14px;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.035);
	color: var(--color-text-muted);
	font: inherit;
	font-weight: 700;
	font-size: 0.84rem;
	line-height: 1;
	cursor: pointer;
	transition:
		background-color 160ms ease,
		border-color 160ms ease,
		color 160ms ease,
		box-shadow 160ms ease;
}

.code-versus__example:hover,
.code-versus__example:focus-visible {
	border-color: rgba(247, 203, 61, 0.24);
	background: rgba(247, 203, 61, 0.065);
	color: var(--color-text-secondary);
	outline: 2px solid transparent;
}

.code-versus__example:focus-visible {
	box-shadow: 0 0 0 2px rgba(247, 203, 61, 0.34);
}

.code-versus__example--active {
	border-color: var(--color-brand-border);
	background: var(--color-brand-soft);
	color: var(--color-brand-primary);
}

.code-versus__active-copy {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 18px 28px;
}

.code-versus__example-copy {
	max-width: 720px;
}

.code-versus__example-copy h3 {
	margin: 0 0 8px;
	color: var(--color-text-primary);
	font-weight: 780;
	font-size: clamp(1.15rem, 1.08rem + 0.24vw, 1.3rem);
	line-height: 1.2;
	letter-spacing: 0;
}

.code-versus__example-copy p {
	max-width: 720px;
	margin: 0;
	color: var(--color-text-secondary);
	font-size: 1rem;
	line-height: 1.58;
}

.code-versus__benefits {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.code-versus__benefits li {
	display: inline-flex;
	align-items: center;
	min-height: 34px;
	padding: 0 12px;
	border: 1px solid var(--color-brand-border);
	border-radius: 999px;
	background: var(--color-brand-soft);
	color: var(--color-brand-primary);
	font-weight: 720;
	font-size: 0.82rem;
	line-height: 1;
}

.code-versus__windows {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 18px;
	margin-top: 28px;
}

@keyframes code-versus-fade {
	from {
		opacity: 0.64;
		transform: translateY(6px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@media (prefers-reduced-motion: reduce) {
	.code-versus__category,
	.code-versus__example,
	.code-versus__active {
		transition: none;
		animation: none;
	}
}

@media (max-width: 1180px) {
	.code-versus__categories {
		grid-template-columns: repeat(6, minmax(180px, 1fr));
	}
}

@media (max-width: 900px) {
	.code-versus__windows {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 720px) {
	.code-versus {
		padding: 78px 20px 82px;
		border-radius: 40px 40px 0 0;
	}

	.code-versus__eyebrow {
		margin-bottom: 20px;
		font-size: 0.82rem;
		letter-spacing: 0.14em;
	}

	.code-versus__title {
		font-size: 2.75rem;
		line-height: 1.06;
	}

	.code-versus__intro {
		margin-top: 22px;
		font-size: 1rem;
	}

	.code-versus__comparator {
		width: calc(100% + 24px);
		margin-right: -12px;
		margin-left: -12px;
		border-radius: 18px;
	}

	.code-versus__categories {
		display: flex;
		padding: 12px;
	}

	.code-versus__category {
		min-width: 170px;
		min-height: 84px;
		padding: 14px;
	}

	.code-versus__active {
		padding: 18px 12px 16px;
	}

	.code-versus__examples {
		margin-bottom: 20px;
		padding: 0 0 4px;
	}

	.code-versus__example {
		min-height: 38px;
		padding: 0 13px;
		font-size: 0.8rem;
	}

	.code-versus__active-copy {
		align-items: flex-start;
	}

	.code-versus__windows {
		gap: 14px;
		margin-top: 22px;
	}
}

@media (max-width: 440px) {
	.code-versus__title {
		font-size: 2.34rem;
	}
}
</style>
