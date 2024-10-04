import { ExtractPropTypes, PropType } from "vue";
export interface MenuItemData {
	label?: string;
	icon?: string;
	list?: MenuItemData[];
}
export const menuItemProp = {
	index: Number,
	active: Boolean,
	data: {
		type: Object as PropType<MenuItemData>,
	},
};
export type MenuItemEmits = {
	SelectSubMenu: [index: number, item: MenuItemData];
	SelectMenu: [index: number, item: MenuItemData];
};
export type MenuItemProp = ExtractPropTypes<typeof menuItemProp>;
