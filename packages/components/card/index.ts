import { withInstall } from "@licht-ui/utils";
import _Card from "./src/card.vue";
import "@licht-ui/theme-chalk/src/card.scss";
export * from "./src/card";

export default withInstall(_Card);

declare module "vue" {
	export interface GlobalComponents {
		LiCard: typeof _Card;
	}
}
