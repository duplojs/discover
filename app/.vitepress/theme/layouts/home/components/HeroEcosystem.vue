<script setup lang="ts">
import { FileText, Globe2, KeyRound, Package, Play, Server } from "@lucide/vue";

const ecosystemPackages = [
	{
		label: "@duplojs/server-utils",
		description: "Server utilities",
		href: "https://server-utils.duplojs.dev",
		icon: Server,
		className: "hero-ecosystem__module--server",
	},
	{
		label: "@duplojs/http",
		description: "HTTP helpers",
		href: "https://http.duplojs.dev",
		icon: Globe2,
		className: "hero-ecosystem__module--http",
	},
	{
		label: "@duplojs/form",
		description: "Form validation",
		href: "https://form.duplojs.dev",
		icon: FileText,
		className: "hero-ecosystem__module--form",
	},
	{
		label: "@duplojs/json-web-token",
		description: "JWT signing & verification",
		href: "https://json-web-token.duplojs.dev",
		icon: KeyRound,
		className: "hero-ecosystem__module--jwt",
	},
	{
		label: "@duplojs/playwright",
		description: "Testing utilities",
		href: "https://playwright.duplojs.dev",
		icon: Play,
		className: "hero-ecosystem__module--playwright",
	},
];
</script>

<template>
	<div class="hero-ecosystem">
		<div class="hero-ecosystem__stage">
			<div class="hero-ecosystem__frame hero-ecosystem__frame--outer" />

			<div class="hero-ecosystem__frame hero-ecosystem__frame--inner" />

			<svg
				class="hero-ecosystem__constellation"
				viewBox="0 0 100 100"
				aria-hidden="true"
			>
				<path
					class="hero-ecosystem__constellation-orbit hero-ecosystem__constellation-orbit--wide"
					d="M7 58 29 5 88 28 66 92 14 72Z"
				/>

				<path
					class="hero-ecosystem__constellation-orbit hero-ecosystem__constellation-orbit--cross"
					d="M16 22 88 38 70 82 9 62Z"
				/>

				<path
					class="hero-ecosystem__constellation-orbit hero-ecosystem__constellation-orbit--inner"
					d="M21 23H79V77H21Z"
				/>

				<path
					class="hero-ecosystem__constellation-link"
					d="M50 50 31 27 12 42 28 90 50 50 72 90 89 42 69 27Z"
				/>

				<g class="hero-ecosystem__constellation-nodes">
					<circle
						cx="31"
						cy="27"
						r="1.25"
					/>

					<circle
						cx="12"
						cy="42"
						r="0.9"
					/>

					<circle
						cx="28"
						cy="90"
						r="1.05"
					/>

					<circle
						cx="72"
						cy="90"
						r="1.05"
					/>

					<circle
						cx="89"
						cy="42"
						r="1.25"
					/>

					<circle
						cx="50"
						cy="33"
						r="0.75"
					/>
				</g>

				<g class="hero-ecosystem__constellation-specks">
					<circle
						cx="45"
						cy="45"
						r="0.25"
					/>

					<circle
						cx="47"
						cy="48"
						r="0.2"
					/>

					<circle
						cx="53"
						cy="45"
						r="0.22"
					/>

					<circle
						cx="55"
						cy="53"
						r="0.24"
					/>

					<circle
						cx="18"
						cy="17"
						r="0.18"
					/>

					<circle
						cx="86"
						cy="75"
						r="0.18"
					/>
				</g>
			</svg>

			<div class="hero-ecosystem__orbit">
				<svg
					class="hero-ecosystem__connections"
					viewBox="0 0 100 100"
					aria-hidden="true"
				>
					<path d="M50 50 L50 0" />

					<path d="M50 50 L89 42" />

					<path d="M50 50 L72 90" />

					<path d="M50 50 L28 90" />

					<path d="M50 50 L11 42" />

					<rect
						x="14"
						y="12"
						width="72"
						height="76"
						rx="8"
					/>

					<circle
						class="hero-ecosystem__signal hero-ecosystem__signal--one"
						cx="50"
						cy="50"
						r="0.9"
					/>

					<circle
						class="hero-ecosystem__signal hero-ecosystem__signal--two"
						cx="50"
						cy="50"
						r="0.75"
					/>
				</svg>

				<a
					v-for="packageItem in ecosystemPackages"
					:key="packageItem.label"
					class="hero-ecosystem__module"
					:class="packageItem.className"
					:href="packageItem.href"
					target="_blank"
					rel="noreferrer"
				>
					<span
						class="hero-ecosystem__module-icon"
						aria-hidden="true"
					>
						<component
							:is="packageItem.icon"
							:size="18"
							:stroke-width="1.8"
						/>
					</span>

					<span class="hero-ecosystem__module-text">
						<strong>{{ packageItem.label }}</strong>

						<span>{{ packageItem.description }}</span>
					</span>
				</a>
			</div>

			<a
				class="hero-ecosystem__core"
				href="https://utils.duplojs.dev"
				target="_blank"
				rel="noreferrer"
				aria-label="Open @duplojs/utils documentation"
			>
				<span
					class="hero-ecosystem__core-icon"
					aria-hidden="true"
				>
					<Package
						:size="18"
						:stroke-width="1.8"
					/>
				</span>

				<span class="hero-ecosystem__core-text">
					<strong>@duplojs/utils</strong>

					<span>Foundation of the ecosystem</span>
				</span>
			</a>
		</div>
	</div>
