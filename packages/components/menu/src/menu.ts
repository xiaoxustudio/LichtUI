import { ExtractPropTypes, PropType } from "vue";
import { MenuItemData } from "@licht-ui/components/menu-item";
const _direction = ["row", "col"];
export type ListType = MenuItemData[];
export const menuProp = {
	direction: {
		type: String as PropType<(typeof _direction)[number]>,
		default: "row",
	},
	defaultIndex: {
		type: Number,
		default: 0,
	},
	list: {
		type: Array as PropType<ListType>,
		default: [],
	},
} as const;
export type MenuEmits = {
	command: [index: number, item: MenuItemData];
	subCommand: [index: number, item: MenuItemData];
};
export type MenuProp = ExtractPropTypes<typeof menuProp>;
