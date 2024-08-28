import { ExtractPropTypes, PropType } from "vue";
export const iconProp = {
	color: String,
	size: [Number, String] as PropType<string | number>,
} as const;
export type IconProp = ExtractPropTypes<typeof iconProp>;