</template>

<style scoped>
.hero-ecosystem {
	position: relative;
	z-index: 1;
	width: min(820px, 100%);
	height: 600px;
	margin-left: auto;
	overflow: visible;
	border: none;
	background: transparent;
	box-shadow: none;
}

.hero-ecosystem::before {
	position: absolute;
	inset: 4% -3% 2%;
	pointer-events: none;
	content: "";
	background-image:
		linear-gradient(rgba(255, 255, 255, 0.032) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255, 255, 255, 0.032) 1px, transparent 1px);
	background-position: center;
	background-size: 54px 54px;
	mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.82), transparent 72%);
}

.hero-ecosystem::after {
	position: absolute;
	inset: 16% 12% 10%;
	pointer-events: none;
	content: "";
	background:
		radial-gradient(circle at center, rgba(247, 203, 61, 0.22), transparent 54%),
		radial-gradient(circle at 52% 48%, rgba(247, 203, 61, 0.12), transparent 68%);
	filter: blur(22px);
	opacity: 0.95;
}

.hero-ecosystem__stage {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	overflow: visible;
}

.hero-ecosystem__stage::before {
	position: absolute;
	inset: -8% -6%;
	z-index: 0;
	pointer-events: none;
	content: "";
	background:
		radial-gradient(circle at 10% 28%, rgba(255, 255, 255, 0.22) 0 1px, transparent 1.8px),
		radial-gradient(circle at 24% 78%, rgba(247, 203, 61, 0.3) 0 1px, transparent 2px),
		radial-gradient(circle at 62% 18%, rgba(255, 255, 255, 0.18) 0 1px, transparent 1.8px),
		radial-gradient(circle at 88% 66%, rgba(247, 203, 61, 0.22) 0 1px, transparent 2px),
		radial-gradient(circle at 78% 84%, rgba(255, 255, 255, 0.16) 0 1px, transparent 1.8px);
	opacity: 0.34;
	animation: hero-ecosystem-stars-twinkle 7s ease-in-out infinite alternate;
}

.hero-ecosystem__orbit {
	position: absolute;
	inset: 0;
	z-index: 2;
	transform-origin: center;
	animation: hero-ecosystem-orbit 64s linear infinite;
}

