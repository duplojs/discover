import type { Theme } from "vitepress";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import DefaultTheme from "vitepress/theme";
import MainLayout from "./layouts/MainLayout.vue";
import "@shikijs/vitepress-twoslash/style.css";
import "virtual:group-icons.css";
import "./style.css";

export default {
	extends: DefaultTheme,
	Layout: MainLayout,
	enhanceApp({ app }) {
		app.use(TwoslashFloatingVue);
	},
} satisfies Theme;
