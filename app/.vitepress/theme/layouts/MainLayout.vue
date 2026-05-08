<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme, { VPHomeContent } from "vitepress/theme";
import HomeLayout from "./home/HomeLayout.vue";

const { frontmatter } = useData();

const { Layout } = DefaultTheme;

</script>

<template>
	<HomeLayout v-if="frontmatter.layout === 'home'" />

	<Layout v-else>
		<template #home-hero-after>
			<VPHomeContent v-if="frontmatter.heroAfter">
				<component :is="frontmatter.heroAfter" />
			</VPHomeContent>
		</template>
	</Layout>
</template>
