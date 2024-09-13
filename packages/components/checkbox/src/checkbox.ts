import { ExtractPropTypes, PropType } from "vue";
const _Type = ["default", "primary", "warnning", "danger", "info"];
export const checkboxProp = {
	type: {
		type: String as PropType<(typeof _Type)[number]>,
		default: "default",
	},
	label: String,
	modelValue: Boolean,
	disabled: Boolean,
} as const;
export type CheckBoxProp = ExtractPropTypes<typeof checkboxProp>;
