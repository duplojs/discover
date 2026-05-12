import { useData } from "vitepress";
import { computed } from "vue";
import en from "../i18n/en";
import fr from "../i18n/fr";

export function useI18n() {
	const { lang } = useData();
	const t = computed(() => lang.value.startsWith("fr") ? fr : en);
	return { t };
}
