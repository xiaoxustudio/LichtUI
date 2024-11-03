import { withInstall } from "@licht-ui/utils";
import _Row from "./src/row.vue";
import "@licht-ui/theme-chalk/src/row.scss";
export * from "./src/row";

export default withInstall(_Row);

declare module "vue" {
	export interface GlobalComponents {
		LiRow: typeof _Row;
	}
}
