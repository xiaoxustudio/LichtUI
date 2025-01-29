import { ExtractPropTypes, PropType } from "vue";
const Type = ["primary", "warnning", "danger", "info"];
export const badgeProp = {
	min: {
		type: Number as PropType<number>,
		default: 0,
	},
	max: {
		type: Number as PropType<number>,
		default: 99,
	},
	value: {
		type: Number as PropType<number | string>,
		default: 0,
	},
	type: {
		type: String as PropType<(typeof Type)[number]>,
		vaildator: (val: string) => Type.includes(val),
		default: "danger",
	},
	isDot: Boolean,
} as const;
export type BadgeProp = ExtractPropTypes<typeof badgeProp>;
