import { ExtractPropTypes, PropType } from "vue";
const ShowType = ["none", "hover"];
export const cardProp = {
	showType: {
		type: String as PropType<(typeof ShowType)[number]>,
		default: "none",
	},
	header: String,
	footer: String,
} as const;
export type CardProp = ExtractPropTypes<typeof cardProp>;
