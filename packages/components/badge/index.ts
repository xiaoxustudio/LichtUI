import { withInstall } from "@licht-ui/utils";
import _Badge from "./src/badge.vue";
import "@licht-ui/theme-chalk/src/badge.scss";
export * from "./src/badge";

export default withInstall(_Badge);

declare module "vue" {
	export interface GlobalComponents {
		LiBadge: typeof _Badge;
	}
}
