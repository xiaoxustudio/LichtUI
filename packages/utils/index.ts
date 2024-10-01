import { isNil } from "lodash-unified";
import { ComputedRef } from "vue";

export * from "./baseComponents";
export * from "./create";
export * from "./withInstall";
export * from "./rand";

export {
	isArray,
	isFunction,
	isObject,
	isString,
	isDate,
	isPromise,
	isSymbol,
	isPlainObject,
} from "@vue/shared";
export const isUndefined = (val: any): val is undefined => val === undefined;
export const isBoolean = (val: any): val is boolean => typeof val === "boolean";
export const isNumber = (val: any): val is number => typeof val === "number";

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
	return isNil(prop);
};

export type ComputedValueType<T> = T extends ComputedRef<infer V> ? V : never;
