<script setup lang="ts">
import MdiIcon from "../../../components/MdiIcon.vue";
import { mdiOpenInNew, resourceIconPaths, type ResourceIcon } from "../../../icons/mdi";

type LinkVariant = "primary" | "secondary";

interface CommunityAction {
	label: string;
	href: string;
	variant: LinkVariant;
	icon: ResourceIcon;
	ariaLabel: string;
	external: boolean;
}

interface ResourceLink {
	id: string;
	label: string;
	description: string;
	href: string;
	icon: ResourceIcon;
	ariaLabel: string;
	external: boolean;
}

interface FeaturedResource {
	label: string;
	title: string;
	description: string;
	href: string;
	ariaLabel: string;
}

interface CommunitySection {
	eyebrow: string;
	title: string;
	description: string;
	tags: string[];
	primaryAction: CommunityAction;
	secondaryAction: CommunityAction;
	featured: FeaturedResource;
	links: ResourceLink[];
}

const communitySection = {
	eyebrow: "Community",
	title: "Join the DuploJS community",
	description: "Follow the project, join discussions, watch new content, and help shape the ecosystem around TypeScript-first backend development.",
	tags: [
		"Open source",
		"Discord community",
		"Project updates",
		"Architecture discussions",
		"TypeScript ecosystem",
	],
	primaryAction: {
		label: "Join Discord",
		href: "https://discord.gg/5d6Ze5Wuqm",
		variant: "primary",
		icon: "discord",
		ariaLabel: "Join the DuploJS Discord community",
		external: true,
	},
	secondaryAction: {
		label: "Follow on GitHub",
		href: "https://github.com/duplojs",
		variant: "secondary",
		icon: "github",
		ariaLabel: "Open the DuploJS GitHub organization",
		external: true,
	},
	featured: {
		label: "YouTube",
		title: "Follow DuploJS in video",
		description: "Watch videos about TypeScript, backend architecture, DuploJS internals, and the ideas behind the ecosystem.",
		href: "https://www.youtube.com/@duplojs",
		ariaLabel: "Open DuploJS on YouTube",
	},
	links: [
		{
			id: "linkedin",
			label: "LinkedIn",
			description: "Follow announcements, articles, and ecosystem updates.",
			href: "https://www.linkedin.com/company/duplojs",
			icon: "linkedin",
			ariaLabel: "Open DuploJS on LinkedIn",
			external: true,
		},
		{
			id: "x",
			label: "X",
			description: "Follow quick updates, releases, and ongoing experiments.",
			href: "https://x.com/duplojs",
			icon: "x",
			ariaLabel: "Open DuploJS on X",
			external: true,
		},
		{
			id: "reddit",
			label: "Reddit",
			description: "Start longer discussions, share feedback, and suggest ideas.",
			href: "https://www.reddit.com/r/DuploJS/",
			icon: "reddit",
			ariaLabel: "Open the DuploJS subreddit",
			external: true,
		},
		{
			id: "twitch",
			label: "Twitch",
			description: "Follow live sessions around the development of the ecosystem.",
			href: "https://www.twitch.tv/duplojs",
			icon: "twitch",
			ariaLabel: "Open DuploJS on Twitch",
			external: true,
		},
	],
} satisfies CommunitySection;

const communityActions = [
	communitySection.primaryAction,
	communitySection.secondaryAction,
] satisfies CommunityAction[];
</script>

