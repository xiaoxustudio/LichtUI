import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import LichtUI from "@licht-ui/components";
import "@licht-ui/theme-chalk/index.scss";

import ViewSfc from "@vitepress-preview-sfc/components";
import  "@vitepress-preview-sfc/components/dist/view-sfc.css";
import "./index.scss";

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		const { app } = ctx;
		app.component("ViewSfc", ViewSfc);
		LichtUI.install(app);
	},
} satisfies Theme;
