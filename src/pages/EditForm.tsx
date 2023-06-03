import React, { useEffect, useState } from "react";
import axios from "../config/_axios";
import { useRoute } from "wouter";
import { Button, Col, Row, Typography } from "antd";
import { Form, FormRow, NotificationType } from "../utils/types";
import FormElement from "../utils/FormElement";
import ElementsPreview from "../components/ElementPreview";
import { FormContext } from "../utils/FormContext";
import EditWindow from "../components/EditWindow";
import openNotification from "../utils/openNotification";
import uiToFormObject from "../utils/uiToFormObject";

const { Text } = Typography;

function EditForm() {
	const [match, params] = useRoute("/edit-form/:name");
	if (!match || !params?.name) return <div>Sorry this form does not exist</div>;
	const [currentForm, setCurrentForm] = useState<Form>();
	const [editableForm, setEditableForm] = useState<FormRow[]>([]);
	const [currentElement, setCurrentElement] = useState<FormElement>();

	useEffect(() => {
		const getForm = async () => {
			try {
				const result = await axios.post("/forms", {
					filters: { name: params.name },
				});
				if (!result.data || result.data.length === 0) return;
				const objectForm = uiToFormObject(result.data[0]);
				setCurrentForm(objectForm);
				setEditableForm(objectForm.rows);
			} catch (error) {
				console.error(error);
			}
		};
		getForm();
	}, []);

	const handleUpdate = async () => {
		try {
			const result: { data: string } = await axios.patch(
				`/update-form/${currentForm?.name}`,
				{
					newForm: {
						name: currentForm?.name,
						rows: editableForm,
						createdAt: currentForm?.createdAt,
					},
				}
			);
			if (result.data === "SUCCESS")
				return openNotification(NotificationType["SUCCESS"], "Updated successfully");
		} catch (error) {
			console.error(error);
			return openNotification(NotificationType["ERROR"], "An error occurred");
		}
	};

	return (
		<div style={{ display: "flex" }}>
			<FormContext.Provider value={currentForm?.rows || []}>
				<div style={{ width: "70%" }}>
					<Text style={{ color: "white", fontWeight: "bold", fontSize: "3rem" }}>
						{currentForm?.name}
					</Text>
					{currentForm && (
						<>
							{editableForm?.map((row, index) => (
								<Row
									key={index}
									className="even-spaced"
									style={{ marginTop: "20px" }}
								>
									<ElementsPreview
										elements={row.elements}
										setCurrentElement={setCurrentElement}
									/>
								</Row>
							))}
						</>
					)}
					<Row className="centered" style={{ marginTop: "20px" }}>
						<Col>
							<Button type="primary" onClick={handleUpdate}>
								Update Form
							</Button>
						</Col>
					</Row>
				</div>
				<div
					style={{
						width: "30%",
						border: "1px solid white",
						height: "90vh",
						borderRadius: "5px",
					}}
				>
					{currentElement ? (
						<EditWindow
							currentElement={currentElement}
							setCurrentForm={setEditableForm}
							setCurrentElement={setCurrentElement}
						/>
					) : (
						<>
							<Text style={{ color: "white", fontSize: "2rem" }}>Pick a field, </Text>
							<Text style={{ color: "white", fontSize: "1.5rem" }}>any field</Text>
						</>
					)}
				</div>
			</FormContext.Provider>
		</div>
	);
}

export default EditForm;
