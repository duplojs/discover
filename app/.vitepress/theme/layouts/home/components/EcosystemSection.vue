<script setup lang="ts">
import {
	ArrowRight,
	Clipboard,
	ExternalLink,
	FileText,
	Globe2,
	KeyRound,
	Package,
	Play,
	Server,
} from "@lucide/vue";
import { onBeforeUnmount, ref } from "vue";
import TypingInstallCommand from "./TypingInstallCommand.vue";

const packageItems = [
	{
		name: "@duplojs/utils",
		badge: "FOUNDATION",
		description: "Core functional primitives for transformations, object handling and readable TypeScript flows.",
		docsHref: "https://utils.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/utils",
		command: "npm i @duplojs/utils",
		icon: Package,
		featured: true,
	},
	{
		name: "@duplojs/server-utils",
		badge: "BACKEND CORE",
		description: "Server-side helpers for Node runtimes, adapters and backend boundaries.",
		docsHref: "https://server-utils.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/server-utils",
		command: "npm i @duplojs/server-utils",
		icon: Server,
		featured: true,
	},
	{
		name: "@duplojs/http",
		badge: "HTTP CORE",
		description: "HTTP contracts and helpers for request, response and integration flows.",
		docsHref: "https://http.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/http",
		command: "npm i @duplojs/http",
		icon: Globe2,
		featured: true,
	},
	{
		name: "@duplojs/form",
		badge: "FORM",
		description: "Form validation and schema helpers for client and server inputs.",
		docsHref: "https://form.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/form",
		command: "npm i @duplojs/form",
		icon: FileText,
		featured: false,
	},
	{
		name: "@duplojs/json-web-token",
		badge: "AUTH",
		description: "JWT signing, verification and authentication helpers.",
		docsHref: "https://json-web-token.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/json-web-token",
		command: "npm i @duplojs/json-web-token",
		icon: KeyRound,
		featured: false,
	},
	{
		name: "@duplojs/playwright",
		badge: "TESTING",
		description: "Testing helpers for reusable Playwright end-to-end flows.",
		docsHref: "https://playwright.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/playwright",
		command: "npm i @duplojs/playwright",
		icon: Play,
		featured: false,
	},
];

const argumentsList = [
	{
		title: "Install only the brick you need",
		description: "Each package is independently documented and versioned.",
	},
	{
		title: "Add the next boundary later",
		description: "Utilities, server helpers and HTTP flows share the same design language.",
	},
];

const benefits = [
	"Core packages first",
	"Focused add-ons",
	"Install separately",
];

const copiedPackage = ref<string | undefined>();
let copiedTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

async function copyCommand(packageName: string, command: string) {
	if (typeof navigator === "undefined" || navigator.clipboard === undefined) {
		return;
	}

	await navigator.clipboard.writeText(command);
	copiedPackage.value = packageName;

	if (copiedTimeout !== undefined) {
		clearTimeout(copiedTimeout);
	}

	copiedTimeout = setTimeout(() => {
		copiedPackage.value = undefined;
	}, 1600);
}

onBeforeUnmount(() => {
	if (copiedTimeout !== undefined) {
		clearTimeout(copiedTimeout);
	}
});
</script>

