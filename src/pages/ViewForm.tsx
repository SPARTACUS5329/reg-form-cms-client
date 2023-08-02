import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Form, NotificationType } from "../utils/types";
import axios from "../config/_axios";
import { Row, Typography, Form as AntForm, Button, Col } from "antd";
import DisplayElements from "../components/DisplayElements";
import openNotification from "../utils/openNotification";
import uiToFormObject from "../utils/uiToFormObject";
import RegistrationMultiStep from "../components/RegistrationMultiStep";
import { Responses } from "../utils/constants";

const { Text } = Typography;

function ViewForm() {
	const [match, params] = useRoute("/register/:name");
	if (!match || !params?.name) return <div>Sorry this form does not exist</div>;
	const [uiForm, setUIForm] = useState<Form>();
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [formValues, setFormValues] = useState<object>({});
	const [regDetails] = AntForm.useForm();

	useEffect(() => {
		const getForm = async () => {
			try {
				const result = await axios.post("/forms", { name: params.name });
				if (!result.data || result.data.length === 0) return;
				setUIForm(uiToFormObject(result.data[0]));
			} catch (error) {
				console.error(error);
			}
		};
		getForm();
	}, []);

	const handleFinish = async (values: any) => {
		try {
			const details = { ...formValues, ...values };
			const result = await axios.post(`/register/${uiForm?.name}`, { details });
			if (result.data === Responses["SUCCESS"])
				return openNotification(NotificationType["SUCCESS"], "Successfully registered!");
		} catch (error: any) {
			console.error(error);
			openNotification(
				NotificationType["ERROR"],
				error.response.data.errorCode === 418
					? error.response.data.message
					: "An error occurred"
			);
		}
	};

	return (
		<div>
			<Text style={{ color: "white", fontWeight: "bold", fontSize: "3rem" }}>
				{uiForm?.name}
			</Text>
			<AntForm form={regDetails} name="register" onFinish={handleFinish}>
				{uiForm && (
					<RegistrationMultiStep
						regDetails={regDetails}
						currentStep={currentStep}
						setCurrentStep={setCurrentStep}
						setFormValues={setFormValues}
						form={uiForm?.steps}
					></RegistrationMultiStep>
				)}
			</AntForm>
		</div>
	);
}

export default ViewForm;
