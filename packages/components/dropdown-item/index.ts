import { withInstall } from "@licht-ui/utils";
import _DDI from "./src/dropdown-item.vue";
import "@licht-ui/theme-chalk/src/dropdownitem.scss";
export * from "./src/dropdown-item";

export default withInstall(_DDI);

declare module "vue" {
	export interface GlobalComponents {
		LiDropDownItem: typeof _DDI;
	}
}
