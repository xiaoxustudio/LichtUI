import withInstall from "@licht-ui/utils/withInstall";
import _DD from "./src/dropdown.vue";
import "@licht-ui/theme-chalk/src/dropdown.scss";
export * from "./src/dropdown";

export default withInstall(_DD);

declare module "vue" {
	export interface GlobalComponents {
		LiDropDown: typeof _DD;
	}
}
