import { withInstall } from "@licht-ui/utils";
import _Radio from "./src/radio.vue";
import "@licht-ui/theme-chalk/src/radio.scss";
export * from "./src/radio";

export default withInstall(_Radio);

declare module "vue" {
	export interface GlobalComponents {
		LiRadio: typeof _Radio;
	}
}
