import { withInstall } from "@licht-ui/utils";
import _Group from "./src/radio-group.vue";
import "@licht-ui/theme-chalk/src/radioGroup.scss";
export * from "./src/radio-group";

export default withInstall(_Group);

declare module "vue" {
	export interface GlobalComponents {
		LiRadioGroup: typeof _Group;
	}
}
