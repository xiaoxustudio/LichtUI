import { App } from "vue";
import button from "./button";
import icon from "./icon";
import row from "./row";
import col from "./col";
import text from "./text";
import input from "./input";
import dropdown from "./dropdown";
import dropdownitem from "./dropdown-item";
const List = [button, icon, row, col, text, input, dropdown, dropdownitem];
export default {
	install: (app: App) => List.forEach((val) => val && val.install!(app)),
};
