<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();

const towerColors = [
	["#FACC15", "#F59E0B", "rgba(250,204,21,0.5)", "rgba(245,158,11,0.3)"],
	["#4ade80", "#22c55e", "rgba(74,222,128,0.5)", "rgba(34,197,94,0.3)"],
	["#60a5fa", "#3b82f6", "rgba(96,165,250,0.5)", "rgba(59,130,246,0.3)"],
	["#FACC15", "#F59E0B", "rgba(250,204,21,0.5)", "rgba(245,158,11,0.3)"],
];

function easeOutExpo(progress: number) {
	return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
}

function animateCount(el: HTMLElement, from: number, to: number, duration: number) {
	const start = performance.now();
	function tick(now: number) {
		const progress = Math.min((now - start) / duration, 1);
		if (el.firstChild) {
			el.firstChild.textContent = String(Math.round(from + (easeOutExpo(progress) * (to - from))));
		}
		if (progress < 1) {
			requestAnimationFrame(tick);
		} else if (el.firstChild) {
			el.firstChild.textContent = String(to);
		}
	}
	requestAnimationFrame(tick);
}

onMounted(() => {
	const stats = document.querySelectorAll<HTMLElement>(".conviction__stat");
	stats.forEach((stat, si) => {
		const colors = towerColors[si % towerColors.length]!;
		const tower = document.createElement("div");
		tower.className = "conviction__block-tower";
		for (let i = 0; i < 4; i++) {
			const block = document.createElement("div");
			block.className = "conviction__tower-block";
			block.style.background = colors[i] ?? "";
			tower.appendChild(block);
		}
		stat.appendChild(tower);
	});

	const eyebrow = document.querySelector<HTMLElement>(".conviction__eyebrow");
	const numEls = document.querySelectorAll<HTMLElement>(".conviction__num");

	const targets: {
		el: HTMLElement;
		value: number;
	}[] = [];
	numEls.forEach((el) => {
		const text = el.childNodes[0]?.textContent?.trim();
		if (text && !isNaN(Number(text))) {
			targets.push({
				el,
				value: Number(text),
			});
		}
	});

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (eyebrow) {
					eyebrow.classList.add("eyebrow-visible");
				}
				stats.forEach((stat, i) => {
					setTimeout(() => void stat.classList.add("tower-active"), (i * 120) + 200);
				});
				targets.forEach(({ el, value }) => {
					if (el.firstChild) {
						el.firstChild.textContent = "0";
					}
					animateCount(el, 0, value, 1200);
				});
				observer.disconnect();
			}
		});
	}, { threshold: 0.25 });

	const conviction = document.getElementById("conviction");
	if (conviction) {
		observer.observe(conviction);
	}
});
</script>

<template>
	<section
		class="conviction"
		id="conviction"
		data-section="01"
	>
		<div class="conviction__inner">
			<div class="conviction__eyebrow">
				<div class="conviction__eyebrow-line" />

				<span class="conviction__eyebrow-text">{{ t.conviction.eyebrow }}</span>

				<div class="conviction__eyebrow-line" />
			</div>

			<div class="conviction__stats reveal">
				<div class="conviction__stat">
					<div class="conviction__num">
						{{ t.conviction.stat0 }}<span class="conviction__unit">{{ t.conviction.stat0unit }}</span>
					</div>

					<div class="conviction__label">
						{{ t.conviction.stat0label }}
					</div>
				</div>

				<div
					class="conviction__divider"
					aria-hidden="true"
				/>

				<div class="conviction__stat">
					<div class="conviction__num">
						{{ t.conviction.stat1 }}<span class="conviction__unit">{{ t.conviction.stat1unit }}</span>
					</div>

					<div class="conviction__label">
						{{ t.conviction.stat1label }}
					</div>
				</div>

				<div
					class="conviction__divider"
					aria-hidden="true"
				/>

				<blockquote class="conviction__quote">
					<p>
						"Types that cannot <em>{{ t.conviction.quoteEm1 }}</em>

						.<br />

						Checkers that cannot <em>{{ t.conviction.quoteEm2 }}</em>

						.<br />

						APIs that cannot <em>{{ t.conviction.quoteEm3 }}</em>."
					</p>

					<cite>{{ t.conviction.quoteCite }}</cite>
				</blockquote>

				<div
					class="conviction__divider"
					aria-hidden="true"
				/>

				<div class="conviction__stat">
					<div class="conviction__num">
						{{ t.conviction.stat2 }}
					</div>

					<div class="conviction__label">
						{{ t.conviction.stat2label }}
					</div>
				</div>

				<div
					class="conviction__divider"
					aria-hidden="true"
				/>

				<div class="conviction__stat">
					<div class="conviction__num">
						&infin;
					</div>

					<div class="conviction__label">
						{{ t.conviction.statInflabel }}
					</div>
				</div>
			</div>

			<div class="conviction__runtime-row reveal">
				<span class="conviction__runtime-label">{{ t.conviction.compatWith }}</span>

				<div class="conviction__pills">
					<span class="conviction__pill conviction__pill--node">
						<span class="conviction__pill-dot" />Node.js
					</span>
					<span class="conviction__pill conviction__pill--bun">
						<span class="conviction__pill-dot" />Bun
					</span>
					<span class="conviction__pill conviction__pill--deno">
						<span class="conviction__pill-dot" />Deno
					</span>
				</div>

				<span class="conviction__mit">{{ t.conviction.mit }}</span>
			</div>
		</div>
	</section>
</template>
