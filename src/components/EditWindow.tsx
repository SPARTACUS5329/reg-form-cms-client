import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { ElementType, FormValue, Form } from "../utils/types";
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
	currentElement: FormValue;
	setCurrentForm: Dispatch<SetStateAction<Form | undefined>>;
	setCurrentElement: Dispatch<SetStateAction<FormValue | undefined>>;
}) {
	const [currentElementType, setCurrentElementType] = useState<ElementType>(
		currentElement.elementType
	);
	const [form] = AntForm.useForm();

	const handleFinish = (values: FormValue) => {
		setCurrentForm((form) => {
			if (!form) return form;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { elements, ...rest } = form;
			const newElements = form.elements.map((row: FormValue[]) =>
				row.map((element: FormValue) =>
					element.name === currentElement.name ? values : element
				)
			);
			const newForm = {
				elements: newElements,
				...rest,
			};
			return newForm;
		});
		setCurrentElement(values);
	};

	return (
		<>
			<Text style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
				{currentElement.name}
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
				<Row className="centered">
					<Col span={6}>
						<AntForm.Item>
							<Button type="primary" htmlType="submit">
								Update
							</Button>
						</AntForm.Item>
					</Col>
				</Row>
			</AntForm>
		</>
	);
}

export default EditWindow;
