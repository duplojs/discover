<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import LandingLayout from "./LandingLayout.vue";

const { frontmatter } = useData();
const DefaultLayout = DefaultTheme.Layout;
</script>

<template>
	<LandingLayout v-if="frontmatter.layout === 'landing'" />

	<component
		:is="DefaultLayout"
		v-else
	/>
</template>
