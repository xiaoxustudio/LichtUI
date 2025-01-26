import { withInstall } from "@licht-ui/utils";
import _CollapseItem from "./src/collapse-item.vue";
import "@licht-ui/theme-chalk/src/collapse-item.scss";
export * from "./src/collapse-item";

export default withInstall(_CollapseItem);

declare module "vue" {
	export interface GlobalComponents {
		LiCollapseItem: typeof _CollapseItem;
	}
}
