import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { ElementType, FormElement, Form, FormRow, Width } from "../utils/types";
import { Button, Col, Form as AntForm, Input, Row, Select, Typography } from "antd";
import { elements, widths } from "../utils/elements";
import ExtraData from "./ExtraData";
import { FormContext } from "../utils/FormContext";

const { Text } = Typography;

function EditWindow({
	currentElement,
	setCurrentForm,
	setCurrentElement,
}: {
	currentElement: FormElement;
	setCurrentForm: Dispatch<SetStateAction<FormRow[]>>;
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>;
}) {
	const [currentElementType, setCurrentElementType] = useState<ElementType>(
		currentElement.elementType
	);
	const [form] = AntForm.useForm();

	const handleFinish = (values: FormElement) => {
		setCurrentForm((form) =>
			form.map((row) => ({
				rowID: row.rowID,
				elements: row.elements.map((element: FormElement) =>
					element.name === currentElement.name ? values : element
				),
			}))
		);
		setCurrentElement(values);
	};

	const handleDelete = () => {
		setCurrentForm((form) =>
			form.map((row) => ({
				rowID: row.rowID,
				elements: row.elements.filter(
					(element: FormElement) => element.name !== currentElement.name
				),
			}))
		);
	};

	return (
		<>
			<Text style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
				{currentElement.name || "Give a name"}
			</Text>
			<AntForm form={form} onFinish={handleFinish}>
				<Row className="centered">
					<Col span={20}>
						<AntForm.Item name="elementType">
							<Select
								onChange={(value: ElementType) => {
									setCurrentElementType(value);
								}}
								placeholder="Input Type"
								options={elements}
							/>
						</AntForm.Item>
					</Col>
				</Row>
				<Row className="centered">
					<Col span={20}>
						<AntForm.Item name="name">
							<Input placeholder="Name" value={currentElement.name} />
						</AntForm.Item>
					</Col>
				</Row>
				<Row className="centered">
					<Col span={20}>
						<AntForm.Item name="width">
							<Select placeholder="Width" options={widths} />
						</AntForm.Item>
					</Col>
				</Row>
				<Row className="centered">
					<Col span={20}>
						<AntForm.Item name="extraData">
							<ExtraData elementType={currentElementType} />
						</AntForm.Item>
					</Col>
				</Row>
				<Row className="even-spaced">
					<Col span={6}>
						<AntForm.Item>
							<Button type="primary" htmlType="submit">
								Update
							</Button>
						</AntForm.Item>
					</Col>
					<Col span={6}>
						<Button type="dashed" onClick={handleDelete}>
							Delete
						</Button>
					</Col>
				</Row>
			</AntForm>
		</>
	);
}

export default EditWindow;
