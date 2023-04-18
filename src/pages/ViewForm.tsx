import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Form, NotificationType } from "../utils/types";
import axios from "../config/_axios";
import { Row, Typography, Form as AntForm, Button, Col } from "antd";
import DisplayElements from "../components/DisplayElements";
import openNotification from "../utils/openNotification";

const { Text } = Typography;

function ViewForm() {
	const [match, params] = useRoute("/view-form/:name");
	if (!match || !params?.name) return <div>Sorry this form does not exist</div>;
	const [uiForm, setUIForm] = useState<Form>();
	const [regDetails] = AntForm.useForm();

	useEffect(() => {
		const getForm = async () => {
			try {
				const result = await axios.post("/forms", { filters: { name: params.name } });
				if (!result.data || result.data.length === 0) return;
				setUIForm(result.data[0]);
			} catch (error) {
				console.error(error);
			}
		};
		getForm();
	}, []);

	const handleFinish = async (values: any) => {
		try {
			const result = await axios.post(`/register/${uiForm?.name}`, { details: values });
			if (result.data === "SUCCESS")
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
				{uiForm?.elements.map((elements, index) => {
					return (
						<Row key={index} className="even-spaced" style={{ marginTop: "20px" }}>
							<DisplayElements elements={elements} />
						</Row>
					);
				})}
				{uiForm && (
					<Row className="centered">
						<Col>
							<AntForm.Item>
								<Button type="primary" htmlType="submit">
									Submit
								</Button>
							</AntForm.Item>
						</Col>
					</Row>
				)}
			</AntForm>
		</div>
	);
}

export default ViewForm;
