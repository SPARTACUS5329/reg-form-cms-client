import React, { Dispatch, SetStateAction, useContext } from "react";
import { Button, Steps } from "antd";
import generateFormSteps from "../utils/generateFormSteps";
import { FormContext } from "../utils/FormContext";

function MultiStep({
	currentStep,
	setCurrentStep,
	handleSubmit,
}: {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	handleSubmit: () => Promise<void>;
}) {
	const { currentForm, setCurrentForm } = useContext(FormContext);
	const steps = generateFormSteps(currentForm, setCurrentForm);

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
