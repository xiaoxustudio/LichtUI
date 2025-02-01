import { writeFileSync } from "fs";
import { Project } from "ts-morph";

const build = process.argv[3] || "dist";
const project = new Project();
console.time("types");
console.log("\x1B[36m%s\x1B[0m", "正在生成类型中...\n");

// todo 自动生成类型文件
project.addSourceFilesAtPaths(`./${build}/components/*/*.d.ts`);
const sourceFiles = project.getSourceFiles();
let text = "";
for (let index = 0; index < sourceFiles.length; index++) {
	const element = sourceFiles[index];
	const getExoports = element.getExportedDeclarations();
	const module = element.getModule('"vue"');
	const baseName = element
		.getFilePath()
		.substring(
			element.getFilePath().lastIndexOf("components/") + 11,
			element.getFilePath().lastIndexOf("/index.d.ts")
		);
	if (getExoports.has("default") && module) {
		const o = module.getInterface("GlobalComponents")!.getChildren()[3];
		const name = o.getFirstChild()?.getChildren()[0].getText();
		text += "\t".repeat(2);
		text += `${name}: typeof import("licht-ui/components/${baseName}")["default"];\n`;
	}
}

const code = `
// 自动生成类型文件 ${new Date().toLocaleString()}
declare module "vue" {
	export interface GlobalComponents {
${text.replace(/\n$/, "")}
	}
}
export {};
`;
writeFileSync(`./${build}/volar.d.ts`, code);
console.log("\x1B[31m%s\x1B[0m", "生成类型完成");
console.timeEnd("types");
