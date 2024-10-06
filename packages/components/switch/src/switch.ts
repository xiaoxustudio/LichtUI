import { ExtractPropTypes, PropType } from "vue";
const SwitchType = ["default", "primary", "warnning", "danger", "info"];
export const switchProp = {
	type: {
		type: String as PropType<(typeof SwitchType)[number]>,
		default: "default",
	},
	disabled: Boolean,
	enableVal: String,
	disableVal: String,
	modelValue: Boolean,
} as const;
export type SwitchProp = ExtractPropTypes<typeof switchProp>;
