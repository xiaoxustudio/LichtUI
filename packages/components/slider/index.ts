import { withInstall } from "@licht-ui/utils";
import _Slider from "./src/slider.vue";
import "@licht-ui/theme-chalk/src/slider.scss";
export * from "./src/slider";

export default withInstall(_Slider);

declare module "vue" {
	export interface GlobalComponents {
		LiSlider: typeof _Slider;
	}
}
