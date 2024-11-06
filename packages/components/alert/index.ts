import { withInstall } from "@licht-ui/utils";
import _Alert from "./src/alert.vue";
import "@licht-ui/theme-chalk/src/alert.scss";
export * from "./src/alert";

export default withInstall(_Alert);

declare module "vue" {
	export interface GlobalComponents {
		LiAlert: typeof _Alert;
	}
}
