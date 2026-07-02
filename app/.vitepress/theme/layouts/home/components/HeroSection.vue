<script setup lang="ts">
import HeroEcosystem from "./HeroEcosystem.vue";

const chips = [
	"Contracts at boundaries",
	"Pure data flow",
	"Composable modules",
];
</script>

<template>
	<section class="hero-section">
		<div class="hero-section__inner">
			<div class="hero-section__content">
				<p class="hero-section__eyebrow">
					<span class="hero-section__eyebrow-line" />

					<span>MODULAR TYPESCRIPT</span>
				</p>

				<h1 class="hero-section__title">
					<span>Build robust and</span>

					<span>predictable software</span>
				</h1>

				<p class="hero-section__description">
					DuploJS gives TypeScript projects a set of composable bricks for shaping data, validating boundaries and keeping application flows explicit.
				</p>

				<div class="hero-section__actions">
					<a
						class="hero-section__action hero-section__action--primary"
						href="#get-started"
					>
						Get started
					</a>

					<a
						class="hero-section__action hero-section__action--secondary"
						href="#packages"
					>
						Explore packages
					</a>
				</div>

				<ul
					class="hero-section__chips"
					aria-label="DuploJS highlights"
				>
					<li
						v-for="chip in chips"
						:key="chip"
						class="hero-section__chip"
					>
						<span class="hero-section__chip-mark" />

						<span>{{ chip }}</span>
					</li>
				</ul>
			</div>

			<HeroEcosystem />
		</div>
	</section>
</template>

<style scoped>
.hero-section {
	--hero-padding-top: clamp(36px, 5vw, 84px);
	--hero-padding-bottom: 150px;
	--hero-overlap-space: 88px;

	position: relative;
	z-index: 1;
	box-sizing: border-box;
	height: calc(100svh - var(--header-height, 86px) + var(--hero-overlap-space));
	padding: var(--hero-padding-top) clamp(20px, 4vw, 64px) var(--hero-padding-bottom);
	overflow: visible;
}

.hero-section__inner {
	position: relative;
	display: grid;
	grid-template-columns: minmax(560px, 0.9fr) minmax(640px, 1.1fr);
	align-items: center;
	gap: clamp(72px, 6vw, 96px);
	width: min(100%, 1520px);
	height: calc(100% - var(--hero-overlap-space));
	min-height: 0;
	margin: 0 auto;
	isolation: isolate;
}

.hero-section__content {
	position: relative;
	z-index: 3;
	width: min(780px, calc(100vw - 40px));
	max-width: 780px;
}

.hero-section__eyebrow {
	display: inline-flex;
	align-items: center;
	gap: 14px;
	margin: 0 0 28px;
	color: var(--color-brand-primary);
	font-weight: 760;
	font-size: clamp(0.74rem, 0.68rem + 0.18vw, 0.86rem);
	line-height: 1.2;
	letter-spacing: 0.28em;
}

.hero-section__eyebrow-line {
	display: block;
	width: 2px;
	height: 28px;
	background: var(--color-brand-primary);
	box-shadow: var(--glow-brand-sm);
}

.hero-section__title {
	width: min(780px, calc(100vw - 40px));
	max-width: 780px;
	margin: 0;
	color: var(--color-text-primary);
	font-weight: 820;
	font-size: 4.4rem;
	line-height: 0.98;
	letter-spacing: 0;
}

.hero-section__title span {
	display: block;
}

.hero-section__description {
	max-width: 680px;
	margin: 28px 0 0;
	color: var(--color-text-secondary);
	font-size: clamp(1.05rem, 0.98rem + 0.34vw, 1.35rem);
	line-height: 1.55;
}

.hero-section__actions {
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	margin-top: 36px;
}

.hero-section__action {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 54px;
	padding: 0 28px;
	border-radius: 8px;
	font-weight: 760;
	font-size: 1.02rem;
	line-height: 1;
	text-decoration: none;
	transition:
		background-color 160ms ease,
		border-color 160ms ease,
		box-shadow 160ms ease,
		color 160ms ease,
		transform 160ms ease;
}

