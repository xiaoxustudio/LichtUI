import { ExtractPropTypes, PropType, StyleValue } from "vue";
const sizeProp = ["small", "middle", "large"];
export const avatarProp = {
	alt: {
		type: String as PropType<string>,
		default: "LiAvatar",
	},
	size: {
		type: String as PropType<(typeof sizeProp)[number]>,
		default: "middle",
	},
	styleImg: Object as PropType<StyleValue>,
	name: String,
	src: String,
	round: Boolean,
	bgColor: String,
	nameColor: String,
} as const;
export type AvatarProp = ExtractPropTypes<typeof avatarProp>;
