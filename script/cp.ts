import {
	existsSync,
	mkdirSync,
	rmSync,
	unlinkSync,
	writeFileSync,
} from "node:fs";

const path = require("path");

const componentName = process.argv[2];
const isDelete = process.argv[3] === "-d"; // 这里判断是否删除

if (!componentName) {
	console.error("请提供组件名称，例如: pnpm cp test");
	process.exit(1);
}

// 处理大驼峰命名
const componentNameUpper = componentName
	.split("-")
	.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
	.join("");

// 路径配置
const paths = {
	components: {
		root: path.join(process.cwd(), "packages/components", componentName),
		src: path.join(process.cwd(), "packages/components", componentName, "src"),
		index: path.join(
			process.cwd(),
			"packages/components",
			componentName,
			"index.ts"
		),
		vue: path.join(
			process.cwd(),
			"packages/components",
			componentName,
			"src",
			`${componentName}.vue`
		),
		ts: path.join(
			process.cwd(),
			"packages/components",
			componentName,
			"src",
			`${componentName}.ts`
		),
	},
	theme: {
		scss: path.join(
			process.cwd(),
			"packages/theme-chalk/src",
			`${componentName}.scss`
		),
	},
};

// 创建目录
const createDir = (dirPath: string) => {
	if (!existsSync(dirPath)) {
		mkdirSync(dirPath, { recursive: true });
	}
};

// 创建文件
const createFile = (
	filePath: string,
	content: string | NodeJS.ArrayBufferView<ArrayBufferLike>
) => {
	if (existsSync(filePath)) {
		console.error(`文件已存在: ${filePath}`);
		return false;
	}
	writeFileSync(filePath, content);
	return true;
};

// 删除文件
const deleteFile = (filePath: string) => {
	if (!existsSync(filePath)) {
		return false;
	}
	unlinkSync(filePath);
	return true;
};
// 删除目录
const deleteDir = (dirPath: string) => {
	if (!existsSync(dirPath)) {
		return false;
	}
	rmSync(dirPath, { recursive: true });
	return true;
};
// 文件模板
const templates = {
	index: `import { withInstall } from "@licht-ui/utils";
import _${componentNameUpper} from "./src/${componentName}.vue";
import "@licht-ui/theme-chalk/src/${componentName}.scss";
export * from "./src/${componentName}";

export default withInstall(_${componentNameUpper});

declare module "vue" {
    export interface GlobalComponents {
        Li${componentNameUpper}: typeof _${componentNameUpper};
    }
}`,

	vue: `
<template>
</template>
<script setup lang="ts">
import { createNamespace } from "@licht-ui/utils";
import { ${componentName}Type } from "./${componentName}";
defineOptions({ 
name: 'Li${componentNameUpper}'
});
defineProps(${componentName}Type);
const bem = createNamespace("${componentName}");
</script>
`,

	ts: `import { ExtractPropTypes } from "vue";
export const ${componentName}Type = {} as const;
export type ${componentNameUpper}Type = ExtractPropTypes<typeof ${componentName}Type & HTMLAnchorElement>;`,

	scss: `@use "./common/var.scss" as *;
@use "./mixins/mixins.scss" as *;

@include b(${componentName}) {
	
}`,
};

try {
	if (isDelete) {
		//————————
		deleteDir(paths.components.root);
		//————————
		deleteFile(paths.theme.scss);
		console.log(`\x1b[32m组件 ${componentName} 删除成功！\x1b[0m`);
		console.log(`组件路径: ${paths.components.root}`);
		console.log(`样式路径: ${paths.theme.scss}`);
	} else {
		//————————
		createDir(paths.components.src);
		//————————
		createFile(paths.components.index, templates.index);
		createFile(paths.components.vue, templates.vue);
		createFile(paths.components.ts, templates.ts);

		createFile(paths.theme.scss, templates.scss);

		console.log(`\x1b[32m组件 ${componentName} 创建成功！\x1b[0m`);
		console.log(`组件路径: ${paths.components.root}`);
		console.log(`样式路径: ${paths.theme.scss}`);
	}
} catch (error) {
	console.error("\x1b[31m创建组件失败:\x1b[0m", error);
	process.exit(1);
}
