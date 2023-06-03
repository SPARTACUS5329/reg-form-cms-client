import FormElement from "./FormElement";
import { Form, FormElementParameters } from "./types";

const uiToFormObject = (uiForm: {
	name: string;
	rows: { rowID: number; elements: FormElementParameters[] }[];
	createdAt: string;
}): Form => ({
	name: uiForm.name,
	rows: uiForm.rows.map((row) => ({
		rowID: row.rowID,
		elements: row.elements.map(
			(element) =>
				new FormElement(element.elementType, element.name, element.width, element.extraData)
		),
	})),
	createdAt: uiForm.createdAt,
});

export default uiToFormObject;
