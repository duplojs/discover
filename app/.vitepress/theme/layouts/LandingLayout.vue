<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import LandingHeader from "../landing/components/LandingHeader.vue";
import LandingHero from "../landing/sections/LandingHero.vue";
import { landingContent, type LandingLanguage } from "../landing/content";

const { lang } = useData();

const landingLanguage = computed<LandingLanguage>(() => (
	lang.value.toLowerCase().startsWith("fr") ? "fr" : "en"
));

const content = computed(() => landingContent[landingLanguage.value]);
</script>

<template>
	<LandingHeader :content="content.header" />

	<main class="duplo-landing">
		<LandingHero :content="content.hero" />
	</main>
</template>
