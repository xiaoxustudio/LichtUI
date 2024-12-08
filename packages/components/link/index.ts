import { withInstall } from "@licht-ui/utils";
import _Link from "./src/link.vue";
import "@licht-ui/theme-chalk/src/link.scss";
export * from "./src/link";

export default withInstall(_Link);

declare module "vue" {
	export interface GlobalComponents {
		LiLink: typeof _Link;
	}
}
