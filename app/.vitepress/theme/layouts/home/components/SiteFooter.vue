<script setup lang="ts">
interface FooterLink {
	label: string;
	href: string;
	external?: boolean;
}

interface FooterColumn {
	title: string;
	links: FooterLink[];
}

interface SocialLink extends FooterLink {
	icon: "discord" | "github" | "youtube";
	ariaLabel: string;
}

const currentYear = new Date().getFullYear();

const githubHref = "https://github.com/duplojs/discover";
const discordHref = "https://discord.gg/5d6Ze5Wuqm";
const youtubeHref = "#youtube";
const npmHref = "https://www.npmjs.com/org/duplojs";

const socialLinks: SocialLink[] = [
	{
		label: "GitHub",
		href: githubHref,
		icon: "github",
		ariaLabel: "Open DuploJS on GitHub",
		external: true,
	},
	{
		label: "Discord",
		href: discordHref,
		icon: "discord",
		ariaLabel: "Join the DuploJS Discord community",
		external: true,
	},
	{
		label: "YouTube",
		href: youtubeHref,
		icon: "youtube",
		ariaLabel: "Open DuploJS YouTube resources",
	},
];

const footerColumns: FooterColumn[] = [
	{
		title: "Ecosystem",
		links: [
			{
				label: "Utils",
				href: "https://utils.duplojs.dev/",
				external: true,
			},
			{
				label: "Server Utils",
				href: "https://server-utils.duplojs.dev/",
				external: true,
			},
			{
				label: "HTTP",
				href: "https://http.duplojs.dev/",
				external: true,
			},
			{
				label: "Form",
				href: "https://form.duplojs.dev/",
				external: true,
			},
			{
				label: "JSON Web Token",
				href: "https://json-web-token.duplojs.dev/",
				external: true,
			},
			{
				label: "Playwright",
				href: "https://playwright.duplojs.dev/",
				external: true,
			},
		],
	},
	{
		title: "Resources",
		links: [
			{
				label: "Documentation",
				href: "https://duplojs.dev",
				external: true,
			},
			{
				label: "Examples",
				href: "/examples/layers/client/main",
			},
			{
				label: "Type-Driven Design Course",
				href: "https://github.com/mathcovax/type-driven-design-course/tree/main/course",
				external: true,
			},
			{
				label: "DuploJS Literature",
				href: "https://github.com/ZeRiix/duplojs-literature/tree/main",
				external: true,
			},
			{
				label: "YouTube",
				href: youtubeHref,
			},
		],
	},
	{
		title: "Community",
		links: [
			{
				label: "GitHub",
				href: githubHref,
				external: true,
			},
			{
				label: "Discord",
				href: discordHref,
				external: true,
			},
			{
				label: "npm",
				href: npmHref,
				external: true,
			},
		],
	},
	{
		title: "Project",
		links: [
			{
				label: "License",
				href: `${githubHref}/blob/main/package.json`,
				external: true,
			},
			{
				label: "Changelog",
				href: `${githubHref}/releases`,
				external: true,
			},
			{
				label: "Contributing",
				href: `${githubHref}/issues`,
				external: true,
			},
		],
	},
];
</script>

