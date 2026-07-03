<script setup lang="ts">
import { ArrowRight, Boxes, CircleAlert, CircleCheck, Code2, Layers3, Route, ShieldCheck } from "@lucide/vue";

const flowItems = [
	{
		label: "Intent",
		icon: Code2,
	},
	{
		label: "Structure",
		icon: Boxes,
	},
	{
		label: "Validation",
		icon: ShieldCheck,
	},
];

const layers = [
	{
		label: "Domain",
		description: "Business rules and entities",
		icon: Boxes,
		active: true,
	},
	{
		label: "Application",
		description: "Use cases and orchestration",
		icon: Route,
		active: false,
	},
	{
		label: "Infrastructure",
		description: "External services and adapters",
		icon: Layers3,
		active: false,
	},
];
</script>

<template>
	<section
		class="architecture-bridge"
		aria-label="Transition from comparison to architecture"
	>
		<div class="architecture-bridge__inner">
			<div
				class="architecture-bridge__transform"
				aria-hidden="true"
			>
				<div class="architecture-bridge__state architecture-bridge__state--initial">
					<span class="architecture-bridge__state-header">
						<CircleAlert
							:size="15"
							:stroke-width="2"
						/>

						<strong>Same problem</strong>
					</span>

					<span class="architecture-bridge__state-label">Unpredictable code</span>

					<span class="architecture-bridge__code-preview">
						<span class="architecture-bridge__code-dot architecture-bridge__code-dot--red" />

						<span class="architecture-bridge__code-dot architecture-bridge__code-dot--yellow" />

						<span class="architecture-bridge__code-dot architecture-bridge__code-dot--green" />

						<span class="architecture-bridge__code-line architecture-bridge__code-line--long" />

						<span class="architecture-bridge__code-line architecture-bridge__code-line--medium" />

						<span class="architecture-bridge__code-line architecture-bridge__code-line--short" />
					</span>
				</div>

				<ArrowRight
					class="architecture-bridge__transform-arrow"
					:size="22"
					:stroke-width="1.8"
				/>

				<div class="architecture-bridge__state architecture-bridge__state--clear">
					<span class="architecture-bridge__state-header">
						<CircleCheck
							:size="15"
							:stroke-width="2"
						/>

						<strong>DuploJS approach</strong>
					</span>

					<span class="architecture-bridge__state-label">Explicit + validated intent</span>

					<span class="architecture-bridge__code-preview">
						<span class="architecture-bridge__code-dot architecture-bridge__code-dot--red" />

						<span class="architecture-bridge__code-dot architecture-bridge__code-dot--yellow" />

						<span class="architecture-bridge__code-dot architecture-bridge__code-dot--green" />

						<span class="architecture-bridge__code-line architecture-bridge__code-line--medium" />

						<span class="architecture-bridge__code-line architecture-bridge__code-line--long" />

						<span class="architecture-bridge__code-line architecture-bridge__code-line--short" />
					</span>
				</div>
			</div>

			<div class="architecture-bridge__copy">
				<h2>
					From visible differences

					<span>to clear architecture.</span>
				</h2>

				<p>Once the intent is explicit and the behavior is predictable, the structure of your codebase becomes the answer.</p>

				<div
					class="architecture-bridge__flow"
					aria-label="Intent to validation to structure"
				>
					<template
						v-for="(flowItem, flowItemIndex) in flowItems"
						:key="flowItem.label"
					>
						<span class="architecture-bridge__flow-item">
							<component
								:is="flowItem.icon"
								:size="16"
								:stroke-width="1.9"
								aria-hidden="true"
							/>

							{{ flowItem.label }}
						</span>

						<ArrowRight
							v-if="flowItemIndex < flowItems.length - 1"
							class="architecture-bridge__flow-arrow"
							:size="15"
							:stroke-width="1.8"
							aria-hidden="true"
						/>
					</template>
				</div>
			</div>

			<div
				class="architecture-bridge__layers"
				aria-hidden="true"
			>
				<div
					v-for="layer in layers"
					:key="layer.label"
					class="architecture-bridge__layer"
					:class="{ 'architecture-bridge__layer--active': layer.active }"
				>
					<span class="architecture-bridge__layer-icon">
						<component
							:is="layer.icon"
							:size="17"
							:stroke-width="1.9"
						/>
					</span>

					<span>
						<strong>{{ layer.label }}</strong>
					</span>

					<span class="architecture-bridge__layer-description">
						<small>{{ layer.description }}</small>
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.architecture-bridge {
	position: relative;
	z-index: 2;
	overflow: hidden;
	padding: 56px clamp(20px, 4vw, 64px);
	border-top: 1px solid rgba(128, 104, 54, 0.14);
	border-bottom: 1px solid rgba(128, 104, 54, 0.16);
	background:
		radial-gradient(ellipse at 24% 0%, rgba(255, 255, 255, 0.72), transparent 34rem),
		radial-gradient(circle at 73% 46%, rgba(247, 203, 61, 0.11), transparent 30rem),
		radial-gradient(ellipse at 54% 100%, rgba(211, 178, 105, 0.13), transparent 36rem),
		linear-gradient(rgba(184, 151, 77, 0.045) 1px, transparent 1px),
		linear-gradient(90deg, rgba(184, 151, 77, 0.045) 1px, transparent 1px),
		#F5EFDF;
	background-size:
		auto,
		auto,
		auto,
		32px 32px,
		32px 32px,
		auto;
	color: #111111;
	box-shadow:
		0 -16px 34px rgba(128, 104, 54, 0.06),
		0 18px 38px rgba(128, 104, 54, 0.08),
		inset 0 1px 0 rgba(255, 255, 255, 0.86),
		inset 0 -1px 0 rgba(128, 104, 54, 0.1),
		inset 0 20px 28px rgba(255, 255, 255, 0.46),
		inset 0 -18px 26px rgba(128, 104, 54, 0.04);
}