.hero-ecosystem__constellation {
	position: absolute;
	inset: -5% -7% -4%;
	z-index: 1;
	width: 114%;
	height: 109%;
	overflow: visible;
	pointer-events: none;
	transform-box: fill-box;
	transform-origin: center;
	animation: hero-ecosystem-constellation-drift 78s linear infinite;
}

.hero-ecosystem__constellation-orbit,
.hero-ecosystem__constellation-link {
	fill: none;
	vector-effect: non-scaling-stroke;
}

.hero-ecosystem__constellation-orbit {
	stroke: rgba(247, 203, 61, 0.15);
	stroke-width: 0.34;
	filter: drop-shadow(0 0 8px rgba(247, 203, 61, 0.08));
}

.hero-ecosystem__constellation-orbit--wide {
	stroke-width: 0.44;
	opacity: 0.72;
}

.hero-ecosystem__constellation-orbit--cross {
	stroke: rgba(247, 203, 61, 0.2);
	opacity: 0.58;
}

.hero-ecosystem__constellation-orbit--inner {
	stroke: rgba(255, 255, 255, 0.08);
	opacity: 0.74;
}

.hero-ecosystem__constellation-link {
	stroke: rgba(247, 203, 61, 0.18);
	stroke-dasharray: 1 3;
	stroke-width: 0.32;
	filter: drop-shadow(0 0 5px rgba(247, 203, 61, 0.16));
}

.hero-ecosystem__constellation-nodes circle {
	fill: var(--color-brand-primary);
	filter: drop-shadow(0 0 7px rgba(247, 203, 61, 0.66));
	opacity: 0.9;
	transform-box: fill-box;
	transform-origin: center;
	animation: hero-ecosystem-node-pulse 4.6s ease-in-out infinite;
}

.hero-ecosystem__constellation-nodes circle:nth-child(2n) {
	animation-delay: -1.8s;
}

.hero-ecosystem__constellation-nodes circle:nth-child(3n) {
	animation-delay: -3.1s;
}

.hero-ecosystem__constellation-specks circle {
	fill: rgba(247, 203, 61, 0.55);
	filter: drop-shadow(0 0 4px rgba(247, 203, 61, 0.36));
	opacity: 0.5;
	animation: hero-ecosystem-speck-flicker 5.4s ease-in-out infinite;
}

.hero-ecosystem__constellation-specks circle:nth-child(2n) {
	animation-delay: -2.2s;
}

.hero-ecosystem__constellation-specks circle:nth-child(3n) {
	animation-delay: -3.6s;
}

.hero-ecosystem__frame {
	position: absolute;
	z-index: 0;
	pointer-events: none;
	border: 1px solid rgba(247, 203, 61, 0.16);
	border-radius: 32px;
	opacity: 0.5;
}

.hero-ecosystem__frame--outer {
	inset: 11% 8%;
	animation: hero-ecosystem-frame-spin 50s linear infinite;
	transform: rotate(-11deg);
}

.hero-ecosystem__frame--inner {
	inset: 20% 17%;
	border-color: rgba(255, 255, 255, 0.1);
	opacity: 0.42;
	animation: hero-ecosystem-frame-spin-reverse 42s linear infinite;
	transform: rotate(8deg);
}

.hero-ecosystem__connections {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	overflow: visible;
	pointer-events: none;
}

.hero-ecosystem__connections path,
.hero-ecosystem__connections rect {
	fill: none;
	stroke: rgba(247, 203, 61, 0.28);
	stroke-width: 0.34;
	vector-effect: non-scaling-stroke;
}

.hero-ecosystem__connections path {
	stroke-dasharray: 1 3;
	filter: drop-shadow(0 0 6px rgba(247, 203, 61, 0.24));
}

.hero-ecosystem__connections rect {
	stroke: rgba(255, 255, 255, 0.08);
}

.hero-ecosystem__signal {
	fill: var(--color-brand-primary);
	filter: drop-shadow(0 0 8px rgba(247, 203, 61, 0.58));
	opacity: 0.9;
}

