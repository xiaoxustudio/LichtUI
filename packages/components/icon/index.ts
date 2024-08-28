// 整合组件并导出
import withInstall from "@licht-ui/utils/withInstall";
import _Icon from "./src/icon.vue";
import "@licht-ui/theme-chalk/src/icon.scss";
export * from "./src/icon";

export default withInstall(_Icon);

declare module "vue" {
	export interface GlobalComponents {
		LiIcon: typeof _Icon;
	}
}
