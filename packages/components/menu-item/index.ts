import withInstall from "@licht-ui/utils/withInstall";
import _DDI from "./src/menu-item.vue";
import "@licht-ui/theme-chalk/src/menuitem.scss";
export * from "./src/menu-item";

export default withInstall(_DDI);

declare module "vue" {
	export interface GlobalComponents {
		LiMenuItem: typeof _DDI;
	}
}
