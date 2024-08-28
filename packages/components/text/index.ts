import withInstall from "@licht-ui/utils/withInstall";
import _Text from "./src/text.vue";
import "@licht-ui/theme-chalk/src/text.scss";
export * from "./src/text";

export default withInstall(_Text);

declare module "vue" {
	export interface GlobalComponents {
		LiText: typeof _Text;
	}
}
