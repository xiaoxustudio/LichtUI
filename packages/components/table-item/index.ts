import { withInstall } from "@licht-ui/utils";
import _TableItem from "./src/table-item.vue";
import "@licht-ui/theme-chalk/src/table-item.scss";
export * from "./src/table-item";

export default withInstall(_TableItem);

declare module "vue" {
	export interface GlobalComponents {
		LiTableItem: typeof _TableItem;
	}
}
