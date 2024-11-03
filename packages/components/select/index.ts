import { withInstall } from "@licht-ui/utils";
import _Select from "./src/select.vue";
import "@licht-ui/theme-chalk/src/select.scss";
export * from "./src/select";

export default withInstall(_Select);

declare module "vue" {
	export interface GlobalComponents {
		LiSelect: typeof _Select;
	}
}
