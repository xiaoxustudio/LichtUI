import { readdirSync, copyFileSync, mkdirSync } from "fs";
import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { copyDirSync, deleteFolderRecursive } from "./utiles";

const DefineOptions = require("unplugin-vue-define-options/vite");
const path = require("path");
const rootDir = path.resolve(__dirname, "../");

function resolve(...urlOrUrls: string[]) {
	return path.resolve(rootDir, ...urlOrUrls);
}
const packages = readdirSync(resolve("./packages/"));

const buildDir = "dist";
async function main() {
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
				chunkSizeWarningLimit: 1500,
				terserOptions: {
					compress: {
						drop_console: true,

						drop_debugger: true,
					},
				},
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
			resolve(packageRoot + "/package.json"),
			resolve(`./${buildDir}/${i}/package.json`)
		);
		mkdirSync(resolve(`./${buildDir}/style`), { recursive: true });
		copyDirSync(
			resolve(`${packageOutDir}/style`),
			resolve(`./${buildDir}/style`)
		);
		deleteFolderRecursive(resolve(`${packageOutDir}/style`));
	}
}
main();
