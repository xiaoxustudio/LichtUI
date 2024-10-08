import { ExtractPropTypes, PropType } from "vue";
export interface DropdownDataItem {
	label: string;
	id: string;
	data?: any;
}
const _pos = ["top", "bottom"];
const _trigger = ["hover", "click"];
export const dropdownProp = {
	list: {
		type: Array as PropType<DropdownDataItem[]>,
		default: [],
	},
	position: {
		type: String as PropType<(typeof _pos)[number]>,
		default: "bottom",
	},
	trigger: {
		type: String as PropType<(typeof _trigger)[number]>,
		default: "hover",
	},
};
export type dropdownEmits = {
	command: [index: number, item: DropdownDataItem];
};
export type DropdownProp = ExtractPropTypes<typeof dropdownProp>;
