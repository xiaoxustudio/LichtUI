import { ExtractPropTypes, PropType } from "vue";
const TagType = ["default", "primary", "warnning", "danger", "info"];
const ThemeType = ["dark", "light", "plain"];
export const tagProp = {
	type: {
		type: String as PropType<(typeof TagType)[number]>,
		default: "default",
	},
	theme: {
		type: String as PropType<(typeof ThemeType)[number]>,
		default: "light",
	},
	closable: Boolean,
	round: Boolean,
} as const;
export type TagProp = ExtractPropTypes<typeof tagProp>;
