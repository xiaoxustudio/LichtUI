import { baseComponentsProp } from "@licht-ui/utils";
import { ExtractPropTypes, PropType } from "vue";
const _dirType = ["column", "row"];
type DirType = (typeof _dirType)[number];
export const rowProp = {
	direction: String as PropType<DirType>,
	gutter: {
		type: Number,
		default: 0,
	},
} as const;
export type RowProp = ExtractPropTypes<typeof rowProp & baseComponentsProp>;
