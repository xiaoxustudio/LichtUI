import { ExtractPropTypes, PropType } from "vue";
const SelectType = ["default", "primary", "warnning", "danger", "info"];
export interface ListData {
	name: string;
	value: any;
	disabled?: boolean;
}
export const selectProp = {
	type: {
		type: String as PropType<(typeof SelectType)[number]>,
		default: "default",
	},
	list: {
		type: Array as PropType<ListData[]>,
	},
	modelValue: [String, Number, Boolean] as PropType<string | number | boolean>,
	disabled: Boolean,
} as const;
export type selectEmits = {
	command: [index: number, item: ListData];
};
export type SelectProp = ExtractPropTypes<typeof selectProp>;
