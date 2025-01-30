import { baseComponentsProp } from "@licht-ui/utils";
import { ExtractPropTypes, PropType } from "vue";
const _dirType = ["column", "row"];

type DirType = (typeof _dirType)[number];
type JustifyType = "left" | "center" | "right";
type AlignType = "start" | "middle" | "end";
export const rowProp = {
	direction: String as PropType<DirType>,
	justify: String as PropType<JustifyType>,
	align: String as PropType<AlignType>,
	gutter: {
		type: Number,
		default: 0,
	},
} as const;
export type RowProp = ExtractPropTypes<typeof rowProp & baseComponentsProp>;
