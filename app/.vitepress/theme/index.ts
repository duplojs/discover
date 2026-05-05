import type { Theme } from "vitepress";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import DefaultTheme from "vitepress/theme";
import MainLayout from "./layouts/MainLayout.vue";
import { WipPage } from "./components/WipPage";
import TerminalBlock from "./components/TerminalBlock.vue";
import TheVersus from "./components/TheVersus.vue";
import "@shikijs/vitepress-twoslash/style.css";
import "virtual:group-icons.css";
import "./style.css";

export default {
	extends: DefaultTheme,
	Layout: MainLayout,
	enhanceApp({ app }) {
		app.use(TwoslashFloatingVue);
		app.component("WipPage", WipPage);
		app.component("TerminalBlock", TerminalBlock);
		app.component("TheVersus", TheVersus);
	},
} satisfies Theme;