.hero-ecosystem__signal--one {
	animation: hero-ecosystem-signal-one 20s linear infinite;
}

.hero-ecosystem__signal--two {
	animation: hero-ecosystem-signal-two 24s linear infinite;
}

.hero-ecosystem__core,
.hero-ecosystem__module {
	display: inline-flex;
	align-items: center;
	box-sizing: border-box;
	border: 1px solid var(--color-border-default);
	border-radius: 8px;
	background: rgba(13, 16, 20, 0.74);
	color: var(--color-text-secondary);
	text-decoration: none;
	backdrop-filter: blur(16px);
}

.hero-ecosystem__core {
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 3;
	display: grid;
	justify-items: center;
	gap: 14px;
	width: 220px;
	min-height: 144px;
	padding: 22px 20px;
	border-color: var(--color-brand-border);
	background:
		linear-gradient(180deg, rgba(247, 203, 61, 0.12), rgba(13, 16, 20, 0.82)),
		rgba(13, 16, 20, 0.86);
	box-shadow:
		0 0 40px rgba(247, 203, 61, 0.24),
		inset 0 1px 0 rgba(255, 255, 255, 0.04);
	color: var(--color-text-primary);
	transform: translate(-50%, -50%);
	transition:
		translate 160ms ease,
		border-color 160ms ease,
		box-shadow 160ms ease,
		background-color 160ms ease;
}

.hero-ecosystem__core:hover,
.hero-ecosystem__core:focus-visible {
	border-color: rgba(247, 203, 61, 0.68);
	background:
		linear-gradient(180deg, rgba(247, 203, 61, 0.16), rgba(18, 22, 28, 0.88)),
		rgba(18, 22, 28, 0.92);
	box-shadow:
		0 0 52px rgba(247, 203, 61, 0.32),
		inset 0 1px 0 rgba(255, 255, 255, 0.06);
	translate: 0 -2px;
}

.hero-ecosystem__core-icon,
.hero-ecosystem__module-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;
	border: 1px solid var(--color-brand-border);
	border-radius: 7px;
	background: var(--color-brand-soft);
	box-shadow: var(--glow-brand-sm);
	color: var(--color-brand-primary);
	font-family:
		ui-sans-serif,
		system-ui,
		sans-serif;
	font-weight: 820;
	text-transform: uppercase;
}

.hero-ecosystem__core-icon {
	width: 38px;
	height: 38px;
	font-size: 0.9rem;
}

.hero-ecosystem__core-icon svg,
.hero-ecosystem__module-icon svg {
	width: 18px;
	height: 18px;
	fill: none;
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 1.8;
}

.hero-ecosystem__core-text,
.hero-ecosystem__module-text {
	display: grid;
	gap: 6px;
	min-width: 0;
}

.hero-ecosystem__core-text {
	text-align: center;
}

.hero-ecosystem__core-text strong,
.hero-ecosystem__module-text strong {
	overflow: visible;
	color: var(--color-text-primary);
	font-family:
		ui-monospace,
		SFMono-Regular,
		"SF Mono",
		Menlo,
		Monaco,
		Consolas,
		"Liberation Mono",
		monospace;
	font-weight: 760;
	line-height: 1;
	text-overflow: unset;
	white-space: nowrap;
}

.hero-ecosystem__core-text span,
.hero-ecosystem__module-text span {
	color: var(--color-text-muted);
	font-size: 0.82rem;
	line-height: 1.2;
}

.hero-ecosystem__module {
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 50%;
	gap: 12px;
	min-height: 82px;
	padding: 16px 18px;
	animation: hero-ecosystem-module-counter-orbit 64s linear infinite;
	transition:
		translate 160ms ease,
		background-color 160ms ease,
		border-color 160ms ease,
		box-shadow 160ms ease,
		color 160ms ease;
}

