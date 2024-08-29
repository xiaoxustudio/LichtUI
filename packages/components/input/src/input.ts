import { ExtractPropTypes, PropType } from "vue";
const InputType = ["default", "primary", "warnning", "danger", "info"];
const Type = ["text", "password"];
export const inputProp = {
	type: {
		type: String as PropType<(typeof InputType)[number]>,
		default: "default",
	},
	ntype: {
		type: String as PropType<(typeof Type)[number]>,
		default: "text",
	},
	label: String,
	modelValue: String,
	placeholder: String,
	showPassword: Boolean,
	clearable: Boolean,
	disabled: Boolean,
} as const;
export type InputProp = ExtractPropTypes<typeof inputProp>;