<template>
	<section
		id="community"
		class="resources-community"
	>
		<div class="resources-community__line resources-community__line--top" />

		<div class="resources-community__line resources-community__line--side" />

		<div class="resources-community__inner">
			<div class="resources-community__copy">
				<p class="resources-community__eyebrow">
					<span aria-hidden="true" />

					{{ communitySection.eyebrow }}
				</p>

				<h2 class="resources-community__title">
					{{ communitySection.title }}
				</h2>

				<p class="resources-community__intro">
					{{ communitySection.description }}
				</p>

				<div class="resources-community__principles">
					<span
						v-for="tag in communitySection.tags"
						:key="tag"
					>
						{{ tag }}
					</span>
				</div>

				<div
					class="resources-community__actions"
					aria-label="Community links"
				>
					<a
						v-for="link in communityActions"
						:key="link.label"
						class="resources-community__cta"
						:class="`resources-community__cta--${link.variant}`"
						:href="link.href"
						:target="link.external ? '_blank' : undefined"
						:rel="link.external ? 'noreferrer' : undefined"
						:aria-label="link.ariaLabel"
					>
						<span
							class="resources-community__cta-icon"
							aria-hidden="true"
						>
							<MdiIcon :path="resourceIconPaths[link.icon]" />
						</span>

						{{ link.label }}
					</a>
				</div>

				<p class="resources-community__note">
					Open source channels for builders who want to follow, discuss and contribute.
				</p>
			</div>

			<div class="resources-community__resources">
				<a
					id="youtube"
					class="resources-community__video-card"
					:href="communitySection.featured.href"
					target="_blank"
					rel="noreferrer"
					:aria-label="communitySection.featured.ariaLabel"
				>
					<div
						class="resources-community__video-preview"
						aria-hidden="true"
					>
						<div class="resources-community__video-code">
							<span>TypeScript-first backend architecture</span>

							<span>DuploJS internals and ecosystem ideas</span>

							<span>Project videos, talks and design notes</span>
						</div>

						<span class="resources-community__youtube-badge">{{ communitySection.featured.label }}</span>

						<span class="resources-community__play">
							<MdiIcon :path="resourceIconPaths.youtube" />
						</span>
					</div>

					<div class="resources-community__video-copy">
						<div>
							<h3>{{ communitySection.featured.title }}</h3>

							<p>{{ communitySection.featured.description }}</p>
						</div>

						<span class="resources-community__video-action">
							Watch on {{ communitySection.featured.label }}

							<MdiIcon :path="mdiOpenInNew" />
						</span>
					</div>
				</a>

				<div
					class="resources-community__grid"
					aria-label="DuploJS community channels"
				>
					<a
						v-for="resource in communitySection.links"
						:key="resource.id"
						class="resources-community__resource-card"
						:href="resource.href"
						:target="resource.external ? '_blank' : undefined"
						:rel="resource.external ? 'noreferrer' : undefined"
						:aria-label="resource.ariaLabel"
					>
						<span
							class="resources-community__resource-icon"
							aria-hidden="true"
						>
							<MdiIcon :path="resourceIconPaths[resource.icon]" />
						</span>

						<span class="resources-community__resource-copy">
							<strong>{{ resource.label }}</strong>

							<small>{{ resource.description }}</small>
						</span>

						<span
							class="resources-community__resource-arrow"
							aria-hidden="true"
						>
							<MdiIcon :path="mdiOpenInNew" />
						</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.resources-community {
	position: relative;
	z-index: 1;
	overflow: hidden;
	scroll-margin-top: 108px;
	padding: 124px clamp(20px, 4vw, 64px) 128px;
	background:
		radial-gradient(circle at 22% 4%, rgba(247, 203, 61, 0.11), transparent 28%),
		radial-gradient(circle at 78% 34%, rgba(247, 203, 61, 0.06), transparent 30%),
		linear-gradient(180deg, #080A0D 0%, var(--color-bg-page) 48%, #050608 100%);
	color: var(--color-text-primary);
}

.resources-community::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background-image:
		linear-gradient(rgba(255, 255, 255, 0.026) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255, 255, 255, 0.026) 1px, transparent 1px);
	background-position: center top;
	background-size: 72px 72px;
	mask-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.48) 22%, rgba(0, 0, 0, 0.28) 72%, transparent);
}

.resources-community::after {
	position: absolute;
	inset: auto 0 0;
	height: 120px;
	pointer-events: none;
	content: "";
	background: linear-gradient(180deg, transparent, rgba(5, 6, 8, 0.92));
}

.resources-community__line {
	position: absolute;
	pointer-events: none;
	background: rgba(247, 203, 61, 0.34);
	box-shadow: 0 0 28px rgba(247, 203, 61, 0.14);
}

.resources-community__line--top {
	top: 0;
	left: 50%;
	width: min(820px, 70vw);
	height: 1px;
	transform: translateX(-50%);
	background: linear-gradient(90deg, transparent, rgba(247, 203, 61, 0.44), transparent);
}

