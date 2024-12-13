import { ExtractPropTypes, PropType } from "vue";
const type = ["default", "primary", "warnning", "danger", "info"];
export const sliderProp = {
	type: {
		type: String as PropType<(typeof type)[number]>,
		default: "default",
	},
	max: {
		type: Number,
		default: 100,
	},
	min: {
		type: Number,
		default: 0,
	},
	step: {
		type: Number,
		default: 1,
	},
	disabled: Boolean,
} as const;

export type SliderEmits = {
	onChange: [value: number, oldValue: number];
};
export type SliderProp = ExtractPropTypes<typeof sliderProp>;
