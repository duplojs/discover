<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

interface Props {
	size: number;
	eye?: boolean;
}

const props = defineProps<Props>();

const style = computed((): CSSProperties => ({
	"--size": `${props.size}px`,
}));
</script>

<template>
	<div
		class="logo"
		:style="style"
	>
		<svg
			id="a"
			viewBox="0 0 400 400"
		>
			<polygon
				class="e"
				points="200 262.5 0 137.5 0 262.5 200 387.5 200 262.5"
			/>

			<polygon
				class="f"
				points="200 262.5 400 137.5 400 262.5 200 387.5 200 262.5"
			/>

			<g>
				<polygon
					class="d"
					points="0 137.5 200 12.5 400 137.5 200 262.5 0 137.5"
				/>

				<path
					class="f"
					d="M199.17,185.64c-23.42,0-42.41-10.98-42.41-24.52v24.52c0,13.54,18.99,24.52,42.41,24.52s42.41-10.98,42.41-24.52v-24.52c0,13.54-18.99,24.52-42.41,24.52Z"
				/>

				<path
					class="f"
					d="M300.41,127.18c-23.42,0-42.41-10.98-42.41-24.52v24.52c0,13.54,18.99,24.52,42.41,24.52s42.41-10.98,42.41-24.52v-24.52c0,13.54-18.99,24.52-42.41,24.52Z"
				/>

				<path
					class="f"
					d="M99.48,128.08c-23.42,0-42.41-10.98-42.41-24.52v24.52c0,13.54,18.99,24.52,42.41,24.52s42.41-10.98,42.41-24.52v-24.52c0,13.54-18.99,24.52-42.41,24.52Z"
				/>

				<path
					class="f"
					d="M200.72,69.63c-23.42,0-42.41-10.98-42.41-24.52v24.52c0,13.54,18.99,24.52,42.41,24.52s42.41-10.98,42.41-24.52v-24.52c0,13.54-18.99,24.52-42.41,24.52Z"
				/>

				<ellipse
					class="c"
					cx="199.17"
					cy="161.12"
					rx="42.41"
					ry="24.52"
				/>

				<template v-if="props.eye">
					<ellipse
						class="b"
						cx="359.42"
						cy="228.03"
						rx="24.52"
						ry="42.41"
					/>

					<ellipse
						cx="357.89"
						cy="240.52"
						rx="17.22"
						ry="29.79"
					/>
				</template>

				<ellipse
					class="c"
					cx="300.41"
					cy="102.67"
					rx="42.41"
					ry="24.52"
				/>

				<ellipse
					class="c"
					cx="200.72"
					cy="45.11"
					rx="42.41"
					ry="24.52"
				/>

				<ellipse
					class="c"
					cx="99.48"
					cy="103.56"
					rx="42.41"
					ry="24.52"
				/>
			</g>
		</svg>
	</div>
</template>

<style lang="scss" scoped>
.logo {
	width: var(--size);
	height: var(--size);

	> svg {
		width: 100%;
		height: 100%;
	}
}

.b{
	fill:#fff;
}
.c{
	fill:#fff55d;
}

.d{
	fill:#ffeb53;
}

.e{
	fill:#ffd73f;
}

.f{
	fill:#ebc32b;
}
</style>
