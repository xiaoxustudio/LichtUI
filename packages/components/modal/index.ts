import { withInstall } from "@licht-ui/utils";
import _Modal from "./src/modal.vue";
import "@licht-ui/theme-chalk/src/modal.scss";
import "@licht-ui/theme-chalk/src/mask.scss";
export * from "./src/modal";

export default withInstall(_Modal);

declare module "vue" {
	export interface GlobalComponents {
		LiModal: typeof _Modal;
	}
}
