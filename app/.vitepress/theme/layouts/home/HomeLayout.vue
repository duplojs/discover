<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import EcosystemSection from "./components/EcosystemSection.vue";
import ProblemPromiseSection from "./components/ProblemPromiseSection.vue";
import CleanCodeLayersSection from "./components/CleanCodeLayersSection.vue";
import CodeVersusSection from "./components/CodeVersusSection.vue";
import ResourcesCommunitySection from "./components/ResourcesCommunitySection.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
	<div class="home-layout">
		<SiteHeader />

		<main class="home-layout__main">
			<HeroSection />

			<div
				class="home-layout__hero-transition"
				aria-hidden="true"
			/>

			<ProblemPromiseSection />

			<EcosystemSection />

			<CodeVersusSection />

			<CleanCodeLayersSection />

			<ResourcesCommunitySection />
		</main>

		<SiteFooter />
	</div>
</template>

<style scoped>
.home-layout {
	--header-height: 86px;

	min-height: 100vh;
	background: var(--gradient-page);
	color: var(--color-text-primary);
	isolation: isolate;
}

.home-layout::before {
	position: fixed;
	inset: 0;
	z-index: -1;
	pointer-events: none;
	content: "";
	background-image:
		linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
	background-position: center top;
	background-size: 72px 72px;
	mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.58), transparent 74%);
}

.home-layout::after {
	position: fixed;
	inset: 0;
	z-index: -1;
	pointer-events: none;
	content: "";
	background:
		radial-gradient(circle at 80% 20%, rgba(247, 203, 61, 0.08), transparent 24%),
		radial-gradient(circle at 12% 18%, rgba(255, 255, 255, 0.04), transparent 22%);
}

.home-layout__main {
	min-height: calc(100vh - var(--header-height));
}

.home-layout__hero-transition {
	position: relative;
	z-index: 3;
	height: 112px;
	margin-top: -112px;
	pointer-events: none;
	background:
		linear-gradient(180deg, rgba(5, 6, 8, 0), rgba(247, 244, 234, 0.2) 52%, rgba(255, 253, 245, 0.72) 100%);
}

.home-layout__hero-transition::before {
	position: absolute;
	right: clamp(20px, 12vw, 220px);
	bottom: 24px;
	left: clamp(20px, 12vw, 220px);
	height: 1px;
	content: "";
	background: linear-gradient(90deg, transparent, rgba(247, 203, 61, 0.36), transparent);
	box-shadow: 0 0 28px rgba(247, 203, 61, 0.14);
}

@media (max-width: 880px) {
	.home-layout {
		--header-height: 72px;
	}

	.home-layout__hero-transition {
		height: 86px;
		margin-top: -86px;
	}
}
</style>
