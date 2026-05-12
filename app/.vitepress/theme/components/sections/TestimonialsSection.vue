<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();

const stars = ref<number | string>("—");

function animateCount(setter: (v: number | string) => void, from: number, to: number, duration: number) {
	const start = performance.now();
	function easeOutExpo(t: number) {
		return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
	}
	function tick(now: number) {
		const progress = Math.min((now - start) / duration, 1);
		setter(Math.round(from + (easeOutExpo(progress) * (to - from))));
		if (progress < 1) {
			requestAnimationFrame(tick);
		} else {
			setter(to);
		}
	}
	requestAnimationFrame(tick);
}

onMounted(() => {
	fetch("https://api.github.com/repos/duplojs/http")
		.then((r) => r.ok ? r.json() : null)
		.then((data: { stargazers_count?: number } | null) => {
			if (!data || typeof data.stargazers_count !== "number") {
				return;
			}
			const count = data.stargazers_count;
			const starsEl = document.getElementById("statStars");
			if (!starsEl) {
				return;
			}
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateCount((v) => {
							stars.value = v;
						}, 0, count, 1200);
						observer.disconnect();
					}
				});
			}, { threshold: 0.3 });
			observer.observe(starsEl);
		})
		.catch(() => void 0);

	const socialProof = document.querySelector(".social-proof");
	if (socialProof) {
		new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					socialProof.classList.add("sp-visible");
				}
			});
		}, { threshold: 0.3 }).observe(socialProof);
	}

	const cards = document.querySelectorAll(".testimonial-card");
	const cardObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const idx = Array.from(cards).indexOf(entry.target);
				setTimeout(() => void entry.target.classList.add("visible"), idx * 100);
				cardObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.08 });
	cards.forEach((c) => void cardObserver.observe(c));
});

const testimonialCards = [
	{
		accent: "yellow",
		quoteKey: "t1quote",
		handleKey: "t1handle",
		roleKey: "t1role",
	},
	{
		accent: "green",
		quoteKey: "t2quote",
		handleKey: "t2handle",
		roleKey: "t2role",
	},
	{
		accent: "violet",
		quoteKey: "t3quote",
		handleKey: "t3handle",
		roleKey: "t3role",
	},
	{
		accent: "cyan",
		quoteKey: "t4quote",
		handleKey: "t4handle",
		roleKey: "t4role",
	},
] as const;
</script>

<template>
	<section
		class="section testimonials-section"
		id="testimonials"
		data-section="07"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.testimonials.label }}</span>

				<h2 class="section__title">
					{{ t.testimonials.title1 }}<br />{{ t.testimonials.title2 }}
				</h2>
			</div>

			<div class="social-proof reveal">
				<div class="social-proof__stat">
					<div
						class="social-proof__num"
						id="statStars"
					>
						{{ stars }}
					</div>

					<div class="social-proof__label">
						<span
							class="social-proof__live-dot"
							aria-hidden="true"
						/>
						{{ t.testimonials.starsLabel }}
					</div>
				</div>

				<div
					class="social-proof__divider"
					aria-hidden="true"
				/>

				<div class="social-proof__stat">
					<div class="social-proof__num">
						9<span class="social-proof__unit">+</span>
					</div>

					<div class="social-proof__label">
						{{ t.testimonials.packagesLabel }}
					</div>
				</div>

				<div
					class="social-proof__divider"
					aria-hidden="true"
				/>

				<div class="social-proof__stat">
					<div class="social-proof__num">
						3
					</div>

					<div class="social-proof__label">
						{{ t.testimonials.runtimesLabel }}
					</div>
				</div>

				<div
					class="social-proof__divider"
					aria-hidden="true"
				/>

				<div class="social-proof__stat">
					<div class="social-proof__num">
						100<span class="social-proof__unit">%</span>
					</div>

					<div class="social-proof__label">
						{{ t.testimonials.typescriptLabel }}
					</div>
				</div>
			</div>

			<div class="testimonials reveal">
				<div
					v-for="card in testimonialCards"
					:key="card.accent"
					class="testimonial-card"
					:data-accent="card.accent"
				>
					<p class="testimonial-card__quote">
						{{ t.testimonials[card.quoteKey] }}
					</p>

					<div class="testimonial-card__author">
						<span class="testimonial-card__handle">{{ t.testimonials[card.handleKey] }}</span>
						<span class="testimonial-card__role">{{ t.testimonials[card.roleKey] }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
