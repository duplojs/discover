<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useScrollReveal } from "./composables/useScrollReveal";
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import ConvictionSection from "./components/sections/ConvictionSection.vue";
import PipelineSection from "./components/sections/PipelineSection.vue";
import TypeFlowSection from "./components/sections/TypeFlowSection.vue";
import CheckersSection from "./components/sections/CheckersSection.vue";
import ComparisonSection from "./components/sections/ComparisonSection.vue";
import BenchmarkSection from "./components/sections/BenchmarkSection.vue";
import EcosystemSection from "./components/sections/EcosystemSection.vue";
import GettingStartedSection from "./components/sections/GettingStartedSection.vue";
import TestimonialsSection from "./components/sections/TestimonialsSection.vue";
import CtaSection from "./components/sections/CtaSection.vue";
import CommunitySection from "./components/sections/CommunitySection.vue";

useScrollReveal();

let rafId: number | null = null;
let trailDots: HTMLElement[] = [];

onMounted(() => {
	if (window.matchMedia("(hover: none)").matches) {
		return;
	}
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return;
	}

	const count = 4;
	trailDots = Array.from({ length: count }, () => {
		const dot = document.createElement("div");
		dot.className = "pixel-trail";
		dot.setAttribute("aria-hidden", "true");
		document.body.appendChild(dot);
		return dot;
	});

	let mx = -100,
		my = -100;
	const positions = Array(count).fill(null).map(() => ({
		x: -100,
		y: -100,
	}));

	window.addEventListener("mousemove", (ev) => {
		mx = ev.clientX;
		my = ev.clientY;
	}, { passive: true });

	function frame() {
		positions[0] = {
			x: mx,
			y: my,
		};
		for (let i = 1; i < count; i++) {
			const curr = positions[i]!;
			const prev = positions[i - 1]!;
			positions[i] = {
				x: curr.x + ((prev.x - curr.x) * 0.35),
				y: curr.y + ((prev.y - curr.y) * 0.35),
			};
		}
		trailDots.forEach((dot, i) => {
			const pos = positions[i]!;
			dot.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px)`;
			dot.style.opacity = (1 - (i * 0.22)).toFixed(2);
		});
		rafId = requestAnimationFrame(frame);
	}
	rafId = requestAnimationFrame(frame);
});

onUnmounted(() => {
	if (rafId !== null) {
		cancelAnimationFrame(rafId);
	}
	trailDots.forEach((dot) => void dot.remove());
	trailDots = [];
});
</script>

<template>
	<div>
		<div
			class="rails"
			aria-hidden="true"
		/>

		<AppNav />

		<main>
			<HeroSection />

			<ConvictionSection />

			<PipelineSection />

			<TypeFlowSection />

			<CheckersSection />

			<ComparisonSection />

			<BenchmarkSection />

			<EcosystemSection />

			<GettingStartedSection />

			<TestimonialsSection />

			<CtaSection />

			<CommunitySection />
		</main>

		<AppFooter />
	</div>
</template>
