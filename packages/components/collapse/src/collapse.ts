import { ExtractPropTypes, InjectionKey, Ref } from "vue";
export const collapseProp = {
	accordion: Boolean,
};

export const CollapseProviderProp = {
	currentSelect: Symbol("currentSelect") as InjectionKey<Ref<string>>,
	setSelect: Symbol("setSelect") as InjectionKey<(current: string) => void>,
	accordion: Symbol("accordion") as InjectionKey<boolean>,
};
export type CollapseProp = ExtractPropTypes<typeof collapseProp>;
