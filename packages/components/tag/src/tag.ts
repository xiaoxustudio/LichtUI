import { ExtractPropTypes, PropType } from "vue";
const TagType = ["default", "primary", "warnning", "danger", "info"];
export const tagProp = {
	type: {
		type: String as PropType<(typeof TagType)[number]>,
		default: "default",
	},
	closed: Boolean,
} as const;
export type TagProp = ExtractPropTypes<typeof tagProp>;
