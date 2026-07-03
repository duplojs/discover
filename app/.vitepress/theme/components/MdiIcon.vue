<script setup lang="ts">
defineProps<{
	path: string;
}>();
</script>

<template>
	<svg
		class="mdi-icon"
		viewBox="0 0 24 24"
		aria-hidden="true"
		focusable="false"
	>
		<path :d="path" />
	</svg>
</template>

<style scoped>
.mdi-icon {
	display: block;
	fill: currentColor;
	stroke: none;
}
</style>
