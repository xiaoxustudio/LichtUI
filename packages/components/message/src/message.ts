import { ExtractPropTypes, PropType } from "vue";
const Type = [
	"default",
	"primary",
	"success",
	"warning",
	"danger",
	"info",
] as const;
export const messageProp = {
	type: {
		type: String as PropType<(typeof Type)[number]>,
		default: "default",
	},
	duration: {
		type: Number,
		default: 2000,
	},
	location: {
		type: String as PropType<Locatoins>,
		default: "right",
	},
	render: Boolean,
	closed: Boolean,
	uuid: String,
	index: Number,
	content: String,
	_close: Boolean,
} as const;

type Locatoins = "left" | "center" | "right";

export interface MessageP {
	content: string;
	type?: (typeof Type)[number];
	duration?: number;
	uuid?: string;
	closed?: boolean;
	location?: Locatoins;
	render?: boolean;
	_close?: boolean;
}

export type MessageEX = MessageP & {
	key: string;
};
export type MessageEmits = {
	onRender: [uuid: string, location: Locatoins];
	onClose: [uuid: string, location: Locatoins];
};
export type MessageProp = ExtractPropTypes<typeof messageProp>;
