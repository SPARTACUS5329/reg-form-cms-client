import React, { useContext, useState } from "react";
import { ElementType, FormElementParameters } from "../utils/types";
import FormElement from "../utils/classes/FormElement";
import {
	Button,
	Col as AntCol,
	Form as AntForm,
	Input,
	Row as AntRow,
	Select,
	Typography,
} from "antd";
import { elements, validators, widths } from "../utils/elements";
import ExtraData from "./ExtraData";
import { Validation } from "../utils/constants";
import { CurrentElementContext } from "../utils/CurrentElementContext";
import { FormContext } from "../utils/FormContext";

const { Text } = Typography;

function EditWindow() {
	const { setCurrentForm } = useContext(FormContext);
	const { currentElement, setCurrentElement } = useContext(CurrentElementContext);
	if (!currentElement) return <div></div>;
	const [currentElementType, setCurrentElementType] = useState<ElementType>(
		currentElement.elementType
	);
	const [form] = AntForm.useForm();

	const handleFinish = (values: FormElementParameters) => {
		setCurrentForm((form) =>
			form.map((step) =>
				step.map((row) => ({
					rowID: row.rowID,
					elements: row.elements.map((element: FormElement) => {
						if (element.name !== currentElement.name) return element;
						const newElement = element.update(values);
						setCurrentElement(newElement);
						return newElement;
					}),
				}))
			)
		);
	};

	const handleDelete = () => {
		setCurrentForm((form) =>
			form.map((step) =>
				step.map((row) => ({
					rowID: row.rowID,
					elements: row.elements.filter(
						(element: FormElement) => element.name !== currentElement.name
					),
				}))
			)
		);
	};

	return (
		<>
			<Text style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
				{currentElement.name || "Give a name"}
			</Text>
			<AntForm form={form} onFinish={handleFinish}>
				<AntRow className="centered">
					<AntCol span={20}>
						<AntForm.Item name="elementType">
							<Select
								onChange={(value: ElementType) => {
									setCurrentElementType(value);
								}}
								placeholder="Input Type"
								options={elements}
							/>
						</AntForm.Item>
					</AntCol>
				</AntRow>
				<AntRow className="centered">
					<AntCol span={20}>
						<AntForm.Item name="name">
							<Input placeholder="Name" value={currentElement.name} />
						</AntForm.Item>
					</AntCol>
				</AntRow>
				<AntRow className="centered">
					<AntCol span={20}>
						<AntForm.Item name="width">
							<Select placeholder="Width" options={widths} />
						</AntForm.Item>
					</AntCol>
				</AntRow>
				<AntRow className="centered">
					<AntCol span={20}>
						<AntForm.Item name="extraData">
							<ExtraData elementType={currentElementType} />
						</AntForm.Item>
					</AntCol>
				</AntRow>
				<AntRow className="even-spaced">
					<AntCol span={8}>
						<AntForm.Item name="validation">
							<Select placeholder="Validation" options={validators} />
						</AntForm.Item>
					</AntCol>
					<AntCol span={8}>
						<AntForm.Item name="isRequired">
							<Select
								placeholder="Required"
								options={[
									{ label: "Yes", value: true },
									{ label: "No", value: false },
								]}
							/>
						</AntForm.Item>
					</AntCol>
				</AntRow>
				<AntRow className="even-spaced">
					<AntCol span={6}>
						<AntForm.Item>
							<Button type="primary" htmlType="submit">
								Update
							</Button>
						</AntForm.Item>
					</AntCol>
					<AntCol span={6}>
						<Button type="dashed" onClick={handleDelete}>
							Delete
						</Button>
					</AntCol>
				</AntRow>
			</AntForm>
		</>
	);
}

export default EditWindow;
