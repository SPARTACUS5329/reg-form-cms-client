import React, { Dispatch, SetStateAction } from "react";
import { FormRow } from "./types";
import FormElement from "./classes/FormElement";
import Row from "../components/Row";

const generateFormSteps = (
	form: FormRow[][],
	setCurrentForm: Dispatch<SetStateAction<FormRow[][]>>,
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
) => {
	return form.map((step) => ({
		title: "",
		content: (
			<>
				{step.map((row, index: number) => (
					<Row
						key={index}
						row={row}
						setCurrentForm={setCurrentForm}
						setCurrentElement={setCurrentElement}
					/>
				))}
			</>
		),
	}));
};

export default generateFormSteps;
