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

export interface FormValue {
	elementType: ElementType;
	name: string;
	width: Width;
	extraData?: any;
}

export interface Form {
	name: string;
	elements: FormValue[][];
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
