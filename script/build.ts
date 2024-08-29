import { build, defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
const path = require("path");
const fs = require("fs");

const DefineOptions = require("unplugin-vue-define-options/vite");
const rootDir = path.resolve(__dirname, "../");

const outDir = resolve("./dist");

const baseConfig = defineConfig({
	plugins: [
		vue(),
		DefineOptions(),
		dts({
			include: ["packages/components"],
			outDir: path.resolve(outDir, "types"),
		}),
	],
	build: {
		lib: {
			entry: resolve("packages/components/index.ts"),
			name: "licht",
			fileName: (format: any) => `index.${format}.js`,
		},
		outDir,
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});

main();

async function main() {
	// build
	await build(baseConfig);

	await copyFiles();
}

async function copyFiles() {
	fs.copyFileSync(resolve("README.md"), resolve("./dist/README.md"));
}

function resolve(...urlOrUrls: string[]) {
	return path.resolve(rootDir, ...urlOrUrls);
}
