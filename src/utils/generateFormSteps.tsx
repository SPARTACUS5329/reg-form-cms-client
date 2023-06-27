import React, { Dispatch, SetStateAction } from "react";
import Step from "../components/Step";
import { FormRow } from "./types";
import FormElement from "./classes/FormElement";

const generateFormSteps = (
	form: FormRow[][],
	setCurrentForm: Dispatch<SetStateAction<FormRow[][]>>,
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
) => {
	return [
		...form.map((step) => ({
			title: "X",
			content: (
				<Step
					currentStep={step}
					setCurrentElement={setCurrentElement}
					setCurrentForm={setCurrentForm}
				/>
			),
		})),
	];
};

export default generateFormSteps;
