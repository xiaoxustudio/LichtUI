import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";
import {
	containerPreview,
	componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "LichtUI",
	description: "a UI component library based on vue3",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "组件", link: "/home/base/button" },
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
					{
						text: "Link 链接",
						link: "/home/base/link",
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
					{
						text: "CheckBox 复选框",
						link: "/home/form/checkbox",
					},
					{
						text: "Radio 单选框",
						link: "/home/form/radio",
					},
					{
						text: "Switch 开关",
						link: "/home/form/switch",
					},
					{
						text: "Select 下拉框",
						link: "/home/form/select",
					},
					{
						text: "Slider 滑块",
						link: "/home/form/slider",
					},
				],
			},
			{
				text: "Nav 导航",
				items: [
					{
						text: "Menu 菜单",
						link: "/home/nav/menu",
					},
					{
						text: "DropDown 下拉菜单",
						link: "/home/nav/dropdown",
					},
				],
			},
			{
				text: "Show 数据展示",
				items: [
					{
						text: "Tag 标签",
						link: "/home/show/tag",
					},
					{
						text: "Avatar 头像",
						link: "/home/show/avatar",
					},
					{
						text: "Card 卡片",
						link: "/home/show/card",
					},
					{
						text: "Alert 警告提示",
						link: "/home/show/alert",
					},
					{
						text: "Collapse 折叠面板",
						link: "/home/show/collapse",
					},
					{
						text: "Table 表格",
						link: "/home/show/table",
					},
					{
						text: "Badge 徽章",
						link: "/home/show/badge",
					},
				],
			},
			{
				text: "Feedback 反馈",
				items: [
					{ text: "Modal  模态框", link: "/home/feedback/modal" },
					{ text: "Message  全局消息", link: "/home/feedback/message" },
					{ text: "ToolTip  文字提示", link: "/home/feedback/tooltip" }
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
			md.use(containerPreview);
			md.use(componentPreview);
		},
	},
	base: "/LichtUI/",
	outDir: "../public",
	vite: {
		resolve: {
			alias: {
				// 示例别名
				"@": fileURLToPath(new URL("../", import.meta.url)),
			},
		},
	},
});