.hero-section__action--primary {
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: var(--button-primary-bg);
	box-shadow: var(--button-primary-shadow);
	color: var(--button-primary-text);
}

.hero-section__action--primary:hover,
.hero-section__action--primary:focus-visible {
	background: var(--button-primary-bg-hover);
	color: var(--button-primary-text);
	box-shadow: 0 0 38px rgba(247, 203, 61, 0.34);
	transform: translateY(-1px);
}

.hero-section__action--secondary {
	border: 1px solid var(--button-secondary-border);
	background: var(--button-secondary-bg);
	color: var(--button-secondary-text);
}

.hero-section__action--secondary:hover,
.hero-section__action--secondary:focus-visible {
	border-color: var(--color-border-strong);
	background: var(--button-secondary-bg-hover);
	color: var(--button-secondary-text);
	transform: translateY(-1px);
}

.hero-section__chips {
	display: flex;
	flex-wrap: nowrap;
	gap: 12px;
	width: max-content;
	max-width: none;
	margin: 32px 0 0;
	padding: 0;
	list-style: none;
}

.hero-section__chip {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	min-height: 42px;
	padding: 0 15px;
	border: 1px solid var(--color-border-default);
	border-radius: 8px;
	background: rgba(13, 16, 20, 0.52);
	color: var(--color-text-secondary);
	font-weight: 560;
	font-size: 0.95rem;
	backdrop-filter: blur(12px);
}

.hero-section__chip-mark {
	width: 8px;
	height: 8px;
	border: 1px solid var(--color-brand-primary);
	border-radius: 999px;
	background: var(--color-brand-soft);
	box-shadow: var(--glow-brand-sm);
}

@media (max-width: 1320px) {
	.hero-section__inner {
		grid-template-columns: minmax(500px, 0.92fr) minmax(560px, 1.08fr);
		gap: 48px;
	}

	.hero-section__title {
		width: min(740px, calc(100vw - 40px));
		font-size: 4rem;
	}
}

@media (max-width: 1120px) {
	.hero-section {
		--hero-padding-top: 48px;
		--hero-padding-bottom: 116px;
		--hero-overlap-space: 64px;
	}

	.hero-section__inner {
		grid-template-columns: minmax(380px, 0.95fr) minmax(420px, 1.05fr);
		height: calc(100% - var(--hero-overlap-space));
		min-height: 0;
		gap: 36px;
	}

	.hero-section__content {
		width: auto;
		max-width: 620px;
	}

	.hero-section__title {
		width: auto;
		font-size: 3.4rem;
	}

	.hero-section__description {
		font-size: 1.05rem;
	}

	.hero-section__chips {
		flex-wrap: wrap;
		width: auto;
		max-width: 100%;
	}

}

@media (max-width: 900px) {
	.hero-section {
		height: auto;
		min-height: calc(100svh - var(--header-height, 72px) + var(--hero-overlap-space));
	}

	.hero-section__inner {
		grid-template-columns: 1fr;
		height: auto;
		gap: 44px;
	}

	.hero-section__content {
		max-width: 760px;
	}
}

@media (max-width: 640px) {
	.hero-section {
		--hero-padding-top: 42px;
		--hero-padding-bottom: 92px;
		--hero-overlap-space: 40px;

		padding-right: 20px;
		padding-left: 20px;
	}

	.hero-section__eyebrow {
		gap: 12px;
		margin-bottom: 22px;
		letter-spacing: 0.2em;
	}

	.hero-section__title {
		width: auto;
		font-size: 3rem;
		line-height: 1.04;
	}

	.hero-section__title span {
		display: inline;
	}

	.hero-section__description {
		margin-top: 22px;
		font-size: 1.02rem;
	}

	.hero-section__actions {
		display: grid;
		gap: 12px;
		margin-top: 30px;
	}

	.hero-section__action {
		width: 100%;
	}

	.hero-section__chips {
		margin-top: 24px;
	}

}
</style>