.architecture-bridge::before,
.architecture-bridge::after {
	position: absolute;
	z-index: 0;
	content: "";
	pointer-events: none;
}

.architecture-bridge::before {
	position: absolute;
	top: 50%;
	right: 10%;
	width: 460px;
	height: 460px;
	border-radius: 999px;
	background: rgba(247, 203, 61, 0.12);
	filter: blur(92px);
	transform: translateY(-50%);
}

.architecture-bridge::after {
	inset: 0;
	background:
		radial-gradient(circle at 1.8% 58%, rgba(247, 203, 61, 0.48) 0 1.5px, transparent 2px),
		radial-gradient(circle at 98.2% 42%, rgba(247, 203, 61, 0.38) 0 1.5px, transparent 2px),
		radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.42), transparent 28rem),
		radial-gradient(ellipse at 50% 100%, rgba(128, 104, 54, 0.055), transparent 30rem);
}

.architecture-bridge__inner {
	position: relative;
	z-index: 1;
	display: grid;
	grid-template-columns: minmax(280px, 0.95fr) minmax(340px, 1.02fr) minmax(340px, 1.18fr);
	align-items: center;
	gap: clamp(34px, 4.5vw, 78px);
	width: min(100%, 1480px);
	min-height: 236px;
	margin: 0 auto;
}

.architecture-bridge__transform {
	display: grid;
	grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr);
	align-items: center;
	gap: 16px;
}

.architecture-bridge__state {
	display: grid;
	gap: 8px;
	min-height: 156px;
	padding: 16px 15px;
	border: 1px solid rgba(17, 17, 17, 0.1);
	border-radius: 10px;
	background: rgba(255, 253, 246, 0.88);
	box-shadow: 0 15px 34px rgba(17, 17, 17, 0.08);
}

.architecture-bridge__state--initial {
	border-color: rgba(215, 92, 66, 0.24);
	box-shadow:
		0 15px 34px rgba(17, 17, 17, 0.07),
		0 0 0 1px rgba(215, 92, 66, 0.04);
}

.architecture-bridge__state--clear {
	border-color: rgba(91, 160, 96, 0.22);
	background: rgba(255, 254, 248, 0.92);
	box-shadow:
		0 15px 34px rgba(17, 17, 17, 0.07),
		0 0 0 1px rgba(91, 160, 96, 0.04);
}

.architecture-bridge__state-header {
	display: inline-flex;
	align-items: center;
	gap: 7px;
	color: #111111;
	font-weight: 800;
	font-size: 0.74rem;
	line-height: 1.15;
	white-space: nowrap;
}

.architecture-bridge__state--initial .architecture-bridge__state-header svg {
	color: #E05D4E;
}

.architecture-bridge__state--clear .architecture-bridge__state-header svg {
	color: #4EAE63;
}

.architecture-bridge__state-label {
	max-width: 120px;
	color: #7A7367;
	font-weight: 620;
	font-size: 0.72rem;
	line-height: 1.35;
}

.architecture-bridge__code-preview {
	position: relative;
	display: grid;
	align-content: center;
	gap: 6px;
	height: 64px;
	margin-top: 8px;
	padding: 17px 14px 10px;
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.07);
	border-radius: 7px;
	background:
		radial-gradient(circle at 88% 24%, rgba(247, 203, 61, 0.1), transparent 44%),
		linear-gradient(180deg, rgba(18, 22, 28, 0.98), rgba(5, 6, 8, 0.96));
	box-shadow: 0 10px 22px rgba(17, 17, 17, 0.18);
}

.architecture-bridge__code-dot {
	position: absolute;
	top: 8px;
	width: 4px;
	height: 4px;
	border-radius: 999px;
}

.architecture-bridge__code-dot--red {
	left: 10px;
	background: #F97373;
}

