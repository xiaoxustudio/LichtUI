import { withInstall } from "@licht-ui/utils";
import _Col from "./src/col.vue";
import "@licht-ui/theme-chalk/src/col.scss";
export * from "./src/col";

export default withInstall(_Col);

declare module "vue" {
	export interface GlobalComponents {
		LiCol: typeof _Col;
	}
}
