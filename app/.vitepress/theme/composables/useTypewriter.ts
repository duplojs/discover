import { onMounted, onUnmounted, ref } from "vue";

export function useTypewriter(commands: string[] = [
	"npm install @duplojs/http",
	"bun add @duplojs/http",
	"deno add @duplojs/http",
]) {
	const text = ref("");
	let timer: ReturnType<typeof setTimeout> | null = null;
	let ci = 0;
	let len = 0;
	let deleting = false;
	const SPEED_TYPE = 55;
	const SPEED_DEL = 28;
	const PAUSE = 1800;

	function tick() {
		const cmd = commands[ci % commands.length]!;
		if (!deleting) {
			text.value = cmd.slice(0, ++len);
			if (len === cmd.length) {
				deleting = true;
				timer = setTimeout(tick, PAUSE);
				return;
			}
		} else {
			text.value = cmd.slice(0, --len);
			if (len === 0) {
				deleting = false;
				ci++;
				timer = setTimeout(tick, 300);
				return;
			}
		}
		timer = setTimeout(tick, deleting ? SPEED_DEL : SPEED_TYPE);
	}

	onMounted(() => void tick());
	onUnmounted(() => {
		if (timer) {
			clearTimeout(timer);
		}
	});

	return { text };
}
