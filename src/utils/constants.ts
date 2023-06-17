import Text from "../assets/Text.png";
import Radio from "../assets/Radio.png";
import Checkbox from "../assets/Checkbox.png";
import Dropdown from "../assets/Dropdown.png";
import MultiSelect from "../assets/MultiSelect.png";
import { ElementType } from "./types";

export interface Tool {
	id: number;
	image: string;
	element: ElementType;
}

export const toolMap: Tool[] = [
	{
		id: 0,
		image: Text,
		element: ElementType["TEXT"],
	},
	{
		id: 1,
		image: Radio,
		element: ElementType["RADIO"],
	},
	{
		id: 2,
		image: Checkbox,
		element: ElementType["CHECKBOX"],
	},
	{
		id: 3,
		image: Dropdown,
		element: ElementType["DROPDOWN"],
	},
	{
		id: 4,
		image: MultiSelect,
		element: ElementType["MULTI_SELECT"],
	},
];

export const optionBasedFields = [
	ElementType["RADIO"],
	ElementType["DROPDOWN"],
	ElementType["MULTI_SELECT"],
];

export enum Validation {
	NONE = "NONE",
	NAME = "NAME",
	PHONE = "PHONE",
	// EMAIL = "EMAIL",
	// SMAIL = "SMAIL",
	ROLLNO = "ROLLNO",
}

export const ruleObject = {
	"NONE": /^.*$/,
	"NAME": /^[a-z]*$/,
	"PHONE": /^\d{10}$/,
	// "EMAIL": /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	// "SMAIL": ,
	"ROLLNO": /^[a-z]{2}\d{2}[a-z]\d{3}$/i,
};
