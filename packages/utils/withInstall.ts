import { App, Plugin } from "vue";
type LichtSFCInstall<T> = T & Plugin & { name: string };
export default function withInstall<T>(comp: T) {
	(comp as LichtSFCInstall<T>).install = function (app: App) {
		app.component((comp as any).name!, comp as Plugin);
	};
	return comp as LichtSFCInstall<T>;
}
