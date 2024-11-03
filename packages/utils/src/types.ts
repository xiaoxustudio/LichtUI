import { ComputedRef } from "vue";

export interface RadioItemToken {
	id: string | number;
	el: any;
	checked: boolean | undefined;
	space: string | undefined;
}

export type ComputedValueType<T> = T extends ComputedRef<infer V> ? V : never;
