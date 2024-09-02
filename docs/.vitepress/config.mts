import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'


// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "LichtUI",
	description: "a UI component library based on vue3",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "示例", link: "/home/start/examples" },
		],
		sidebar: [
			{
				text: "开发指南",
				items: [
					{
						text: "介绍",
						link: "/home/start/guide",
					},
					{
						text: "快速上手",
						link: "/home/start/installation",
					},
				],
			},
			{
				text: "Base 基础",
				items: [
					{
						text: "Button 按钮",
						link: "/home/base/button",
					},
					{
						text: "Layout 布局",
						link: "/home/base/layout",
					},
					{
						text: "Text 文本",
						link: "/home/base/text",
					},
				],
			},
			{
				text: "Form 表单",
				items: [
					{
						text: "Input 输入框",
						link: "/home/form/input",
					},
				],
			},
			{
				text: "Examples",
				items: [{ text: "示例", link: "/home/start/examples" }],
			},
		],
		socialLinks: [
			{ icon: "github", link: "https://github.com/xiaoxustudio/LichtUI" },
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024-present 徐然",
		},
	},
	markdown: {
		config: (md) => {
			md.use(containerPreview)
			md.use(componentPreview)
		},
	},
	base: "/LichtUI/",
	vite: {
		resolve: {
			alias: {
				// 示例别名
				"@": fileURLToPath(new URL("../", import.meta.url)),
			},
		},
	},
});
