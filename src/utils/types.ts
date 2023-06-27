import FormElement from "./classes/FormElement";
import { Validation } from "./constants";

export enum ElementType {
	TEXT = "TEXT",
	RADIO = "RADIO",
	CHECKBOX = "CHECKBOX",
	DROPDOWN = "DROPDOWN",
	MULTI_SELECT = "MULTI_SELECT",
	NEW_STEP = "NEW_STEP",
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
	validation: Validation;
	isRequired: boolean;
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
