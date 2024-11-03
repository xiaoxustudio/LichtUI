import { withInstall } from "@licht-ui/utils";
import _Input from "./src/input.vue";
import "@licht-ui/theme-chalk/src/input.scss";
export * from "./src/input";

export default withInstall(_Input);

declare module "vue" {
	export interface GlobalComponents {
		LiInput: typeof _Input;
	}
}
