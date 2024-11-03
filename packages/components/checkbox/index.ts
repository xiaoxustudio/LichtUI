import { withInstall } from "@licht-ui/utils";
import _CheckBox from "./src/checkbox.vue";
import "@licht-ui/theme-chalk/src/checkbox.scss";
export * from "./src/checkbox";

export default withInstall(_CheckBox);

declare module "vue" {
	export interface GlobalComponents {
		LiCheckBox: typeof _CheckBox;
	}
}
