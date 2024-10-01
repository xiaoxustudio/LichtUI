import { ExtractPropTypes, PropType } from "vue";
export const radioGroupProp = {
	modelValue: [String, Number, Boolean] as PropType<string | number | boolean>,
	name: String,
} as const;
export type RadioGroupProp = ExtractPropTypes<typeof radioGroupProp>;
