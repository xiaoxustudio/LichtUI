import { ExtractPropTypes, PropType } from "vue";
import { MenuItemData } from "./menu-item";
export const menuItemDropProp = {
	data: {
		type: Object as PropType<MenuItemData[]>,
	},
};
export type MenuItemDropProp = ExtractPropTypes<typeof menuItemDropProp>;
