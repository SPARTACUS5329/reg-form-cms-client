import polyMap from "./polyMap";
import { Form, FormElementParameters } from "./types";

const uiToFormObject = (uiForm: {
	name: string;
	steps: { rowID: number; elements: FormElementParameters[] }[][];
	createdAt: string;
}): Form => ({
	name: uiForm.name,
	steps: uiForm.steps.map((step) =>
		step.map((row) => ({
			rowID: row.rowID,
			elements: row.elements.map((element) => {
				const ItemClass = polyMap[element.elementType];
				return new ItemClass(
					element.elementType,
					element.name,
					element.width,
					element.extraData,
					element.validation,
					element.isRequired
				);
			}),
		}))
	),
	createdAt: uiForm.createdAt,
});

export default uiToFormObject;
