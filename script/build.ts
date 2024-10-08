import { readdirSync, copyFileSync } from "fs";
import { build, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const DefineOptions = require("unplugin-vue-define-options/vite");
const path = require("path");
const rootDir = path.resolve(__dirname, "../");

function resolve(...urlOrUrls: string[]) {
	return path.resolve(rootDir, ...urlOrUrls);
}
const packages = readdirSync(resolve("./packages/"));

const buildDir = "licht-ui";

async function main() {
	for (let i of packages) {
		const packageRoot = resolve("./packages/" + i);
		const packageOutDir = resolve(`./${buildDir}/${i}`);
		const entry = resolve(packageRoot + "/index.ts");
		const baseConfig = defineConfig({
			plugins: [
				vue(),
				DefineOptions(),
				dts({
					include: packageRoot,
					outDir: path.resolve(packageOutDir, "types"),
				}),
			],
			optimizeDeps: {
				include: ["../packages/components/**/src/*.vue"],
			},
			build: {
				commonjsOptions: {
					include: [/docs/, /node_modules/, /play/],
				},
				lib: {
					entry,
					name: "licht-ui",
					fileName: (format: any) => `index.${format}.js`,
					formats: ["cjs", "es", "umd"],
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
		copyFileSync(
			resolve(packageRoot + "/package.json"),
			resolve(`./${buildDir}/${i}/package.json`)
		);
	}
}
main();
