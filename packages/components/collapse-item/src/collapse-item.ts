import { ExtractPropTypes } from "vue";
export const collapseItemProp = {
	title: {
		type: String,
		default: "默认标题",
	},
	content: String,
};
export type CollapseItemProp = ExtractPropTypes<typeof collapseItemProp>;
