import { ExtractPropTypes } from "vue";
export const modalProp = {
	show: Boolean,
	title: String,
	content: String,
	okText: String,
	cancleText: String,
} as const;
export type ModalEmits = {
	onOk: [];
	onCancle: [];
};
export type MadalProp = ExtractPropTypes<typeof modalProp>;
