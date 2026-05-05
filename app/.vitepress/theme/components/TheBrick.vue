<script setup lang="ts">
import { computed, type CSSProperties } from "vue";
import TheLogo from "./TheLogo.vue";
interface Props {
	size: number;
	eye?: boolean;
}

const props = defineProps<Props>();

const style = computed((): CSSProperties => ({
	"--size": `${props.size / 3}px`,
}));
</script>

<template>
	<div
		class="brick"
		:style="style"
	>
		<TheLogo
			:size="props.size"
			:eye="props.eye"
		/>
	</div>
</template>

<style lang="scss" scoped>
.brick {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--size);
	height: var(--size);

	> .logo {
		position: absolute;
	}

}
</style>
