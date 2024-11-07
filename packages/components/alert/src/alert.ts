import { ExtractPropTypes, PropType } from "vue";
const Type = ["default", "primary", "warnning", "danger", "info"];
export const alertProp = {
	type: {
		type: String as PropType<(typeof Type)[number]>,
		default: "default",
	},
	autoClose: Number,
	closable: Boolean,
} as const;
export type AlertEmits = {
	onClose: [];
};
export type AlertProp = ExtractPropTypes<typeof alertProp>;
