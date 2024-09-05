import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import LichtUI from "@licht-ui/components";
import "@licht-ui/theme-chalk/index.scss";

import {
	AntDesignContainer,
	ElementPlusContainer,
	NaiveUIContainer,
} from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "./index.scss";

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		const { app } = ctx;
		app.component("demo-preview", ElementPlusContainer);
		LichtUI.install(app);
	},
} satisfies Theme;
