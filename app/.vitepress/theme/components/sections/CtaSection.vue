<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();

const ctaRef = ref<HTMLElement | null>(null);

onMounted(() => {
	const container = document.getElementById("ctaBlocks");
	if (!container) {
		return;
	}

	const cols = 24,
		rows = 6;
	const total = cols * rows;
	const frag = document.createDocumentFragment();
	for (let i = 0; i < total; i++) {
		const block = document.createElement("div");
		block.className = "cta-block";
		const col = i % cols;
		const row = Math.floor(i / cols);
		const delay = ((col * 18) + (row * 30) + (Math.random() * 40)).toFixed(0);
		const opacity = ((Math.random() * 0.08) + 0.06).toFixed(3);
		block.style.setProperty("--d", `${delay}ms`);
		block.style.setProperty("--op", opacity);
		frag.appendChild(block);
	}
	container.appendChild(frag);

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				container.classList.add("anim-active");
				observer.disconnect();
			}
		});
	}, { threshold: 0.2 });
	observer.observe(container);

	requestAnimationFrame(() => {
		const rawBlocks = Array.from(container.querySelectorAll<HTMLElement>(".cta-block"));
		let blockCenters = rawBlocks.map((rawBlock) => {
			const rect = rawBlock.getBoundingClientRect();
			return {
				block: rawBlock,
				x: rect.left + (rect.width / 2),
				y: rect.top + (rect.height / 2),
			};
		});

		let resizeTimer: ReturnType<typeof setTimeout> | undefined = undefined;
		window.addEventListener("resize", () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				blockCenters = rawBlocks.map((rawBlock) => {
					const rect = rawBlock.getBoundingClientRect();
					return {
						block: rawBlock,
						x: rect.left + (rect.width / 2),
						y: rect.top + (rect.height / 2),
					};
				});
			}, 200);
		}, { passive: true });

		const ctaSection = container.closest(".cta-finale") || container.parentElement;
		ctaSection?.addEventListener("mousemove", (e: Event) => {
			const me = e as MouseEvent;
			blockCenters.forEach(({ block, x, y }) => {
				const dist = Math.sqrt(((me.clientX - x) ** 2) + ((me.clientY - y) ** 2));
				block.style.setProperty("--glow", Math.max(0, 1 - (dist / 120)).toFixed(3));
			});
		}, { passive: true });

		ctaSection?.addEventListener("mouseleave", () => {
			rawBlocks.forEach((rawBlock) => void rawBlock.style.setProperty("--glow", "0"));
		});
	});
});
</script>

<template>
	<section
		class="cta-finale"
		id="cta-finale"
	>
		<div
			class="cta-blocks"
			id="ctaBlocks"
			aria-hidden="true"
		/>

		<div class="container">
			<div
				class="cta-finale__inner reveal"
				ref="ctaRef"
			>
				<span class="label">{{ t.cta.label }}</span>

				<h2 class="cta-finale__title">
					{{ t.cta.title1 }}<br />

					<span class="hero__accent">{{ t.cta.title2 }}</span>
				</h2>

				<p class="cta-finale__sub">
					{{ t.cta.subtitle1 }}<br />
					{{ t.cta.subtitle2 }}
				</p>

				<div class="cta-finale__btns">
					<a
						href="http://http.duplojs.dev/en/v0/guide/"
						class="btn btn--primary btn--lg"
						target="_blank"
						rel="noopener"
					>{{ t.cta.readDocs }}</a>

					<a
						href="https://github.com/duplojs/http"
						class="btn btn--secondary btn--lg"
						target="_blank"
						rel="noopener"
					>
						<svg
							width="15"
							height="15"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
						</svg>
						{{ t.cta.viewGithub }}
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
