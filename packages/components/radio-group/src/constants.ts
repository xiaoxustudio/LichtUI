import { InjectionKey, Ref } from "vue";

export interface RadioGroupInjection {
	disabled: boolean;
	name: string;
	emitChange: (val: HTMLInputElement | null) => void;
	select: null | HTMLInputElement | Ref<null | HTMLInputElement>;
}
export const radioGroupKey: InjectionKey<RadioGroupInjection> =
	Symbol("radioGroupKey");
