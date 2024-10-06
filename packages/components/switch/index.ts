import withInstall from "@licht-ui/utils/withInstall";
import _Swtich from "./src/switch.vue";
import "@licht-ui/theme-chalk/src/switch.scss";
export * from "./src/switch";

export default withInstall(_Swtich);

declare module "vue" {
	export interface GlobalComponents {
		LiSwitch: typeof _Swtich;
	}
}
