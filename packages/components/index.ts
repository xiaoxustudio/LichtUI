import { App } from "vue";
import button from "./button";
import icon from "./icon";
import row from "./row";
import col from "./col";
import text from "./text";
const List = [button, icon, row, col, text];
export default {
	install: (app: App) => List.forEach((val) => val && val.install!(app)),
};
