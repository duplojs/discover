import { onMounted, onUnmounted } from "vue";

export function useMagneticCard(selector = ".eco-card") {
	if (typeof window === "undefined") {
		return;
	}

	function onMouseMove(e: MouseEvent) {
		const card = (e.currentTarget as HTMLElement);
		const rect = card.getBoundingClientRect();
		const dx = (((e.clientX - rect.left) / rect.width) - 0.5) * 8;
		const dy = (((e.clientY - rect.top) / rect.height) - 0.5) * 8;
		card.style.setProperty("--mx", `${dx.toFixed(1)}px`);
		card.style.setProperty("--my", `${dy.toFixed(1)}px`);
	}

	function onMouseLeave(e: MouseEvent) {
		const card = e.currentTarget as HTMLElement;
		card.style.setProperty("--mx", "0px");
		card.style.setProperty("--my", "0px");
	}

	onMounted(() => {
		if (window.matchMedia("(hover: none)").matches) {
			return;
		}
		document.querySelectorAll<HTMLElement>(selector).forEach((card) => {
			card.addEventListener("mousemove", onMouseMove);
			card.addEventListener("mouseleave", onMouseLeave);
		});
	});

	onUnmounted(() => {
		document.querySelectorAll<HTMLElement>(selector).forEach((card) => {
			card.removeEventListener("mousemove", onMouseMove);
			card.removeEventListener("mouseleave", onMouseLeave);
		});
	});
}
