import { ExtractPropTypes } from "vue";
export const colProp = {
	span: {
		type: Number,
		default: 0,
	},
};
export type ColProp = ExtractPropTypes<typeof colProp>;
