<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();

onMounted(() => {
	const bench = document.querySelector(".bench");
	if (!bench) {
		return;
	}
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				bench.classList.add("bench-animated");
				observer.disconnect();
			}
		});
	}, { threshold: 0.25 });
	observer.observe(bench);
});
</script>

<template>
	<section
		class="section benchmark-section"
		id="benchmark"
		data-section="04b"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.benchmark.label }}</span>

				<h2 class="section__title">
					{{ t.benchmark.title1 }}<br />{{ t.benchmark.title2 }}
				</h2>

				<p class="section__subtitle">
					{{ t.benchmark.subtitle }}
				</p>
			</div>

			<div class="bench reveal">
				<div
					class="bench-row"
					data-value="100"
					data-label="~42 000 req/s"
				>
					<div class="bench-row__name bench-row__name--duplo">
						DuploJS
					</div>

					<div class="bench-row__track">
						<div
							class="bench-bar bench-bar--duplo"
							style="--pct: 100%"
						/>
					</div>

					<div class="bench-row__value">
						~42 000 <span class="bench-row__unit">req/s</span>
					</div>
				</div>

				<div
					class="bench-row"
					data-value="90"
					data-label="~38 000 req/s"
				>
					<div class="bench-row__name">
						Fastify
					</div>

					<div class="bench-row__track">
						<div
							class="bench-bar"
							style="--pct: 90%"
						/>
					</div>

					<div class="bench-row__value">
						~38 000 <span class="bench-row__unit">req/s</span>
					</div>
				</div>

				<div
					class="bench-row"
					data-value="71"
					data-label="~30 000 req/s"
				>
					<div class="bench-row__name">
						Hono
					</div>

					<div class="bench-row__track">
						<div
							class="bench-bar"
							style="--pct: 71%"
						/>
					</div>

					<div class="bench-row__value">
						~30 000 <span class="bench-row__unit">req/s</span>
					</div>
				</div>

				<div
					class="bench-row"
					data-value="29"
					data-label="~12 000 req/s"
				>
					<div class="bench-row__name">
						Express
					</div>

					<div class="bench-row__track">
						<div
							class="bench-bar"
							style="--pct: 29%"
						/>
					</div>

					<div class="bench-row__value">
						~12 000 <span class="bench-row__unit">req/s</span>
					</div>
				</div>

				<p class="bench-footnote">
					{{ t.benchmark.footnote }}
					<a
						href="https://github.com/duplojs/benchmarks"
						target="_blank"
						rel="noopener"
					>{{ t.benchmark.viewBenchmarks }}</a>
				</p>
			</div>
		</div>
	</section>
</template>