<template>
	<section
		id="packages"
		class="ecosystem-section"
	>
		<div class="ecosystem-section__decor ecosystem-section__decor--one" />

		<div class="ecosystem-section__decor ecosystem-section__decor--two" />

		<div class="ecosystem-section__inner">
			<div class="ecosystem-section__copy">
				<p class="ecosystem-section__eyebrow">
					<span aria-hidden="true" />

					THE ECOSYSTEM
				</p>

				<h2 class="ecosystem-section__title">
					<span>Focused packages.</span>

					<span>Same philosophy.</span>
				</h2>

				<p class="ecosystem-section__description">
					Start with the foundation, then add server, HTTP, form, auth or testing packages only when that part of the application needs a stronger boundary.
				</p>

				<TypingInstallCommand class="ecosystem-section__terminal" />

				<div class="ecosystem-section__arguments">
					<div
						v-for="argumentItem in argumentsList"
						:key="argumentItem.title"
						class="ecosystem-section__argument"
					>
						<span
							class="ecosystem-section__argument-icon"
							aria-hidden="true"
						>
							<ArrowRight
								:size="15"
								:stroke-width="2"
							/>
						</span>

						<span>
							<strong>{{ argumentItem.title }}</strong>

							<small>{{ argumentItem.description }}</small>
						</span>
					</div>
				</div>
			</div>

			<div
				class="ecosystem-section__packages"
				aria-label="DuploJS packages"
			>
				<article
					v-for="packageItem in packageItems"
					:key="packageItem.name"
					class="ecosystem-section__package-card"
					:class="{ 'ecosystem-section__package-card--featured': packageItem.featured }"
				>
					<div class="ecosystem-section__package-head">
						<span
							class="ecosystem-section__package-icon"
							aria-hidden="true"
						>
							<component
								:is="packageItem.icon"
								:size="18"
								:stroke-width="1.8"
							/>
						</span>

						<span class="ecosystem-section__package-title">
							<strong>{{ packageItem.name }}</strong>

							<span>{{ packageItem.badge }}</span>
						</span>

						<span
							class="ecosystem-section__package-chevron"
							aria-hidden="true"
						>
							<ArrowRight
								:size="18"
								:stroke-width="2"
							/>
						</span>
					</div>

					<p class="ecosystem-section__package-description">
						{{ packageItem.description }}
					</p>

					<div class="ecosystem-section__package-actions">
						<a
							class="ecosystem-section__package-action"
							:href="packageItem.docsHref"
							target="_blank"
							rel="noreferrer"
						>
							<ExternalLink
								:size="16"
								:stroke-width="2"
								aria-hidden="true"
							/>

							Docs
						</a>

						<a
							class="ecosystem-section__package-action"
							:href="packageItem.npmHref"
							target="_blank"
							rel="noreferrer"
						>
							npm
						</a>

						<button
							class="ecosystem-section__package-action ecosystem-section__package-action--copy"
							type="button"
							:aria-label="`Copy ${packageItem.command}`"
							@click="copyCommand(packageItem.name, packageItem.command)"
						>
							<Clipboard
								:size="16"
								:stroke-width="2"
								aria-hidden="true"
							/>

							{{ copiedPackage === packageItem.name ? "Copied" : "npm i" }}
						</button>
					</div>
				</article>
			</div>

			<ul
				class="ecosystem-section__benefits"
				aria-label="Ecosystem benefits"
			>
				<li
					v-for="benefit in benefits"
					:key="benefit"
				>
					<span aria-hidden="true" />

					{{ benefit }}
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.ecosystem-section {
	position: relative;
	z-index: 1;
	overflow: hidden;
	padding: 132px clamp(20px, 4vw, 64px) 104px;
	background:
		radial-gradient(circle at 50% 0%, rgba(247, 203, 61, 0.16), transparent 32%),
		linear-gradient(180deg, #050608 0%, #080A0D 100%);
	color: var(--color-text-primary);
}

.ecosystem-section::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background-image:
		linear-gradient(rgba(255, 255, 255, 0.026) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255, 255, 255, 0.026) 1px, transparent 1px);
	background-position: center top;
	background-size: 72px 72px;
	mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.26) 48%, transparent 88%);
}

.ecosystem-section::after {
	position: absolute;
	top: 0;
	left: 50%;
	width: min(920px, 76vw);
	height: 1px;
	transform: translateX(-50%);
	pointer-events: none;
	content: "";
	background: linear-gradient(90deg, transparent, rgba(247, 203, 61, 0.58), transparent);
	box-shadow: 0 0 36px rgba(247, 203, 61, 0.18);
}

.ecosystem-section__decor {
	position: absolute;
	pointer-events: none;
	border: 1px solid rgba(247, 203, 61, 0.11);
	border-radius: 18px;
	opacity: 0.48;
}

.ecosystem-section__decor--one {
	top: 86px;
	right: 8%;
	width: 164px;
	height: 164px;
	transform: rotate(14deg);
}

.ecosystem-section__decor--two {
	bottom: 112px;
	left: 5%;
	width: 118px;
	height: 118px;
	border-color: rgba(255, 255, 255, 0.07);
	transform: rotate(-10deg);
}

.ecosystem-section__inner {
	position: relative;
	z-index: 1;
	display: grid;
	grid-template-columns: minmax(360px, 0.72fr) minmax(0, 1fr);
	gap: clamp(48px, 6vw, 92px);
	width: min(100%, 1480px);
	margin: 0 auto;
}

.ecosystem-section__copy {
	min-width: 0;
	max-width: 610px;
}

.ecosystem-section__eyebrow {
	display: inline-flex;
	align-items: center;
	gap: 14px;
	margin: 0 0 28px;
	color: var(--color-brand-primary);
	font-weight: 820;
	font-size: 0.88rem;
	line-height: 1.2;
	letter-spacing: 0.2em;
	text-transform: uppercase;
}

.ecosystem-section__eyebrow span {
	display: block;
	width: 2px;
	height: 28px;
	background: var(--color-brand-primary);
	box-shadow: var(--glow-brand-sm);
}

.ecosystem-section__title {
	margin: 0;
	color: var(--color-text-primary);
	font-weight: 840;
	font-size: clamp(3rem, 2.35rem + 2.1vw, 4.35rem);
	line-height: 1.02;
	letter-spacing: 0;
	text-wrap: balance;
}