.resources-community__line--side {
	right: 10%;
	bottom: 116px;
	width: 1px;
	height: 190px;
	background: linear-gradient(180deg, transparent, rgba(247, 203, 61, 0.28), transparent);
}

.resources-community__inner {
	position: relative;
	z-index: 1;
	display: grid;
	grid-template-columns: minmax(340px, 0.78fr) minmax(0, 1fr);
	gap: clamp(44px, 6vw, 88px);
	width: min(100%, 1480px);
	margin: 0 auto;
}

.resources-community__copy {
	align-self: center;
	min-width: 0;
	max-width: 640px;
}

.resources-community__eyebrow {
	display: inline-flex;
	align-items: center;
	gap: 14px;
	margin: 0 0 26px;
	color: var(--color-brand-primary);
	font-weight: 820;
	font-size: 0.88rem;
	line-height: 1.2;
	letter-spacing: 0.18em;
	text-transform: uppercase;
}

.resources-community__eyebrow span {
	display: block;
	width: 2px;
	height: 28px;
	background: var(--color-brand-primary);
	box-shadow: var(--glow-brand-sm);
}

.resources-community__title {
	max-width: 680px;
	margin: 0;
	color: var(--color-text-primary);
	font-weight: 840;
	font-size: clamp(3rem, 2.36rem + 2vw, 4.25rem);
	line-height: 1.02;
	letter-spacing: 0;
	text-wrap: balance;
}

.resources-community__intro {
	max-width: 610px;
	margin: 18px 0 0;
	color: var(--color-text-secondary);
	font-size: clamp(1.04rem, 0.98rem + 0.26vw, 1.18rem);
	line-height: 1.62;
}

.resources-community__principles {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 28px;
}

.resources-community__principles span {
	display: inline-flex;
	align-items: center;
	min-height: 34px;
	padding: 0 12px;
	border: 1px solid rgba(247, 203, 61, 0.22);
	border-radius: 999px;
	background: rgba(247, 203, 61, 0.07);
	color: var(--color-text-secondary);
	font-weight: 680;
	font-size: 0.84rem;
	line-height: 1;
}

.resources-community__actions {
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
	margin-top: 36px;
}

.resources-community__cta {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	min-height: 52px;
	padding: 0 22px;
	border-radius: 8px;
	font-weight: 760;
	font-size: 1rem;
	line-height: 1;
	text-decoration: none;
	transition:
		background-color 160ms ease,
		border-color 160ms ease,
		box-shadow 160ms ease,
		color 160ms ease,
		transform 160ms ease;
}

.resources-community__cta:hover,
.resources-community__cta:focus-visible {
	transform: translateY(-2px);
}

.resources-community__cta--primary {
	border: 1px solid transparent;
	background: var(--button-primary-bg);
	box-shadow: var(--button-primary-shadow);
	color: var(--button-primary-text);
}

.resources-community__cta--primary:hover,
.resources-community__cta--primary:focus-visible {
	background: var(--button-primary-bg-hover);
	color: var(--button-primary-text);
	box-shadow:
		var(--button-primary-shadow),
		0 18px 42px rgba(0, 0, 0, 0.24);
}

.resources-community__cta--secondary {
	border: 1px solid var(--button-secondary-border);
	background: var(--button-secondary-bg);
	color: var(--button-secondary-text);
}

.resources-community__cta--secondary:hover,
.resources-community__cta--secondary:focus-visible {
	background: var(--button-secondary-bg-hover);
	color: var(--color-brand-primary);
	box-shadow: 0 0 28px rgba(247, 203, 61, 0.12);
}

.resources-community__cta-icon {
	display: inline-flex;
	width: 19px;
	height: 19px;
}

.resources-community__cta-icon svg,
.resources-community__resource-icon svg,
.resources-community__resource-arrow svg,
.resources-community__video-action svg {
	width: 100%;
	height: 100%;
	fill: currentColor;
	stroke: none;
}

.resources-community__note {
	max-width: 520px;
	margin: 18px 0 0;
	color: var(--color-text-muted);
	font-size: 0.96rem;
	line-height: 1.55;
}

.resources-community__resources {
	display: grid;
	gap: 18px;
	min-width: 0;
}

