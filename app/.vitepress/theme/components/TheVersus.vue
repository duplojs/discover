<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		label?: string;
		otherEmoji?: string;
		duplojsEmoji?: string;
	}>(),
	{
		label: "VS",
		otherEmoji: "👎",
		duplojsEmoji: "👍",
	},
);
</script>

<template>
	<section class="versus">
		<div class="versus__side versus__side--other">
			<div class="versus__glow" />

			<div
				class="versus__watermark"
				aria-hidden="true"
			>
				{{ props.otherEmoji }}
			</div>

			<div class="versus__eyebrow">
				<span
					class="versus__eyebrow-emoji"
					aria-hidden="true"
				>
					{{ props.otherEmoji }}
				</span>

				<span>Without DuploJS</span>
			</div>

			<div class="versus__content">
				<slot name="other" />
			</div>
		</div>

		<div
			class="versus__badge"
			aria-hidden="true"
		>
			<span class="versus__badge-ring" />

			<span class="versus__badge-text">{{ props.label }}</span>
		</div>

		<div class="versus__side versus__side--duplojs">
			<div class="versus__glow" />

			<div
				class="versus__watermark"
				aria-hidden="true"
			>
				{{ props.duplojsEmoji }}
			</div>

			<div class="versus__eyebrow">
				<span>With DuploJS</span>

				<span
					class="versus__eyebrow-emoji"
					aria-hidden="true"
				>
					{{ props.duplojsEmoji }}
				</span>
			</div>

			<div class="versus__content">
				<slot name="duplojs" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.versus {
	--versus-neutral-1: #3f3f46;
	--versus-neutral-2: #a1a1aa;
	--versus-neutral-3: #f4f4f5;
	--versus-gold-1: #8a6a05;
	--versus-gold-2: #ffd73f;
	--versus-gold-3: #fff5b3;
	position: relative;
	display: grid;
	grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
	align-items: stretch;
	gap: 8px;
	width: 100%;
	margin: 24px 0;
}

.versus__side {
	position: relative;
	isolation: isolate;
	overflow: hidden;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 14px;
	padding: 18px;
	border-radius: 22px;
	border: 1px solid color-mix(in srgb, currentColor 14%, transparent);
	backdrop-filter: blur(10px);
	box-shadow: 0 22px 42px rgba(15, 23, 42, 0.08);
}

.versus__side--other {
	color: var(--versus-neutral-1);
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.98), var(--versus-neutral-3)),
		var(--vp-c-bg);
}

.versus__side--duplojs {
	color: var(--versus-gold-1);
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.98), var(--versus-gold-3)),
		var(--vp-c-bg);
	box-shadow:
		0 22px 42px rgba(15, 23, 42, 0.08),
		0 0 0 1px rgba(255, 215, 63, 0.16),
		0 0 36px rgba(255, 215, 63, 0.18);
}

.versus__glow {
	position: absolute;
	top: -18px;
	width: 132px;
	height: 132px;
	border-radius: 999px;
	filter: blur(32px);
	opacity: 0.9;
	pointer-events: none;
}

.versus__side--other .versus__glow {
	left: -20px;
	background: rgba(161, 161, 170, 0.22);
}

.versus__side--duplojs .versus__glow {
	right: -20px;
	background: rgba(255, 215, 63, 0.28);
}

.versus__watermark {
	position: absolute;
	top: 10px;
	right: 14px;
	z-index: -1;
	font-size: 70px;
	line-height: 1;
	opacity: 0.11;
	transform: rotate(-14deg);
	pointer-events: none;
}

.versus__eyebrow {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}

.versus__eyebrow-emoji {
	font-size: 18px;
}

.versus__content {
	flex: 1;
	display: flex;
	min-height: 0;
	min-width: 0;

	:deep(> *) {
		flex: 1;
		min-width: 0;
	}

	:deep(.vp-code-group),
	:deep(div[class*="language-"]),
	:deep(.shiki) {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		min-width: 0;
	}

	:deep(pre) {
		flex: 1;
		max-width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.28);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
	}

	:deep(code) {
		word-break: normal;
	}
}

.versus__side--other .versus__content {
	:deep(pre) {
		background: color-mix(in srgb, var(--versus-neutral-3) 46%, var(--vp-code-block-bg));
	}
}

.versus__side--duplojs .versus__content {
	:deep(pre) {
		background: color-mix(in srgb, var(--versus-gold-3) 44%, var(--vp-code-block-bg));
	}
}

.versus__badge {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;
	width: 76px;
	height: 76px;
	margin-inline: -12px;
	z-index: 2;
}

.versus__badge::before,
.versus__badge::after {
	content: "";
	position: absolute;
	top: 50%;
	width: 14px;
	height: 2px;
	background: linear-gradient(90deg, rgba(161, 161, 170, 0.65), rgba(255, 215, 63, 0.75));
	transform: translateY(-50%);
}

.versus__badge::before {
	left: -6px;
}

.versus__badge::after {
	right: -6px;
}

.versus__badge-ring {
	position: absolute;
	inset: 0;
	border: 2px solid rgba(255, 255, 255, 0.7);
	border-radius: 24px;
	background:
		linear-gradient(135deg, rgba(161, 161, 170, 0.18), rgba(255, 215, 63, 0.22)),
		var(--vp-c-bg);
	box-shadow:
		0 14px 30px rgba(15, 23, 42, 0.12),
		inset 0 1px 0 rgba(255, 255, 255, 0.66);
	transform: rotate(45deg);
}

.versus__badge-text {
	position: relative;
	z-index: 1;
	font-size: 14px;
	font-weight: 900;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: var(--vp-c-text-1);
}

@media (max-width: 640px) {
	.versus {
		grid-template-columns: 1fr;
		gap: 0;
	}

	.versus__side {
		padding: 16px;
	}

	.versus__side--other {
		order: 1;
		padding-bottom: 24px;
	}

	.versus__side--duplojs {
		order: 3;
		margin-top: -18px;
		padding-top: 24px;
	}

	.versus__watermark {
		font-size: 56px;
	}

	.versus__badge {
		order: 2;
		z-index: 2;
		width: 62px;
		height: 62px;
		margin: -14px auto;
		justify-self: center;
	}

	.versus__badge::before,
	.versus__badge::after {
		display: none;
	}

	.versus__badge-ring {
		border-radius: 18px;
	}

	.versus__badge-text {
		font-size: 12px;
	}
}
</style>
