import { isNil } from "lodash-unified";
export * from "./src/baseComponents";
export * from "./src/create";
export * from "./src/withInstall";
export * from "./src/rand";
export * from "./src/types";
export * from "./src/EmitEnum";
export * from "./src/uuid";
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
