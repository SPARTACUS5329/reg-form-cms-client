import React, { Dispatch, SetStateAction } from "react";
import { FormRow } from "../utils/types";
import Row from "./Row";
import FormElement from "../utils/classes/FormElement";

function Step({
	currentStep,
	setCurrentForm,
	setCurrentElement,
}: {
	currentStep: FormRow[];
	setCurrentForm: Dispatch<SetStateAction<FormRow[][]>>;
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>;
}) {
	return (
		<div>
			{currentStep.map((row, index: number) => (
				<Row
					key={index}
					row={row}
					setCurrentForm={setCurrentForm}
					setCurrentElement={setCurrentElement}
				/>
			))}
		</div>
	);
}

export default Step;
