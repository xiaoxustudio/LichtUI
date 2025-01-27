import {
	existsSync,
	readdirSync,
	lstatSync,
	unlinkSync,
	rmdirSync,
	copyFileSync,
	mkdirSync,
} from "fs";
const path = require("path");

export function deleteFolderRecursive(path: string) {
	if (existsSync(path)) {
		readdirSync(path).forEach(function (file: string) {
			const curPath = path + "/" + file;
			if (lstatSync(curPath).isDirectory()) {
				// recurse
				deleteFolderRecursive(curPath);
			} else {
				// delete file
				unlinkSync(curPath);
			}
		});
		rmdirSync(path);
	}
}

export function copyDirSync(src: string, dest: string) {
	if (!existsSync(src)) {
		return;
	}
	if (!existsSync(dest)) {
		mkdirSync(dest, { recursive: true });
	}

	// 读取源目录内容
	const entries = readdirSync(src, { withFileTypes: true });

	for (let entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destPath = path.join(dest, entry.name);

		if (entry.isDirectory()) {
			// 如果是目录，递归复制
			copyDirSync(srcPath, destPath);
		} else {
			// 如果是文件，直接复制
			copyFileSync(srcPath, destPath);
		}
	}
}
