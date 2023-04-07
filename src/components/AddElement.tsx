import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { elements, widths } from "../utils/elements";
import { ElementType, FormValue } from "../utils/types";
import ExtraData from "./ExtraData";

function AddElement({
	setCurrentForm,
}: {
	setCurrentForm: React.Dispatch<React.SetStateAction<FormValue[][]>>;
}) {
	const [form] = Form.useForm();
	const [currentElementType, setCurrentElementType] = useState<ElementType | null>(null);

	const handleFinish = (values: FormValue) => {
		console.log(values);
		setCurrentForm((curr: FormValue[][]) => {
			if (values.elementType === ElementType["ROW_CHANGE"]) return [...curr, []];
			if (curr.length === 0) return [[values]];
			const latestRow = curr[curr.length - 1];
			return [...curr.slice(0, curr.length - 1), [...latestRow, values]];
		});
		form.resetFields();
	};

	return (
		<>
			<Form form={form} name="addElement" onFinish={handleFinish}>
				<Row className="even-spaced">
					<Col span={6}>
						<Form.Item
							name="elementType"
							rules={[
								{
									required: true,
									message: "Please enter the type of form element",
								},
							]}
						>
							<Select
								onChange={(value: ElementType) => {
									setCurrentElementType(value);
								}}
								placeholder="Input type"
								options={elements}
							/>
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
				<ExtraData elementType={currentElementType} />
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
