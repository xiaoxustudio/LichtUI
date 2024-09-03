import { ExtractPropTypes, PropType } from "vue";
export interface ListItem {
    label: string,
    id: string,
    data?: any
}
const _pos = ['top', 'bottom']
export const dropdownProp = {
    list: {
        type: Array as PropType<ListItem[]>,
        default: []
    },
    position: {
        type: String as PropType<typeof _pos[number]>,
        default: "bottom"
    }
};
export type dropdownEmits = {
    command: [index: number, item: ListItem]
};
export type DropdownProp = ExtractPropTypes<typeof dropdownProp>;