<template>
	<footer class="site-footer">
		<div class="site-footer__inner">
			<div class="site-footer__brand-column">
				<a
					class="site-footer__brand"
					href="/"
					aria-label="DuploJS home"
				>
					<img
						class="site-footer__logo"
						src="/images/logo.svg"
						alt=""
						width="42"
						height="39"
					/>

					<span>DuploJS</span>
				</a>

				<p class="site-footer__description">
					A modular TypeScript ecosystem for robust and predictable software.
				</p>

				<p class="site-footer__subtext">
					Built around robustness, predictability and type-driven design.
				</p>

				<div
					class="site-footer__socials"
					aria-label="Social links"
				>
					<a
						v-for="link in socialLinks"
						:key="link.label"
						class="site-footer__social"
						:class="{ 'site-footer__social--filled': link.icon === 'github' }"
						:href="link.href"
						:target="link.external ? '_blank' : undefined"
						:rel="link.external ? 'noreferrer' : undefined"
						:aria-label="link.ariaLabel"
					>
						<svg
							v-if="link.icon === 'github'"
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
						>
							<path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.37 9.37 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
						</svg>

						<svg
							v-else-if="link.icon === 'discord'"
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
						>
							<path d="M8.5 8.2a11.5 11.5 0 0 1 7 0" />

							<path d="M8.8 15.6c2.1 1 4.3 1 6.4 0" />

							<path d="M9.2 13.1h.01" />

							<path d="M14.8 13.1h.01" />

							<path d="M7.2 5.4C9 4.6 10.6 4.2 12 4.2s3 .4 4.8 1.2l.6 1.5c1.1.6 2 1.4 2.7 2.4-.2 3.1-1 5.5-2.5 7.4-1.2.4-2.4.5-3.7.4l-.8-1.2a8.2 8.2 0 0 1-2.2 0l-.8 1.2c-1.3.1-2.5 0-3.7-.4-1.5-1.9-2.3-4.3-2.5-7.4.7-1 1.6-1.8 2.7-2.4l.6-1.5Z" />
						</svg>

						<svg
							v-else
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
						>
							<path d="M10 9.75 15.5 12 10 14.25V9.75Z" />

							<path d="M3.5 8.6c.2-1.2 1.1-2.1 2.3-2.3C7.5 6 10 6 12 6s4.5 0 6.2.3c1.2.2 2.1 1.1 2.3 2.3.2 1 .3 2.2.3 3.4s-.1 2.4-.3 3.4c-.2 1.2-1.1 2.1-2.3 2.3-1.7.3-4.2.3-6.2.3s-4.5 0-6.2-.3c-1.2-.2-2.1-1.1-2.3-2.3-.2-1-.3-2.2-.3-3.4s.1-2.4.3-3.4Z" />
						</svg>
					</a>
				</div>
			</div>

			<nav
				class="site-footer__columns"
				aria-label="Footer navigation"
			>
				<div
					v-for="column in footerColumns"
					:key="column.title"
					class="site-footer__column"
				>
					<h2 class="site-footer__heading">
						{{ column.title }}
					</h2>

					<ul class="site-footer__list">
						<li
							v-for="link in column.links"
							:key="`${column.title}-${link.label}`"
						>
							<a
								class="site-footer__link"
								:href="link.href"
								:target="link.external ? '_blank' : undefined"
								:rel="link.external ? 'noreferrer' : undefined"
							>
								<span>{{ link.label }}</span>

								<svg
									v-if="link.external"
									viewBox="0 0 24 24"
									aria-hidden="true"
									focusable="false"
								>
									<path d="M7 17 17 7" />

									<path d="M9 7h8v8" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>

		<div class="site-footer__bottom">
			<p>© {{ currentYear }} DuploJS. All rights reserved.</p>

			<p>Built for robust and predictable TypeScript.</p>
		</div>
	</footer>
</template>

<style scoped>
.site-footer {
	position: relative;
	z-index: 1;
	overflow: hidden;
	border-top: 1px solid var(--color-border-subtle);
	background:
		linear-gradient(180deg, rgba(13, 16, 20, 0.64), transparent 34%),
		var(--color-bg-page);
	color: var(--color-text-primary);
}

.site-footer::before {
	position: absolute;
	top: 0;
	left: 50%;
	width: min(920px, 76vw);
	height: 1px;
	pointer-events: none;
	content: "";
	background: linear-gradient(90deg, transparent, rgba(247, 203, 61, 0.34), transparent);
	transform: translateX(-50%);
}

.site-footer__inner {
	display: grid;
	grid-template-columns: minmax(300px, 1.4fr) repeat(4, minmax(0, 1fr));
	gap: clamp(32px, 4.8vw, 72px);
	width: min(100%, 1480px);
	margin: 0 auto;
	padding: 72px clamp(20px, 4vw, 64px) 56px;
}

.site-footer__brand-column {
	min-width: 0;
	max-width: 430px;
}

.site-footer__brand {
	display: inline-flex;
	align-items: center;
	gap: 13px;
	color: var(--color-text-primary);
	font-weight: 780;
	font-size: 1.42rem;
	line-height: 1;
	text-decoration: none;
}