.architecture-bridge__code-dot--yellow {
	left: 17px;
	background: #F7CB3D;
}

.architecture-bridge__code-dot--green {
	left: 24px;
	background: #61D394;
}

.architecture-bridge__code-line {
	display: block;
	height: 3px;
	border-radius: 999px;
	background: rgba(200, 209, 220, 0.66);
}

.architecture-bridge__code-line--long {
	width: 88%;
}

.architecture-bridge__code-line--medium {
	width: 72%;
}

.architecture-bridge__code-line--short {
	width: 48%;
	opacity: 0.5;
}

.architecture-bridge__transform-arrow {
	color: rgba(122, 115, 103, 0.72);
}

.architecture-bridge__copy {
	text-align: center;
}

.architecture-bridge__copy h2 {
	margin: 0;
	color: #111111;
	font-weight: 840;
	font-size: clamp(2.05rem, 1.72rem + 1vw, 2.8rem);
	line-height: 1.02;
	letter-spacing: 0;
	text-wrap: balance;
}

.architecture-bridge__copy h2 span {
	display: block;
	color: #BD8E20;
}

.architecture-bridge__copy p {
	max-width: 470px;
	margin: 14px auto 0;
	color: #4B463D;
	font-size: 0.82rem;
	line-height: 1.52;
}

.architecture-bridge__flow {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 18px;
	margin-top: 24px;
	padding: 0;
	border: 0;
	background: transparent;
	box-shadow: none;
}

.architecture-bridge__flow-item {
	display: grid;
	justify-items: center;
	align-items: center;
	gap: 8px;
	min-width: 56px;
	padding: 0;
	border-radius: 0;
	color: #4B463D;
	font-weight: 560;
	font-size: 0.72rem;
	line-height: 1;
	white-space: nowrap;
}

.architecture-bridge__flow-item svg {
	box-sizing: content-box;
	padding: 7px;
	border: 1px solid rgba(247, 203, 61, 0.26);
	border-radius: 8px;
	background: rgba(255, 253, 245, 0.72);
	color: #BD8E20;
}

.architecture-bridge__flow-arrow {
	color: rgba(122, 115, 103, 0.58);
}

.architecture-bridge__layers {
	display: grid;
	gap: 10px;
	min-width: 0;
	perspective: 900px;
}

.architecture-bridge__layer {
	display: grid;
	grid-template-columns: 42px minmax(92px, 0.72fr) minmax(0, 1fr);
	gap: 14px;
	align-items: center;
	min-height: 58px;
	padding: 11px 34px 11px clamp(46px, 8.5%, 64px);
	border: 1px solid rgba(17, 17, 17, 0.1);
	border-radius: 9px;
	background:
		linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(250, 247, 239, 0.86));
	box-shadow: 0 14px 26px rgba(17, 17, 17, 0.07);
	clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%);
	transform: rotateX(4deg);
}

.architecture-bridge__layer:nth-child(2) {
	margin-left: 6px;
}

.architecture-bridge__layer:nth-child(3) {
	margin-left: 12px;
}

.architecture-bridge__layer--active {
	border-color: rgba(189, 142, 32, 0.32);
	background:
		linear-gradient(90deg, rgba(247, 203, 61, 0.35), rgba(255, 248, 216, 0.72) 56%, rgba(255, 253, 245, 0.72));
}

.architecture-bridge__layer-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	justify-self: center;
	width: 34px;
	height: 34px;
	border: 1px solid rgba(189, 142, 32, 0.18);
	border-radius: 9px;
	background: rgba(247, 203, 61, 0.08);
	color: #BD8E20;
}

.architecture-bridge__layer strong,
.architecture-bridge__layer small {
	display: block;
}

.architecture-bridge__layer strong {
	color: #111111;
	font-weight: 790;
	font-size: 0.86rem;
	line-height: 1.15;
}

.architecture-bridge__layer-description {
	display: block;
	min-width: 0;
}

.architecture-bridge__layer small {
	margin: 0;
	color: #4B463D;
	font-size: 0.7rem;
	line-height: 1.28;
}

@media (max-width: 1520px) {
	.architecture-bridge__inner {
		display: block;
		min-height: 0;
	}

	.architecture-bridge__transform,
	.architecture-bridge__layers {
		display: none;
	}
}

@media (max-width: 1080px) {
	.architecture-bridge {
		padding-top: 62px;
		padding-bottom: 62px;
	}

	.architecture-bridge__copy {
		max-width: 640px;
		margin: 0 auto;
	}
}

@media (max-width: 720px) {
	.architecture-bridge {
		padding: 62px 20px;
	}

	.architecture-bridge__copy h2 {
		font-size: 2.15rem;
	}

	.architecture-bridge__flow {
		flex-wrap: wrap;
		border-radius: 18px;
	}
}
</style>
