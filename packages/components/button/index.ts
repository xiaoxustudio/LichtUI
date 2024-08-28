// 整合组件并导出
import withInstall from "@licht-ui/utils/withInstall";
import _Button from "./src/button.vue";
import "@licht-ui/theme-chalk/src/button.scss";
export * from "./src/button";

export default withInstall(_Button);

declare module "vue" {
	export interface GlobalComponents {
		LiButton: typeof _Button;
	}
}
