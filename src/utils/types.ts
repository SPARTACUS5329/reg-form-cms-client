export enum ElementType {
	TEXT = "TEXT",
	RADIO = "RADIO",
	CHECKBOX = "CHECKBOX",
	DROPDOWN = "DROPDOWN",
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
}
