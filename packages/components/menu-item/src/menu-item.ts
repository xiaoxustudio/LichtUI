import { ExtractPropTypes, PropType } from "vue";
export interface MenuItemData {
	label?: string;
	icon?: string;
}
export const menuItemProp = {
	index: Number,
	active: Boolean,
	data: {
		type: Object as PropType<MenuItemData>,
	},
};
export type MenuItemProp = ExtractPropTypes<typeof menuItemProp>;
