import { ExtractPropTypes } from "vue";
export const tableItemProp = {
	label: String,
	prop: String,
} as const;
export type TableItemProp = ExtractPropTypes<typeof tableItemProp>;
