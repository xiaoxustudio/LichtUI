import { withInstall } from "@licht-ui/utils";
import _Table from "./src/table.vue";
import "@licht-ui/theme-chalk/src/table.scss";
export * from "./src/table";

export default withInstall(_Table);

declare module "vue" {
	export interface GlobalComponents {
		LiTable: typeof _Table;
	}
}
