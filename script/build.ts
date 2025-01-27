import { readdirSync, copyFileSync, mkdirSync } from "fs";
import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { copyDirSync, deleteFolderRecursive } from "./utils";

const DefineOptions = require("unplugin-vue-define-options/vite"); // todo 无法使用import导入
const path = require("path"); // todo 无法使用import导入
const rootDir = path.resolve(__dirname, "../");
const packages = readdirSync(resolve("./packages/"));

function resolve(...urlOrUrls: string[]) {
	return path.resolve(rootDir, ...urlOrUrls);
}

const buildDir = "dist";
!(async function main() {
	for (let i of packages) {
		const packageRoot = resolve("./packages/" + i);
		const packageOutDir = resolve(`./${buildDir}/${i}`);
		const entry = resolve(packageRoot + "/index.ts");
		const baseConfig = defineConfig({
			plugins: [
				DefineOptions({
					exclude: "../docs",
				}),
				vue(),
				dts({
					include: packageRoot,
					outDir: resolve(buildDir, i),
					exclude: ["../docs", "node_modules/**"],
					cleanVueFileName: true,
					beforeWriteFile: (filePath: string, content: string) => {
						return Promise.resolve({
							filePath: filePath.replace(
								/components\/components/i,
								"components/types"
							),
							content,
						});
					},
				}),
			],
			build: {
				lib: {
					entry,
					name: "licht-ui",
					fileName: (format: any) => `index.${format}.js`,
					formats: ["es", "umd"],
				},
				outDir: packageOutDir,
				emptyOutDir: true,
				rollupOptions: {
					external: ["vue"],
					output: {
						globals: (_name) => _name,
						exports: "named",
					},
				},
			},
		});
		await build(baseConfig);
		copyFileSync(resolve("README.md"), resolve(`./${buildDir}/README.md`));
		copyFileSync(resolve("./dist.json"), resolve(`./${buildDir}/package.json`));
		copyFileSync(
			resolve(packageRoot + "/dist.json"),
			resolve(`./${buildDir}/${i}/package.json`)
		);
		mkdirSync(resolve(`./${buildDir}/style`), { recursive: true });

		deleteFolderRecursive(resolve(`${packageOutDir}/style`));
	}

	copyDirSync(
		resolve(`${resolve(`./packages/components`)}/style`),
		resolve(`./${buildDir}/style`)
	);
	copyDirSync(
		resolve(`./packages/theme-chalk/src`),
		resolve(`./${buildDir}/theme-chalk/src`)
	);
	copyFileSync(
		resolve(`./packages/theme-chalk/index.scss`),
		resolve(`./${buildDir}/theme-chalk/index.scss`)
	);
})();
