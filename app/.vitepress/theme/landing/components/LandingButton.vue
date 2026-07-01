<script setup lang="ts">
import type { LandingAction } from "../types";

defineProps<{
	action: LandingAction;
}>();
</script>

<template>
	<a
		class="duplo-landing-button"
		:class="`duplo-landing-button--${action.variant}`"
		:href="action.href"
	>
		{{ action.label }}
	</a>
</template>
