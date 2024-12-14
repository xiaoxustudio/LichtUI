import { ExtractPropTypes } from "vue";
export const tooltipProp = {
	title: String,
} as const;
export type ToolTipProp = ExtractPropTypes<typeof tooltipProp>;
