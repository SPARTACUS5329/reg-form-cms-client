import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { elements, widths } from "../utils/elements";
import { ElementType, FormElement, FormRow } from "../utils/types";
import ExtraData from "./ExtraData";

function AddElement({
	setCurrentForm,
	idGenerator,
}: {
	setCurrentForm: React.Dispatch<React.SetStateAction<FormRow[]>>;
	idGenerator: Generator<number, number, number>;
}) {
	const [form] = Form.useForm();
	const [currentElementType, setCurrentElementType] = useState<ElementType | null>(null);

	const handleFinish = (values: FormElement) => {
		setCurrentForm((curr) => {
			if (curr.length === 0)
				return [
					{
						rowID: idGenerator.next().value,
						elements: [values],
					},
				];
			const latestRow = curr[curr.length - 1];
			return [
				...curr.slice(0, curr.length - 1),
				{
					rowID: latestRow.rowID,
					elements: [...latestRow.elements, values],
				},
			];
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
								className="form-input-2"
								placeholder="Input Type"
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
							<Input className="form-input-1" placeholder="Name" />
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
							<Select className="form-input-2" placeholder="Width" options={widths} />
						</Form.Item>
					</Col>
				</Row>
				<Row className="centered">
					<Col span={24}>
						<ExtraData elementType={currentElementType} />
					</Col>
				</Row>
				<Row className="centered">
					<Col span={6}>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Add Field
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	);
}

export default AddElement;
