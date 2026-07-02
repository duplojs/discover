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

			<ProblemPromiseSection />

			<EcosystemSection />

			<CleanCodeLayersSection />

			<CodeVersusSection />

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

@media (max-width: 880px) {
	.home-layout {
		--header-height: 72px;
	}
}
</style>
