import { onMounted, onUnmounted, ref } from "vue";

function easeOutExpo(t: number) {
	return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateCount(
	setter: (v: number) => void,
	from: number,
	to: number,
	duration: number,
) {
	const start = performance.now();
	const range = to - from;
	function tick(now: number) {
		const progress = Math.min((now - start) / duration, 1);
		setter(Math.round(from + (easeOutExpo(progress) * range)));
		if (progress < 1) {
			requestAnimationFrame(tick);
		} else {
			setter(to);
		}
	}
	requestAnimationFrame(tick);
}

export function useCounterOnReveal(targets: {
	value: number;
	key: string;
}[]) {
	const counts = ref<Record<string, number | string>>({});
	targets.forEach((t) => {
		counts.value[t.key] = t.value;
	});

	let observer: IntersectionObserver | null = null;

	onMounted(() => {
		const container = document.getElementById("conviction");
		if (!container) {
			return;
		}

		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					targets.forEach((t) => {
						if (typeof t.value === "number") {
							counts.value[t.key] = 0;
							animateCount((v) => {
								counts.value[t.key] = v;
							}, 0, t.value, 1200);
						}
					});
					observer?.disconnect();
				}
			});
		}, { threshold: 0.3 });

		observer.observe(container);
	});

	onUnmounted(() => observer?.disconnect());

	return { counts };
}
