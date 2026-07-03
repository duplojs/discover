<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const installCommands = [
	"npm i @duplojs/utils",
	"npm i @duplojs/server-utils",
	"npm i @duplojs/http",
	"npm i @duplojs/form",
	"npm i @duplojs/json-web-token",
	"npm i @duplojs/playwright",
];

const activeCommandIndex = ref(0);
const typedLength = ref(installCommands[0]?.length ?? 0);
const isReducedMotion = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;
let mode: "typing" | "pausing" | "deleting" = "typing";

const typedCommand = computed(
	() => installCommands[activeCommandIndex.value]?.slice(0, typedLength.value) ?? "",
);

function scheduleNextStep(delay: number) {
	timeoutId = setTimeout(runTypingStep, delay);
}

function runTypingStep() {
	const activeCommand = installCommands[activeCommandIndex.value] ?? "";

	if (mode === "typing" && typedLength.value < activeCommand.length) {
		typedLength.value += 1;
		scheduleNextStep(42);

		return;
	}

	if (mode === "typing") {
		mode = "pausing";
		scheduleNextStep(1500);

		return;
	}

	if (mode === "pausing") {
		mode = "deleting";
		scheduleNextStep(24);

		return;
	}

	if (mode === "deleting" && typedLength.value > 0) {
		typedLength.value -= 1;
		scheduleNextStep(24);

		return;
	}

	activeCommandIndex.value = (activeCommandIndex.value + 1) % installCommands.length;
	mode = "typing";
	scheduleNextStep(260);
}

onMounted(() => {
	const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	isReducedMotion.value = mediaQuery.matches;

	if (isReducedMotion.value) {
		typedLength.value = installCommands[0]?.length ?? 0;

		return;
	}

	typedLength.value = 0;
	mode = "typing";
	scheduleNextStep(520);
});

onBeforeUnmount(() => {
	if (timeoutId !== undefined) {
		clearTimeout(timeoutId);
	}
});
</script>

<template>
	<div
		class="typing-install-command"
		aria-label="Package install command"
	>
		<div
			class="typing-install-command__chrome"
			aria-hidden="true"
		>
			<span />

			<span />

			<span />
		</div>

		<p class="typing-install-command__line">
			<span class="typing-install-command__prompt">$</span>

			<span class="typing-install-command__command">{{ typedCommand }}</span>

			<span
				class="typing-install-command__cursor"
				:class="{ 'typing-install-command__cursor--still': isReducedMotion }"
				aria-hidden="true"
			/>
		</p>
	</div>
</template>

<style scoped>
.typing-install-command {
	position: relative;
	overflow: hidden;
	padding: 18px 20px 20px;
	border: 1px solid var(--color-border-default);
	border-radius: 14px;
	background:
		linear-gradient(180deg, rgba(18, 22, 28, 0.76), rgba(8, 10, 13, 0.9)),
		var(--color-bg-surface);
	box-shadow:
		0 22px 70px rgba(0, 0, 0, 0.28),
		0 0 36px rgba(247, 203, 61, 0.08),
		inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.typing-install-command::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background:
		linear-gradient(90deg, rgba(247, 203, 61, 0.1), transparent 36%),
		linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px);
	background-size: auto, 100% 34px;
	opacity: 0.78;
}

.typing-install-command__chrome {
	position: relative;
	z-index: 1;
	display: flex;
	gap: 7px;
	margin-bottom: 22px;
}

.typing-install-command__chrome span {
	width: 9px;
	height: 9px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.16);
}

.typing-install-command__chrome span:first-child {
	background: rgba(247, 203, 61, 0.82);
	box-shadow: 0 0 12px rgba(247, 203, 61, 0.32);
}

.typing-install-command__line {
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	min-width: 0;
	min-height: 28px;
	margin: 0;
	color: var(--color-text-primary);
	font-family:
		ui-monospace,
		SFMono-Regular,
		"SF Mono",
		Menlo,
		Monaco,
		Consolas,
		"Liberation Mono",
		monospace;
	font-size: clamp(0.96rem, 0.9rem + 0.22vw, 1.1rem);
	line-height: 1.45;
	white-space: nowrap;
}

.typing-install-command__prompt {
	flex: 0 0 auto;
	margin-right: 12px;
	color: var(--color-brand-primary);
	font-weight: 780;
	text-shadow: 0 0 12px rgba(247, 203, 61, 0.34);
}

.typing-install-command__command {
	min-width: 0;
	overflow-wrap: anywhere;
	color: var(--color-text-primary);
}

.typing-install-command__cursor {
	flex: 0 0 auto;
	width: 9px;
	height: 1.25em;
	margin-left: 3px;
	background: var(--color-brand-primary);
	box-shadow: 0 0 12px rgba(247, 203, 61, 0.44);
	animation: typing-install-cursor 0.92s steps(2, start) infinite;
}

.typing-install-command__cursor--still {
	animation: none;
}

@keyframes typing-install-cursor {
	0%,
	44% {
		opacity: 1;
	}

	45%,
	100% {
		opacity: 0;
	}
}

@media (max-width: 560px) {
	.typing-install-command {
		padding: 16px 16px 18px;
	}

	.typing-install-command__line {
		align-items: flex-start;
		white-space: normal;
	}
}

@media (prefers-reduced-motion: reduce) {
	.typing-install-command__cursor {
		animation: none;
	}
}
</style>