.site-footer__brand:hover,
.site-footer__brand:focus-visible {
	color: var(--color-text-primary);
}

.site-footer__logo {
	width: 42px;
	height: auto;
	filter: drop-shadow(0 0 14px rgba(247, 203, 61, 0.18));
}

.site-footer__description {
	margin: 28px 0 0;
	color: var(--color-text-primary);
	font-size: 1.03rem;
	line-height: 1.62;
}

.site-footer__subtext {
	margin: 14px 0 0;
	color: var(--color-text-muted);
	font-size: 0.95rem;
	line-height: 1.6;
}

.site-footer__socials {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 26px;
}

.site-footer__social {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border: 1px solid var(--color-border-subtle);
	border-radius: 8px;
	background: rgba(18, 22, 28, 0.58);
	color: var(--color-text-secondary);
	text-decoration: none;
	transition:
		background-color 160ms ease,
		border-color 160ms ease,
		color 160ms ease,
		transform 160ms ease;
}

.site-footer__social:hover,
.site-footer__social:focus-visible {
	border-color: rgba(247, 203, 61, 0.36);
	background: rgba(247, 203, 61, 0.08);
	color: var(--color-brand-primary);
	transform: translateY(-2px);
}

.site-footer__social svg {
	width: 19px;
	height: 19px;
	fill: none;
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 2;
}

.site-footer__social--filled svg {
	fill: currentColor;
	stroke: none;
}

.site-footer__columns {
	display: contents;
}

.site-footer__column {
	min-width: 0;
}

.site-footer__heading {
	margin: 0 0 18px;
	color: var(--color-text-primary);
	font-weight: 760;
	font-size: 0.84rem;
	line-height: 1.2;
	letter-spacing: 0.12em;
	text-transform: uppercase;
}

.site-footer__list {
	display: grid;
	gap: 9px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.site-footer__link {
	display: inline-flex;
	align-items: center;
	gap: 7px;
	max-width: 100%;
	padding: 4px 0;
	color: var(--color-text-secondary);
	font-weight: 520;
	font-size: 0.95rem;
	line-height: 1.35;
	text-decoration: none;
	transition:
		color 160ms ease,
		transform 160ms ease;
}

.site-footer__link span {
	overflow-wrap: anywhere;
}

.site-footer__link svg {
	flex: 0 0 auto;
	width: 13px;
	height: 13px;
	color: var(--color-text-muted);
	fill: none;
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 2;
	transition: color 160ms ease;
}

.site-footer__link:hover,
.site-footer__link:focus-visible {
	color: var(--color-brand-primary);
	transform: translateX(3px);
}

.site-footer__link:hover svg,
.site-footer__link:focus-visible svg {
	color: var(--color-brand-primary);
}

.site-footer__brand:focus-visible,
.site-footer__social:focus-visible,
.site-footer__link:focus-visible {
	outline: 2px solid rgba(247, 203, 61, 0.7);
	outline-offset: 4px;
}

.site-footer__bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	width: min(100%, 1480px);
	margin: 0 auto;
	padding: 24px clamp(20px, 4vw, 64px) 32px;
	border-top: 1px solid var(--color-border-subtle);
	color: var(--color-text-muted);
	font-size: 0.92rem;
	line-height: 1.5;
}

.site-footer__bottom p {
	margin: 0;
}

@media (prefers-reduced-motion: reduce) {
	.site-footer__social,
	.site-footer__link,
	.site-footer__link svg {
		transition: none;
	}
}

@media (max-width: 1180px) {
	.site-footer__inner {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.site-footer__brand-column {
		grid-column: 1 / -1;
		max-width: 640px;
	}
}

@media (max-width: 820px) {
	.site-footer__inner {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		padding-top: 58px;
	}

	.site-footer__bottom {
		align-items: flex-start;
		flex-direction: column;
	}
}

@media (max-width: 560px) {
	.site-footer__inner {
		grid-template-columns: 1fr;
		gap: 34px;
		padding: 48px 20px 44px;
	}

	.site-footer__description {
		margin-top: 24px;
	}

	.site-footer__link {
		min-height: 34px;
	}

	.site-footer__bottom {
		padding: 22px 20px 28px;
	}
}
</style>
