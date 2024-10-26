import withInstall from "@licht-ui/utils/withInstall";
import _Avatar from "./src/avatar.vue";
import "@licht-ui/theme-chalk/src/avatar.scss";
export * from "./src/avatar";

export default withInstall(_Avatar);

declare module "vue" {
	export interface GlobalComponents {
		LiAvatar: typeof _Avatar;
	}
}
