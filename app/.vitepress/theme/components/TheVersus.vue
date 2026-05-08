<script setup lang="ts">
withDefaults(
	defineProps<{
		label?: string;
	}>(),
	{
		label: "VS",
	},
);
</script>

<template>
	<section class="versus">
		<div class="versus__side">
			<slot name="other" />
		</div>

		<div
			class="versus__badge"
			aria-hidden="true"
		>
			{{ label }}
		</div>

		<div class="versus__side">
			<slot name="duplojs" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.versus {
	position: relative;
	display: grid;
	grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
	align-items: stretch;
	gap: 18px;
	width: 100%;
	margin: 24px 0;
}

.versus__side {
	min-width: 0;
	display: flex;
	align-items: center;
}

.versus__badge {
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;
	width: 48px;
	height: 48px;
	border: 2px solid var(--vp-c-brand-1);
	border-radius: 50%;
	background: var(--vp-c-bg);
	color: var(--vp-c-brand-1);
	font-weight: 800;
	font-size: 14px;
	line-height: 1;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
}

@media (max-width: 640px) {
	.versus {
		grid-template-columns: 1fr;
		gap: 14px;
	}

	.versus__badge {
		justify-self: center;
		width: 42px;
		height: 42px;
		font-size: 12px;
	}
}
</style>
