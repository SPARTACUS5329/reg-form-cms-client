export enum ElementType {
	TEXT = "TEXT",
	RADIO = "RADIO",
	CHECKBOX = "CHECKBOX",
	DROPDOWN = "DROPDOWN",
	ROW_CHANGE = "ROW_CHANGE",
}

export enum Width {
	HALF = "HALF",
	FULL = "FULL",
	THIRD = "THIRD",
}

export interface FormValue {
	elementType: ElementType;
	name: string;
	width: Width;
	extraData: any;
}
