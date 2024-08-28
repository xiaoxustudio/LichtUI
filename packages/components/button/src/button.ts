import { ExtractPropTypes, PropType } from "vue";

const ButtonType = ["default", "primary", "warnning", "danger", "info"];
const ButtonNativeType = ["button", "submit", "reset"] as const;
type Ntype = PropType<(typeof ButtonNativeType)[number]>;
export const ButtonSize = ["large", "normal", "small", "mini"];

export const buttonProp = {
	type: {
		type: String,
		vaildator: (val: string) => ButtonType.includes(val),
		default: "default",
	},
	ntype: {
		type: String as Ntype,
		default: "button",
	},
	size: {
		type: String,
		values: typeof ButtonSize,
		default: "",
	},
	round: Boolean,
	disabled: Boolean,
	loading: Boolean,
	plain: Boolean,
} as const;
export type ButtonProp = ExtractPropTypes<typeof buttonProp>;
