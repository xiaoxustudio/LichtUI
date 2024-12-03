import { withInstall } from "@licht-ui/utils";
import _Tag from "./src/tag.vue";
import "@licht-ui/theme-chalk/src/tag.scss";
export * from "./src/tag";

export default withInstall(_Tag);

declare module "vue" {
	export interface GlobalComponents {
		LiTag: typeof _Tag;
	}
}
