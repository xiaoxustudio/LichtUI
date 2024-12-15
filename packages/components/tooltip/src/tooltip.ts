import { ExtractPropTypes } from "vue";
export const tooltipProp = {
	show: {
		type: Boolean,
		default: undefined,
	},
	title: String,
} as const;
export type ToolTipProp = ExtractPropTypes<typeof tooltipProp>;
