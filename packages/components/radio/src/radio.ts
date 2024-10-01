import { isBoolean, isNumber, isString, isUndefined } from "@licht-ui/utils";
import EmitsEnum from "@licht-ui/utils/EmitEnum";
import { ExtractPropTypes, PropType } from "vue";
const RType = ["default", "primary", "warnning", "danger", "info"];
export const radioProp = {
	type: {
		type: String as PropType<(typeof RType)[number]>,
		default: "default",
	},
	value: {
		type: [String, Number, Boolean] as PropType<string | number | boolean>,
		default: null,
	},
	name: String,
	label: {
		type: [String, Number, Boolean] as PropType<string | number | boolean>,
		default: "",
	},
	disabled: Boolean,
} as const;
export const radioEmits = {
	[EmitsEnum.CHANGE_EVENT]: (val: string | number | boolean | undefined) =>
		isString(val) || isNumber(val) || isBoolean(val) || isUndefined(val),
	[EmitsEnum.UPDATE_MODEL_EVENT]: (
		val: string | number | boolean | undefined
	) => isString(val) || isNumber(val) || isBoolean(val) || isUndefined(val),
};
export type RadioProp = ExtractPropTypes<typeof radioProp>;
export type RadioEmits = typeof radioEmits;