.resources-community__video-card,
.resources-community__resource-card {
	position: relative;
	overflow: hidden;
	border: 1px solid var(--color-border-subtle);
	border-radius: 8px;
	background:
		linear-gradient(180deg, rgba(18, 22, 28, 0.76), rgba(13, 16, 20, 0.78)),
		var(--color-bg-surface);
	box-shadow: 0 18px 54px rgba(0, 0, 0, 0.22);
	color: var(--color-text-primary);
	text-decoration: none;
	transition:
		background-color 180ms ease,
		border-color 180ms ease,
		box-shadow 180ms ease,
		transform 180ms ease;
}

.resources-community__video-card::before,
.resources-community__resource-card::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background:
		linear-gradient(135deg, rgba(247, 203, 61, 0.09), transparent 42%),
		radial-gradient(circle at 92% 8%, rgba(247, 203, 61, 0.1), transparent 28%);
	opacity: 0;
	transition: opacity 180ms ease;
}

.resources-community__video-card:hover,
.resources-community__video-card:focus-visible,
.resources-community__resource-card:hover,
.resources-community__resource-card:focus-visible {
	border-color: var(--color-brand-border);
	background-color: var(--color-bg-surface-hover);
	box-shadow:
		0 26px 72px rgba(0, 0, 0, 0.3),
		0 0 34px rgba(247, 203, 61, 0.12);
	color: var(--color-text-primary);
	transform: translateY(-3px);
}

.resources-community__video-card:hover::before,
.resources-community__video-card:focus-visible::before,
.resources-community__resource-card:hover::before,
.resources-community__resource-card:focus-visible::before {
	opacity: 1;
}

.resources-community__video-card {
	display: grid;
	grid-template-columns: minmax(240px, 0.92fr) minmax(0, 1fr);
	gap: 0;
	min-height: 286px;
}

.resources-community__video-preview {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 286px;
	overflow: hidden;
	border-right: 1px solid var(--color-border-subtle);
	background:
		radial-gradient(circle at 50% 50%, rgba(247, 203, 61, 0.16), transparent 34%),
		linear-gradient(145deg, rgba(5, 6, 8, 0.96), rgba(18, 22, 28, 0.92));
}

.resources-community__video-preview::before {
	position: absolute;
	inset: 0;
	content: "";
	background-image:
		linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
	background-size: 36px 36px;
	mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.76), transparent 78%);
}

.resources-community__video-code {
	position: absolute;
	right: 20px;
	left: 20px;
	display: grid;
	gap: 12px;
	color: rgba(185, 182, 170, 0.54);
	font-family:
		"SFMono-Regular",
		Consolas,
		"Liberation Mono",
		monospace;
	font-size: 0.78rem;
	line-height: 1.4;
}

.resources-community__video-code span {
	overflow: hidden;
	padding: 11px 13px;
	border: 1px solid rgba(255, 255, 255, 0.055);
	border-radius: 7px;
	background: rgba(255, 255, 255, 0.026);
	text-overflow: ellipsis;
	white-space: nowrap;
}

.resources-community__youtube-badge {
	position: absolute;
	top: 18px;
	left: 18px;
	display: inline-flex;
	align-items: center;
	min-height: 30px;
	padding: 0 10px;
	border: 1px solid rgba(247, 203, 61, 0.24);
	border-radius: 999px;
	background: rgba(247, 203, 61, 0.08);
	color: var(--color-brand-primary);
	font-weight: 760;
	font-size: 0.76rem;
	line-height: 1;
}

.resources-community__play {
	position: relative;
	z-index: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 78px;
	height: 78px;
	border: 1px solid rgba(247, 203, 61, 0.5);
	border-radius: 999px;
	background:
		linear-gradient(180deg, rgba(247, 203, 61, 0.24), rgba(247, 203, 61, 0.08)),
		rgba(5, 6, 8, 0.72);
	box-shadow: 0 0 34px rgba(247, 203, 61, 0.16);
	color: var(--color-brand-primary);
}

.resources-community__play svg {
	width: 32px;
	height: 32px;
	fill: currentColor;
}

.resources-community__video-copy {
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 26px;
	padding: clamp(24px, 3vw, 34px);
}

