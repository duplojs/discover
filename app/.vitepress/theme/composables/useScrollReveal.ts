import { onMounted, onUnmounted } from "vue";

export function useScrollReveal(selector = ".reveal") {
	let observer: IntersectionObserver | null = null;

	onMounted(() => {
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer?.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.08,
			rootMargin: "0px 0px -40px 0px",
		});

		document.querySelectorAll(selector).forEach((el) => void observer?.observe(el));
	});

	onUnmounted(() => observer?.disconnect());
}
