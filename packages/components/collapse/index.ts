import { withInstall } from "@licht-ui/utils";
import _Collpase from "./src/collapse.vue";
import "@licht-ui/theme-chalk/src/collapse.scss";
export * from "./src/collapse.vue";

export default withInstall(_Collpase);

declare module "vue" {
	export interface GlobalComponents {
		LiCollapse: typeof _Collpase;
	}
}