.resources-community__video-copy h3 {
	max-width: 360px;
	margin: 0;
	color: var(--color-text-primary);
	font-weight: 790;
	font-size: clamp(1.45rem, 1.22rem + 0.7vw, 2rem);
	line-height: 1.1;
	letter-spacing: 0;
}

.resources-community__video-copy p {
	max-width: 420px;
	margin: 16px 0 0;
	color: var(--color-text-secondary);
	font-size: 1rem;
	line-height: 1.58;
}

.resources-community__video-action {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	color: var(--color-brand-primary);
	font-weight: 760;
	font-size: 0.95rem;
	line-height: 1.1;
}

.resources-community__video-action svg,
.resources-community__resource-arrow {
	width: 18px;
	height: 18px;
	transition: transform 180ms ease;
}

.resources-community__video-card:hover .resources-community__video-action svg,
.resources-community__video-card:focus-visible .resources-community__video-action svg,
.resources-community__resource-card:hover .resources-community__resource-arrow,
.resources-community__resource-card:focus-visible .resources-community__resource-arrow {
	transform: translate(2px, -2px);
}

.resources-community__grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 18px;
}

.resources-community__resource-card {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr) auto;
	gap: 16px;
	align-items: start;
	min-height: 148px;
	padding: 20px;
}

.resources-community__resource-icon {
	position: relative;
	z-index: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border: 1px solid var(--color-brand-border);
	border-radius: 8px;
	background: rgba(247, 203, 61, 0.08);
	box-shadow: 0 0 18px rgba(247, 203, 61, 0.1);
	color: var(--color-brand-primary);
}

.resources-community__resource-icon svg {
	width: 20px;
	height: 20px;
}

.resources-community__resource-copy {
	position: relative;
	z-index: 1;
	display: block;
	min-width: 0;
}

.resources-community__resource-copy strong {
	display: block;
	color: var(--color-text-primary);
	font-weight: 760;
	font-size: 1rem;
	line-height: 1.25;
}

.resources-community__resource-copy small {
	display: block;
	margin-top: 8px;
	color: var(--color-text-secondary);
	font-size: 0.9rem;
	line-height: 1.5;
}

.resources-community__resource-arrow {
	position: relative;
	z-index: 1;
	color: var(--color-text-muted);
}

.resources-community__resource-card:hover .resources-community__resource-arrow,
.resources-community__resource-card:focus-visible .resources-community__resource-arrow {
	color: var(--color-brand-primary);
}

@media (prefers-reduced-motion: reduce) {
	.resources-community__cta,
	.resources-community__video-card,
	.resources-community__video-card::before,
	.resources-community__resource-card,
	.resources-community__resource-card::before,
	.resources-community__video-action svg,
	.resources-community__resource-arrow {
		transition: none;
	}
}

@media (max-width: 1180px) {
	.resources-community__inner {
		grid-template-columns: 1fr;
	}

	.resources-community__copy {
		align-self: auto;
		max-width: 760px;
	}
}

@media (max-width: 820px) {
	.resources-community__video-card {
		grid-template-columns: 1fr;
	}

	.resources-community__video-preview {
		min-height: 238px;
		border-right: 0;
		border-bottom: 1px solid var(--color-border-subtle);
	}
}

@media (max-width: 720px) {
	.resources-community {
		padding: 82px 20px 92px;
	}

	.resources-community__eyebrow {
		margin-bottom: 20px;
		font-size: 0.82rem;
		letter-spacing: 0.14em;
	}

	.resources-community__title {
		font-size: 2.75rem;
		line-height: 1.06;
	}

	.resources-community__intro {
		margin-top: 22px;
		font-size: 1rem;
	}

	.resources-community__actions {
		display: grid;
		grid-template-columns: 1fr;
	}

	.resources-community__cta {
		width: 100%;
	}

	.resources-community__grid {
		grid-template-columns: 1fr;
	}

	.resources-community__resource-card {
		min-height: 132px;
	}
}

@media (max-width: 440px) {
	.resources-community__title {
		font-size: 2.34rem;
	}

	.resources-community__principles span {
		max-width: 100%;
	}

	.resources-community__video-preview {
		min-height: 220px;
	}

	.resources-community__video-copy {
		padding: 22px;
	}
}
</style>
