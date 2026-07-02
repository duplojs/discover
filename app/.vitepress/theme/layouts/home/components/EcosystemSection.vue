<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import TypingInstallCommand from "./TypingInstallCommand.vue";

const packageItems = [
	{
		name: "@duplojs/utils",
		badge: "FOUNDATION",
		description: "Functional primitives and predictable utilities for TypeScript.",
		docsHref: "https://utils.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/utils",
		command: "npm i @duplojs/utils",
		icon: "package",
		featured: true,
	},
	{
		name: "@duplojs/server-utils",
		badge: "SERVER",
		description: "Utilities for Node.js runtimes, servers and backend applications.",
		docsHref: "https://server-utils.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/server-utils",
		command: "npm i @duplojs/server-utils",
		icon: "server",
		featured: false,
	},
	{
		name: "@duplojs/http",
		badge: "HTTP",
		description: "Type-safe HTTP client and server utilities.",
		docsHref: "https://http.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/http",
		command: "npm i @duplojs/http",
		icon: "globe",
		featured: false,
	},
	{
		name: "@duplojs/form",
		badge: "FORM",
		description: "Form validation and schema helpers for client and server.",
		docsHref: "https://form.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/form",
		command: "npm i @duplojs/form",
		icon: "form",
		featured: false,
	},
	{
		name: "@duplojs/json-web-token",
		badge: "AUTH",
		description: "JWT signing, verification and helpers made simple.",
		docsHref: "https://json-web-token.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/json-web-token",
		command: "npm i @duplojs/json-web-token",
		icon: "key",
		featured: false,
	},
	{
		name: "@duplojs/playwright",
		badge: "TESTING",
		description: "Playwright utilities and testing helpers for end-to-end tests.",
		docsHref: "https://playwright.duplojs.dev",
		npmHref: "https://www.npmjs.com/package/@duplojs/playwright",
		command: "npm i @duplojs/playwright",
		icon: "play",
		featured: false,
	},
];

const argumentsList = [
	{
		title: "Use one package",
		description: "Every package can be used independently.",
	},
	{
		title: "Compose the ecosystem",
		description: "Add only what you need, when you need it.",
	},
];

const benefits = [
	"6+ Packages",
	"100% TypeScript",
	"Type-driven design",
	"Composable by design",
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
					DuploJS is a modular ecosystem of TypeScript packages. Start with @duplojs/utils, then add focused packages when your application grows.
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
							<svg
								viewBox="0 0 24 24"
								focusable="false"
							>
								<path d="M5 12h14" />

								<path d="m13 6 6 6-6 6" />
							</svg>
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
							<svg
								v-if="packageItem.icon === 'package'"
								viewBox="0 0 24 24"
								focusable="false"
							>
								<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />

								<path d="M4 7.5 12 12l8-4.5" />

								<path d="M12 12v9" />
							</svg>

							<svg
								v-else-if="packageItem.icon === 'server'"
								viewBox="0 0 24 24"
								focusable="false"
							>
								<path d="M4 5h16v5H4z" />

								<path d="M4 14h16v5H4z" />

								<path d="M8 7.5h.01" />

								<path d="M8 16.5h.01" />
							</svg>

							<svg
								v-else-if="packageItem.icon === 'globe'"
								viewBox="0 0 24 24"
								focusable="false"
							>
								<circle
									cx="12"
									cy="12"
									r="8"
								/>

								<path d="M4 12h16" />

								<path d="M12 4c2.2 2.2 3.2 4.8 3.2 8S14.2 17.8 12 20" />

								<path d="M12 4c-2.2 2.2-3.2 4.8-3.2 8s1 5.8 3.2 8" />
							</svg>

							<svg
								v-else-if="packageItem.icon === 'form'"
								viewBox="0 0 24 24"
								focusable="false"
							>
								<path d="M7 4h10v16H7z" />

								<path d="M9 8h6" />

								<path d="M9 12h6" />

								<path d="M9 16h3" />
							</svg>

							<svg
								v-else-if="packageItem.icon === 'key'"
								viewBox="0 0 24 24"
								focusable="false"
							>
								<circle
									cx="8"
									cy="15"
									r="3"
								/>

								<path d="M10.5 12.5 18 5" />

								<path d="M15.5 7.5 18 10" />

								<path d="M13.5 9.5 16 12" />
							</svg>

							<svg
								v-else
								viewBox="0 0 24 24"
								focusable="false"
							>
								<path d="M8 5v14l11-7z" />

								<path d="M4 5h1" />

								<path d="M4 12h1" />

								<path d="M4 19h1" />
							</svg>
						</span>

						<span class="ecosystem-section__package-title">
							<strong>{{ packageItem.name }}</strong>

							<span>{{ packageItem.badge }}</span>
						</span>

						<span
							class="ecosystem-section__package-chevron"
							aria-hidden="true"
						>
							&gt;
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
							<svg
								viewBox="0 0 24 24"
								aria-hidden="true"
								focusable="false"
							>
								<path d="M7 17 17 7" />

								<path d="M9 7h8v8" />

								<path d="M5 5h7" />

								<path d="M5 5v14h14v-7" />
							</svg>

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
							<svg
								viewBox="0 0 24 24"
								aria-hidden="true"
								focusable="false"
							>
								<path d="M8 8h11v11H8z" />

								<path d="M5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1" />
							</svg>

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
	padding: 16px 18px;
	border: 1px solid rgba(255, 255, 255, 0.07);
	border-radius: 10px;
	background: rgba(13, 16, 20, 0.44);
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
	min-height: 268px;
	border-color: rgba(247, 203, 61, 0.5);
	background:
		linear-gradient(180deg, rgba(247, 203, 61, 0.12), rgba(13, 16, 20, 0.78)),
		var(--color-bg-surface);
	box-shadow:
		0 24px 76px rgba(0, 0, 0, 0.28),
		0 0 40px rgba(247, 203, 61, 0.13);
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
	color: var(--color-brand-primary);
	font-size: 1.25rem;
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
	grid-template-columns: repeat(4, minmax(0, 1fr));
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
