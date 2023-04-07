import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { elements, widths } from "../utils/elements";
import { FormValue } from "../utils/types";

function AddElement({
	setCurrentForm,
}: {
	setCurrentForm: React.Dispatch<React.SetStateAction<FormValue[]>>;
}) {
	const [form] = Form.useForm();

	const handleFinish = (values: FormValue) => {
		console.log(values);
		setCurrentForm((curr) => [...curr, values]);
		form.resetFields();
	};

	return (
		<>
			<Form form={form} name="addElement" onFinish={handleFinish}>
				<Row className="even-spaced">
					<Col span={6}>
						<Form.Item
							name="typeOfElement"
							rules={[
								{
									required: true,
									message: "Please enter the type of form element",
								},
							]}
						>
							<Select placeholder="Input type" options={elements} />
						</Form.Item>
					</Col>
					<Col span={6}>
						<Form.Item
							name="name"
							rules={[
								{
									required: true,
									message: "Please enter the name of form element",
								},
							]}
						>
							<Input placeholder="Name" />
						</Form.Item>
					</Col>
					<Col span={6}>
						<Form.Item
							name="width"
							rules={[
								{
									required: true,
									message: "Please enter the width of form element",
								},
							]}
						>
							<Select placeholder="Width" options={widths} />
						</Form.Item>
					</Col>
				</Row>
				<Row className="even-spaced">
					<Col span={6}>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Add
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	);
}

export default AddElement;
