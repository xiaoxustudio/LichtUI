import { ExtractPropTypes } from "vue";

export const dropdownItemProp = {
	text: String,
	meta: Object,
};
export type DropdownItemProp = ExtractPropTypes<typeof dropdownItemProp>;
