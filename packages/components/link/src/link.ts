import { ExtractPropTypes, PropType } from "vue";
const Type = ["default", "primary", "warnning", "danger", "info"];
export const linkType = {
	type: {
		type: String as PropType<(typeof Type)[number]>,
		default: "default",
	},
	disabled: Boolean,
	href: String,
	alt: String,
} as const;
export type LinkType = ExtractPropTypes<typeof linkType & HTMLAnchorElement>;
