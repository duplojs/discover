<script setup lang="ts">
import LandingButton from "../components/LandingButton.vue";
import HeroBrickRouter from "../components/HeroBrickRouter.vue";
import type { LandingHeroContent } from "../types";

defineProps<{
	content: LandingHeroContent;
}>();
</script>

<template>
	<section
		class="duplo-landing-hero"
		aria-labelledby="duplo-landing-title"
	>
		<div class="duplo-landing-hero__inner">
			<div class="duplo-landing-hero__content">
				<p class="duplo-landing-kicker">
					{{ content.kicker }}
				</p>

				<h1
					id="duplo-landing-title"
					class="duplo-landing-hero__title"
				>
					<span
						v-for="line in content.titleLines"
						:key="line"
					>
						{{ line }}
					</span>
				</h1>

				<p class="duplo-landing-hero__description">
					{{ content.description }}
				</p>

				<p class="duplo-landing-hero__proof">
					{{ content.proof }}
				</p>

				<div
					class="duplo-landing-hero__actions"
					aria-label="Landing actions"
				>
					<LandingButton
						v-for="action in content.actions"
						:key="action.label"
						:action="action"
					/>
				</div>

				<dl class="duplo-landing-hero__metrics">
					<div
						v-for="metric in content.metrics"
						:key="metric.label"
						class="duplo-landing-hero__metric"
					>
						<dt>{{ metric.label }}</dt>

						<dd>{{ metric.value }}</dd>
					</div>
				</dl>
			</div>

			<HeroBrickRouter :packages="content.packages" />
		</div>
	</section>
</template>
