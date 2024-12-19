import { ExtractPropTypes, PropType } from "vue";
const triggerMode = ["hover", "click", "contextmenu"] as const;
export const tooltipProp = {
	show: {
		type: Boolean,
		default: undefined,
	},
	title: String,
	trigger: {
		type: String as PropType<(typeof triggerMode)[number]>,
		default: "hover",
	},
	disabled: Boolean,
} as const;
export type ToolTipProp = ExtractPropTypes<typeof tooltipProp>;
