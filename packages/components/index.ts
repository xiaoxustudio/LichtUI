import { RadioItemToken } from "@licht-ui/utils";
import LiButton from "./button";
import LiIcon from "./icon";
import LiRow from "./row";
import LiCol from "./col";
import LiText from "./text";
import LiInput from "./input";
import LiCheckBox from "./checkbox";
import LiRadio from "./radio";
import LiSwitch from "./switch";
import LiSelect from "./select";
import LiRadioGroup from "./radio-group";
import LiDropDown from "./dropdown";
import LiDropDownItem from "./dropdown-item";
import LiMenu from "./menu";
import LiMenuItem from "./menu-item";
import LiCard from "./card";
import LiAvatar from "./avatar";
import LiAlert from "./alert";
import LiModal from "./modal";
export * from "./button";
export * from "./icon";
export * from "./row";
export * from "./col";
export * from "./text";
export * from "./input";
export * from "./checkbox";
export * from "./radio";
export * from "./switch";
export * from "./select";
export * from "./radio-group";
export * from "./dropdown";
export * from "./dropdown-item";
export * from "./menu";
export * from "./menu-item";
export * from "./card";
export * from "./avatar";
export * from "./alert";
export * from "./message";
export * from "./modal";
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
	LiSwitch,
	LiRadioGroup,
	LiSelect,
	LiCard,
	LiAvatar,
	LiAlert,
	LiModal,
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
	LiSwitch,
	LiRadioGroup,
	LiSelect,
	LiCard,
	LiAvatar,
	LiAlert,
	LiModal,
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
