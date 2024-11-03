import { withInstall } from "@licht-ui/utils";
import _Menu from "./src/menu.vue";
import "@licht-ui/theme-chalk/src/menu.scss";
export * from "./src/menu";

export default withInstall(_Menu);

declare module "vue" {
	export interface GlobalComponents {
		LiMenu: typeof _Menu;
	}
}