.ecosystem-section__title span {
	display: block;
}

.ecosystem-section__description {
	max-width: 590px;
	margin: 28px 0 0;
	color: var(--color-text-secondary);
	font-size: clamp(1.04rem, 0.98rem + 0.26vw, 1.2rem);
	line-height: 1.62;
}

.ecosystem-section__terminal {
	margin-top: 36px;
}

.ecosystem-section__arguments {
	display: grid;
	gap: 14px;
	margin-top: 22px;
}

.ecosystem-section__argument {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 14px;
	align-items: start;
	padding: 0;
	border: 0;
	background: transparent;
}

.ecosystem-section__argument-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
	border: 1px solid var(--color-brand-border);
	border-radius: 7px;
	background: var(--color-brand-soft);
	color: var(--color-brand-primary);
	box-shadow: 0 0 14px rgba(247, 203, 61, 0.14);
}

.ecosystem-section__argument-icon svg {
	width: 15px;
	height: 15px;
	fill: none;
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 2;
}

.ecosystem-section__argument strong,
.ecosystem-section__argument small {
	display: block;
}

.ecosystem-section__argument strong {
	color: var(--color-text-primary);
	font-weight: 760;
	font-size: 1rem;
	line-height: 1.28;
}

.ecosystem-section__argument small {
	margin-top: 5px;
	color: var(--color-text-muted);
	font-size: 0.92rem;
	line-height: 1.45;
}

.ecosystem-section__packages {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 18px;
	min-width: 0;
}

.ecosystem-section__package-card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	min-height: 244px;
	padding: 22px;
	overflow: hidden;
	border: 1px solid var(--color-border-subtle);
	border-radius: 8px;
	background:
		linear-gradient(180deg, rgba(18, 22, 28, 0.72), rgba(13, 16, 20, 0.74)),
		var(--color-bg-surface);
	box-shadow: 0 18px 54px rgba(0, 0, 0, 0.2);
	transition:
		border-color 180ms ease,
		box-shadow 180ms ease,
		transform 180ms ease,
		background-color 180ms ease;
}

.ecosystem-section__package-card::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background:
		linear-gradient(135deg, rgba(247, 203, 61, 0.09), transparent 42%),
		radial-gradient(circle at 88% 12%, rgba(247, 203, 61, 0.08), transparent 32%);
	opacity: 0;
	transition: opacity 180ms ease;
}

.ecosystem-section__package-card:hover,
.ecosystem-section__package-card:focus-within {
	border-color: var(--color-brand-border);
	background-color: var(--color-bg-surface-hover);
	box-shadow:
		0 26px 72px rgba(0, 0, 0, 0.3),
		0 0 34px rgba(247, 203, 61, 0.12);
	transform: translateY(-3px);
}

.ecosystem-section__package-card:hover::before,
.ecosystem-section__package-card:focus-within::before {
	opacity: 1;
}

.ecosystem-section__package-card--featured {
	min-height: 244px;
	border-color: rgba(247, 203, 61, 0.38);
	background:
		linear-gradient(180deg, rgba(247, 203, 61, 0.1), rgba(13, 16, 20, 0.78)),
		var(--color-bg-surface);
	box-shadow:
		0 22px 68px rgba(0, 0, 0, 0.26),
		0 0 34px rgba(247, 203, 61, 0.1);
}

.ecosystem-section__package-card--featured:first-child {
	grid-column: 1 / -1;
	min-height: 214px;
}

.ecosystem-section__package-head {
	position: relative;
	z-index: 1;
	display: grid;
	grid-template-columns: auto minmax(0, 1fr) auto;
	gap: 14px;
	align-items: start;
}

.ecosystem-section__package-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border: 1px solid var(--color-brand-border);
	border-radius: 8px;
	background: var(--color-brand-soft);
	color: var(--color-brand-primary);
	box-shadow: var(--glow-brand-sm);
}

.ecosystem-section__package-icon svg,
.ecosystem-section__package-action svg {
	width: 18px;
	height: 18px;
	fill: none;
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 1.8;
}

.ecosystem-section__package-title {
	display: grid;
	gap: 10px;
	min-width: 0;
}

.ecosystem-section__package-title strong {
	display: block;
	overflow-wrap: anywhere;
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
	font-size: clamp(0.96rem, 0.84rem + 0.32vw, 1.08rem);
	line-height: 1.25;
}

.ecosystem-section__package-title span {
	width: max-content;
	max-width: 100%;
	padding: 5px 8px;
	border: 1px solid rgba(247, 203, 61, 0.26);
	border-radius: 999px;
	background: rgba(247, 203, 61, 0.08);
	color: var(--color-brand-primary);
	font-weight: 780;
	font-size: 0.68rem;
	line-height: 1;
	letter-spacing: 0.08em;
}

