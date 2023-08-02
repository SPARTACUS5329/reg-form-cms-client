import React, { Dispatch, SetStateAction } from "react";
import { Button, Steps } from "antd";
import { FormRow } from "../utils/types";
import FormElement from "../utils/classes/FormElement";
import generateFormSteps from "../utils/generateFormSteps";

function MultiStep({
	currentStep,
	setCurrentStep,
	currentForm,
	setCurrentForm,
	setCurrentElement,
	handleSubmit,
}: {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	currentForm: FormRow[][];
	setCurrentForm: Dispatch<SetStateAction<FormRow[][]>>;
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>;
	handleSubmit: () => Promise<void>;
}) {
	const steps = generateFormSteps(currentForm, setCurrentForm, setCurrentElement);

	const nextStep = () => {
		setCurrentStep(currentStep + 1);
	};

	const prevStep = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<>
			<Steps
				current={currentStep}
				items={steps.map((step) => ({ key: step.title, title: step.title }))}
				className="centered"
			/>
			{steps[currentStep].content}
			<div style={{ marginTop: "20px" }}>
				{currentStep > 0 && (
					<Button style={{ margin: "0 8px" }} onClick={prevStep}>
						Previous
					</Button>
				)}
				{currentStep < steps.length - 1 && (
					<Button type="primary" onClick={nextStep}>
						Next
					</Button>
				)}
				{currentStep === steps.length - 1 && (
					<Button type="primary" onClick={handleSubmit}>
						Create Form
					</Button>
				)}
			</div>
		</>
	);
}

export default MultiStep;
