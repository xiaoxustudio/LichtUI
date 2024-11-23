import { ComponentPublicInstance, ExtractPropTypes, PropType } from "vue";
const Type = [
	"default",
	"primary",
	"success",
	"warnning",
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
	closed: Boolean,
	uuid: String,
	index: Number,
	content: String,
} as const;

export interface MessageP {
	content: string;
	type?: (typeof Type)[number];
	duration?: number;
	uuid?: string;
	closed?: boolean;
}

export type MessageEX = MessageP & {
	key: string;
	vueInstance?: ComponentPublicInstance;
};
export type MessageProp = ExtractPropTypes<typeof messageProp>;
