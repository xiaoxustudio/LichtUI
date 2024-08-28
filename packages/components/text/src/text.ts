import { ExtractPropTypes, PropType } from "vue";
const TextType = ["default", "primary", "warnning", "danger", "info"];
const TextTagType = ["bline", "mline", "tline", "mark"];
export const textProp = {
	type: {
		type: String as PropType<(typeof TextType)[number]>,
		default: "default",
	},
	bold: {
		type: Boolean,
		default: false,
	},
	truncated: {
		type: [Boolean, Number] as PropType<Boolean | Number>,
		default: false,
	},
	tag: {
		type: String as PropType<(typeof TextTagType)[number]>,
		default: "",
	},
} as const;
export type TextProp = ExtractPropTypes<typeof textProp>;