.ecosystem-section__package-chevron {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: var(--color-brand-primary);
	line-height: 1;
	opacity: 0.56;
	transition:
		opacity 180ms ease,
		transform 180ms ease;
}

.ecosystem-section__package-description {
	position: relative;
	z-index: 1;
	flex: 1 1 auto;
	margin: 20px 0 0;
	color: var(--color-text-secondary);
	font-size: 0.98rem;
	line-height: 1.56;
}

.ecosystem-section__package-actions {
	position: relative;
	z-index: 1;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 24px;
	opacity: 0.86;
	transition: opacity 180ms ease;
}

.ecosystem-section__package-action {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-height: 36px;
	padding: 0 12px;
	border: 1px solid rgba(255, 255, 255, 0.09);
	border-radius: 7px;
	background: rgba(8, 10, 13, 0.54);
	color: var(--color-text-secondary);
	font: inherit;
	font-weight: 720;
	font-size: 0.86rem;
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	transition:
		border-color 160ms ease,
		background-color 160ms ease,
		color 160ms ease;
}

.ecosystem-section__package-action:hover,
.ecosystem-section__package-action:focus-visible {
	border-color: var(--color-brand-border);
	background: rgba(247, 203, 61, 0.1);
	color: var(--color-brand-primary);
}

.ecosystem-section__package-card:hover .ecosystem-section__package-chevron,
.ecosystem-section__package-card:focus-within .ecosystem-section__package-chevron {
	opacity: 1;
	transform: translateX(3px);
}

.ecosystem-section__package-card:hover .ecosystem-section__package-actions,
.ecosystem-section__package-card:focus-within .ecosystem-section__package-actions {
	opacity: 1;
}

.ecosystem-section__benefits {
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin: 16px 0 0;
	padding: 18px 0 0;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	list-style: none;
}

.ecosystem-section__benefits li {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	min-height: 38px;
	padding: 0 18px;
	border-right: 1px solid rgba(255, 255, 255, 0.08);
	color: var(--color-text-secondary);
	font-weight: 680;
	font-size: 0.94rem;
	line-height: 1.3;
	text-align: center;
}

.ecosystem-section__benefits li:last-child {
	border-right: 0;
}

.ecosystem-section__benefits span {
	flex: 0 0 auto;
	width: 7px;
	height: 7px;
	border: 1px solid var(--color-brand-primary);
	border-radius: 999px;
	background: var(--color-brand-soft);
	box-shadow: 0 0 12px rgba(247, 203, 61, 0.28);
}

@media (max-width: 1180px) {
	.ecosystem-section {
		padding-top: 108px;
	}

	.ecosystem-section__inner {
		grid-template-columns: 1fr;
		gap: 44px;
	}

	.ecosystem-section__copy {
		max-width: 820px;
	}

	.ecosystem-section__packages {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (max-width: 760px) {
	.ecosystem-section {
		padding: 82px 20px 74px;
	}

	.ecosystem-section__decor {
		display: none;
	}

	.ecosystem-section__eyebrow {
		margin-bottom: 22px;
		font-size: 0.8rem;
		letter-spacing: 0.16em;
	}

	.ecosystem-section__title {
		font-size: 3rem;
	}

	.ecosystem-section__title span {
		display: inline;
	}

	.ecosystem-section__description {
		margin-top: 24px;
	}

	.ecosystem-section__packages,
	.ecosystem-section__benefits {
		grid-template-columns: 1fr;
	}

	.ecosystem-section__package-card,
	.ecosystem-section__package-card--featured {
		min-height: auto;
		padding: 20px;
	}

	.ecosystem-section__benefits {
		gap: 10px;
		padding-top: 20px;
	}

	.ecosystem-section__benefits li {
		justify-content: flex-start;
		padding: 0;
		border-right: 0;
		text-align: left;
	}
}

@media (max-width: 460px) {
	.ecosystem-section__title {
		font-size: 2.55rem;
	}

	.ecosystem-section__package-head {
		grid-template-columns: auto minmax(0, 1fr);
	}

	.ecosystem-section__package-chevron {
		display: none;
	}
}

@media (prefers-reduced-motion: reduce) {
	.ecosystem-section__package-card,
	.ecosystem-section__package-card::before,
	.ecosystem-section__package-actions,
	.ecosystem-section__package-chevron,
	.ecosystem-section__package-action {
		transition: none;
	}

	.ecosystem-section__package-card:hover,
	.ecosystem-section__package-card:focus-within {
		transform: none;
	}
}
</style>
