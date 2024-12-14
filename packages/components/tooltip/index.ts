import { withInstall } from "@licht-ui/utils";
import _ToolTip from "./src/tooltip.vue";
import "@licht-ui/theme-chalk/src/tooltip.scss";
export * from "./src/tooltip";

export default withInstall(_ToolTip);

declare module "vue" {
	export interface GlobalComponents {
		LiToolTip: typeof _ToolTip;
	}
}
