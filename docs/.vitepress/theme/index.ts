import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import LichtUI from "@licht-ui/components";
import "@licht-ui/theme-chalk/index.scss";
import demo from "vitepress-demoblock-xr/demo.vue";
import "./index.scss";
export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		const { app } = ctx;
		app.component("demo", demo);
		LichtUI.install(app);
	},
} satisfies Theme;
