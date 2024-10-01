import LiButton from "./button";
import LiIcon from "./icon";
import LiRow from "./row";
import LiCol from "./col";
import LiText from "./text";
import LiInput from "./input";
import LiCheckBox from "./checkbox";
import LiRadio from "./radio";
import LiRadioGroup from "./radio-group";
import LiDropDown from "./dropdown";
import LiDropDownItem from "./dropdown-item";
import LiMenu from "./menu";
import LiMenuItem from "./menu-item";
import { RadioItemToken } from "@licht-ui/utils/types";
export * from "./button";
export * from "./icon";
export * from "./row";
export * from "./col";
export * from "./text";
export * from "./input";
export * from "./checkbox";
export * from "./radio";
export * from "./radio-group";
export * from "./dropdown";
export * from "./dropdown-item";
export * from "./menu";
export * from "./menu-item";
const List = [
	LiButton,
	LiIcon,
	LiRow,
	LiCol,
	LiText,
	LiInput,
	LiDropDown,
	LiDropDownItem,
	LiMenu,
	LiMenuItem,
	LiCheckBox,
	LiRadio,
	LiRadioGroup,
];
export {
	LiButton,
	LiIcon,
	LiRow,
	LiCol,
	LiText,
	LiInput,
	LiDropDown,
	LiDropDownItem,
	LiMenu,
	LiMenuItem,
	LiCheckBox,
	LiRadio,
	LiRadioGroup,
};

const RadioPool: RadioItemToken[] = [];
export default {
	install: (app: any): any => {
		app.config.globalProperties.$licht = {
			RadioPool,
		};
		List.forEach((val) => {
			if (val && val.install) {
				val.install(app);
			} else console.warn(`connot install compoent:${val.name}`);
		});
	},
};
