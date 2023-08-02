import React, { Dispatch, SetStateAction } from "react";
import { Form as AntForm, Row as AntRow, Button, FormInstance, Steps } from "antd";
import { FormRow } from "../utils/types";
import DisplayElements from "./DisplayElements";

function RegistrationMultiStep({
	currentStep,
	setCurrentStep,
	form,
	regDetails,
	setFormValues,
}: {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	form: FormRow[][];
	regDetails: FormInstance<any>;
	setFormValues: Dispatch<SetStateAction<object>>;
}) {
	const steps = form.map((step) => ({
		title: "",
		content: (
			<>
				{step.map((row, index: number) => (
					<AntRow key={index} className="even-spaced" style={{ marginTop: "20px" }}>
						<DisplayElements elements={row.elements} />
					</AntRow>
				))}
			</>
		),
	}));

	const nextStep = async () => {
		try {
			// await updateForm();
			await regDetails.validateFields();
			setFormValues((formValues) => ({ ...formValues, ...regDetails.getFieldsValue() }));
			setCurrentStep(currentStep + 1);
		} catch (error) {
			console.error(error);
		}
	};

	const prevStep = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<>
			<AntRow className="centered">
				<Steps
					style={{ width: "60vw" }}
					current={currentStep}
					items={steps.map((step) => ({ key: step.title, title: step.title }))}
				/>
			</AntRow>
			{steps[currentStep].content}
			<AntRow className="centered" style={{ marginTop: "20px" }}>
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
					<AntForm.Item>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</AntForm.Item>
				)}
			</AntRow>
		</>
	);
}

export default RegistrationMultiStep;
