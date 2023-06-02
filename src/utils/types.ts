import FormElement from "./FormElement";

export enum ElementType {
	TEXT = "TEXT",
	RADIO = "RADIO",
	CHECKBOX = "CHECKBOX",
	DROPDOWN = "DROPDOWN",
	MULTI_SELECT = "MULTI_SELECT",
}

export enum Width {
	HALF = "HALF",
	FULL = "FULL",
	THIRD = "THIRD",
}

export interface FormElementParameters {
	elementType: ElementType;
	name: string;
	width: Width;
	extraData: {
		option: string;
	}[];
}

export interface Form {
	name: string;
	rows: FormRow[];
	createdAt: string;
}

export enum NotificationType {
	ERROR = "error",
	WARNING = "warning",
	SUCCESS = "success",
}

export interface Registration {
	createdAt: Date;
	details: { [key: string]: any };
	eventName: string;
}

export interface FormRow {
	rowID: number;
	elements: FormElement[];
}
