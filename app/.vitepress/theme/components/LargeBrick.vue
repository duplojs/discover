<script setup lang="ts">
import { computed, type CSSProperties } from "vue";
import TheLogo from "./TheLogo.vue";

interface Props {
	size: number;
	eye?: boolean;
	orientation: "left" | "right";
}

const props = withDefaults(
	defineProps<Props>(),
	{
		eye: false,
	},
);

const style = computed((): CSSProperties => ({
	"--size-height": `${props.size}px`,
	"--size-width": `${props.size}px`,
}));

</script>

<template>
	<div
		class="largeBrick"
		:style="style"
	>
		<TheLogo
			class="first"
			:size="props.size"
			eye
		/>

		<TheLogo
			class="second"
			:size="props.size"
		/>
	</div>
</template>

<style lang="scss" scoped>
.largeBrick {
	width: calc(var(--size-width) / 1.5);
	height: calc(var(--size-height) / 3);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	> .first {
		position: absolute;
		left: calc(var(--size-width) / 10);
	}

	> .second {
		position: absolute;
		right: calc(var(--size-width) / 10);
	}
}
</style>
