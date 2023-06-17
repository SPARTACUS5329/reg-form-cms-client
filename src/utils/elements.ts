interface DisplayElement {
	value: string;
	label: string;
}

export const elements: DisplayElement[] = [
	{
		label: "Text",
		value: "TEXT",
	},
	{
		label: "Radio",
		value: "RADIO",
	},
	{
		label: "Checkbox",
		value: "CHECKBOX",
	},
	{
		label: "Dropdown",
		value: "DROPDOWN",
	},
	{
		label: "Multi Select",
		value: "MULTI_SELECT",
	},
];

export const widths: DisplayElement[] = [
	{
		label: "Half",
		value: "HALF",
	},
	{
		label: "Full",
		value: "FULL",
	},
	{
		label: "Third",
		value: "THIRD",
	},
];

export const validators: DisplayElement[] = [
	{
		label: "None",
		value: "NONE",
	},
	{
		label: "Name",
		value: "NAME",
	},
	{
		label: "Phone",
		value: "PHONE",
	},
	{
		label: "Roll No",
		value: "ROLLNO",
	},
];