.hero-ecosystem__module:hover,
.hero-ecosystem__module:focus-visible {
	z-index: 4;
	border-color: var(--color-brand-border);
	background: rgba(18, 22, 28, 0.9);
	box-shadow: 0 0 32px rgba(247, 203, 61, 0.16);
	color: var(--color-text-primary);
	translate: 0 -2px;
}

.hero-ecosystem__module-icon {
	width: 32px;
	height: 32px;
	font-size: 0.78rem;
}

.hero-ecosystem__module-text strong {
	font-size: 0.9rem;
}

.hero-ecosystem__module-text span {
	white-space: nowrap;
}

.hero-ecosystem__module-chevron {
	margin-left: auto;
	color: var(--color-brand-primary);
	font-size: 1.35rem;
	line-height: 1;
	opacity: 0.78;
	transition: opacity 160ms ease;
}

.hero-ecosystem__module:hover .hero-ecosystem__module-chevron,
.hero-ecosystem__module:focus-visible .hero-ecosystem__module-chevron {
	opacity: 1;
}

.hero-ecosystem__module--server {
	top: 0%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.hero-ecosystem__module--http {
	top: 42%;
	left: 89%;
	transform: translate(-50%, -50%);
}

.hero-ecosystem__module--form {
	top: 90%;
	left: 72%;
	transform: translate(-50%, -50%);
}

.hero-ecosystem__module--jwt {
	top: 90%;
	left: 28%;
	transform: translate(-50%, -50%);
}

.hero-ecosystem__module--playwright {
	top: 42%;
	left: 11%;
	transform: translate(-50%, -50%);
}

@media (max-width: 1120px) {
	.hero-ecosystem {
		width: min(820px, 100%);
		height: 560px;
		margin: 0;
	}
}

@media (max-width: 640px) {
	.hero-ecosystem {
		display: none;
	}
}

@media (prefers-reduced-motion: reduce) {
	.hero-ecosystem__frame,
	.hero-ecosystem__signal,
	.hero-ecosystem__stage::before,
	.hero-ecosystem__constellation,
	.hero-ecosystem__constellation-nodes circle,
	.hero-ecosystem__constellation-specks circle,
	.hero-ecosystem__orbit,
	.hero-ecosystem__module {
		animation: none;
	}
}

@keyframes hero-ecosystem-orbit {
	to {
		transform: rotate(360deg);
	}
}

@keyframes hero-ecosystem-module-counter-orbit {
	to {
		transform: translate(-50%, -50%) rotate(-360deg);
	}
}

@keyframes hero-ecosystem-constellation-drift {
	to {
		transform: rotate(-360deg);
	}
}

@keyframes hero-ecosystem-stars-twinkle {
	from {
		opacity: 0.24;
	}

	to {
		opacity: 0.48;
	}
}

@keyframes hero-ecosystem-node-pulse {
	0%,
	100% {
		opacity: 0.55;
		transform: scale(0.82);
	}

	45% {
		opacity: 1;
		transform: scale(1.2);
	}
}

@keyframes hero-ecosystem-speck-flicker {
	0%,
	100% {
		opacity: 0.22;
	}

	50% {
		opacity: 0.68;
	}
}

@keyframes hero-ecosystem-frame-spin {
	to {
		transform: rotate(349deg);
	}
}

@keyframes hero-ecosystem-frame-spin-reverse {
	to {
		transform: rotate(-352deg);
	}
}

@keyframes hero-ecosystem-signal-one {
	0% {
		transform: translate(0, 0);
	}

	35% {
		transform: translate(30px, -20px);
	}

	68% {
		transform: translate(24px, 28px);
	}

	100% {
		transform: translate(0, 0);
	}
}

@keyframes hero-ecosystem-signal-two {
	0% {
		transform: translate(0, 0);
	}

	42% {
		transform: translate(-31px, -8px);
	}

	74% {
		transform: translate(-22px, 25px);
	}

	100% {
		transform: translate(0, 0);
	}
}
</style>
