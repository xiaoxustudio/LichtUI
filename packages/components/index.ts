import LiButton from "./button";
import LiIcon from "./icon";
import LiRow from "./row";
import LiCol from "./col";
import LiText from "./text";
import LiInput from "./input";
import LiDropDown from "./dropdown";
import LiDropDownItem from "./dropdown-item";
import LiMenu from "./menu";
import LiMenuItem from "./menu-item";
export * from "./button";
export * from "./icon";
export * from "./row";
export * from "./col";
export * from "./text";
export * from "./input";
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
};

export default {
	install: (app: any): any => {
		List.forEach((val) => {
			if (val && val.install) {
				val.install(app);
			} else console.warn(`connot install compoent:${val.name}`);
		});
	},
};
