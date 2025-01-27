interface BEMStruct {
	b: (block?: string) => string;
	e: (elem?: string) => string;
	m: (modifier?: string) => string;
	be: (block?: string, elem?: string) => string;
	bm: (block?: string, modifier?: string) => string;
	em: (elem?: string, modifier?: string) => string;
	bem: (block?: string, elem?: string, modifier?: string) => string;
	is: (name: string, state: any) => string;
}
// css 类名规则转换
function _bem(prefix: string, block: string, elem: string, modifier: string) {
	if (block) {
		prefix += `-${block}`;
	}
	if (elem) {
		prefix += `__${elem}`;
	}
	if (modifier) {
		prefix += `--${modifier}`;
	}
	return prefix;
}

function createBEM(prefix_name: string): BEMStruct {
	const b = (block: string = "") => _bem(prefix_name, block, "", "");
	const e = (elem: string = "") =>
		elem ? _bem(prefix_name, "", elem, "") : "";
	const m = (modifier: string = "") =>
		modifier ? _bem(prefix_name, "", "", modifier) : "";

	const be = (block: string = "", elem: string = "") =>
		block && elem ? _bem(prefix_name, block, elem, "") : "";
	const bm = (block: string = "", modifier: string = "") =>
		block && modifier ? _bem(prefix_name, block, "", modifier) : "";
	const em = (elem: string = "", modifier: string = "") =>
		elem && modifier ? _bem(prefix_name, "", elem, modifier) : "";
	const bem = (block: string = "", elem: string = "", modifier: string = "") =>
		block && elem && modifier ? _bem(prefix_name, block, elem, modifier) : "";

	const is = (name: string, state: any) => (state ? `is-${name}` : "");
	return {
		b,
		e,
		m,
		be,
		bm,
		em,
		bem,
		is,
	};
}
export function createNamespace(name: string) {
	const prefix_name = `li-${name}`;
	return createBEM(prefix_name);
}
