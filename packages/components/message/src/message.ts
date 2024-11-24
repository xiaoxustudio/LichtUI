import { ComponentPublicInstance, ExtractPropTypes, PropType } from "vue";
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
		type: String as PropType<Locatoins[number]>,
		default: "right",
	},
	closed: Boolean,
	uuid: String,
	index: Number,
	content: String,
} as const;

type Locatoins = "left" | "center" | "right";

export interface MessageP {
	content: string;
	type?: (typeof Type)[number];
	duration?: number;
	uuid?: string;
	closed?: boolean;
	location?: Locatoins;
}

export type MessageEX = MessageP & {
	key: string;
	vueInstance?: ComponentPublicInstance;
};
export type MessageProp = ExtractPropTypes<typeof messageProp>;
