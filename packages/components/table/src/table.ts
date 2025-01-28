import { ExtractPropTypes, InjectionKey, PropType } from "vue";

interface ObjectProp {
	[key: string]: string;
}

export const tableProp = {
	tableData: {
		type: Array as PropType<ObjectProp[]>,
		default: [],
	},
	stripe: Boolean,
	border: Boolean,
} as const;
export const TableProviderpProp = {
	renderKeys: Symbol("renderKeys") as InjectionKey<string[]>,
	setRenderKeys: Symbol("setRenderKeys") as InjectionKey<
		(keys: string) => void
	>,
};
export type TableProp = ExtractPropTypes<typeof tableProp>;
