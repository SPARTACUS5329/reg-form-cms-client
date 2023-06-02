import React, { useState } from "react";
import { FormElement, NotificationType, FormRow } from "../utils/types";
import { FormContext } from "../utils/FormContext";
import { Button, Input, Typography } from "antd";
import axios from "../config/_axios";
import openNotification from "../utils/openNotification";
import Toolbar from "../components/Toolbar";
import { PlusCircleOutlined } from "@ant-design/icons";
import getNextID from "../utils/getNextID";
import Row from "../components/Row";
import EditWindow from "../components/EditWindow";

const { Text } = Typography;
const rowIDGenerator = getNextID(0);

function CreateForm() {
	const [formName, setFormName] = useState<string>("");
	const [currentForm, setCurrentForm] = useState<FormRow[]>([
		{
			rowID: 0,
			elements: [],
		},
	]);
	const [currentElement, setCurrentElement] = useState<FormElement>();

	const handleNewRow = () => {
		const newRowID = rowIDGenerator.next().value;
		setCurrentForm((curr) => [...curr, { rowID: newRowID, elements: [] }]);
	};

	const handleSubmit = async () => {
		try {
			if (formName === "") {
				return openNotification(NotificationType["ERROR"], "Invalid form name");
			}
			const result = await axios.post("/create-form", {
				name: formName,
				rows: currentForm,
			});
			if (result.data === "SUCCESS") {
				setFormName("");
				return openNotification(NotificationType["SUCCESS"], "Form created successfully");
			}
			return openNotification(NotificationType["ERROR"], "An error occurred");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<FormContext.Provider value={currentForm}>
			<Toolbar />
			<div className="between-spaced">
				<div style={{ width: "70%" }}>
					<Input
						className="form-input-1"
						placeholder="Form Name"
						value={formName}
						onChange={(e) => {
							e.preventDefault();
							setFormName(e.target.value);
						}}
						style={{ marginBottom: "20px", width: "40vw" }}
					/>
					{currentForm.map((row, index: number) => (
						<Row
							key={index}
							row={row}
							setCurrentForm={setCurrentForm}
							setCurrentElement={setCurrentElement}
						/>
					))}
					<div className="vertical-center">
						<div className="centered">
							<Button
								type="dashed"
								onClick={handleNewRow}
								style={{ marginTop: "20px" }}
							>
								<PlusCircleOutlined />
							</Button>
						</div>
						<div className="centered">
							<Button onClick={handleSubmit} style={{ marginTop: "20px" }}>
								Create Form
							</Button>
						</div>
					</div>
				</div>
				<div
					style={{
						width: "25%",
						border: "1px solid white",
						height: "90vh",
						borderRadius: "5px",
					}}
				>
					{currentElement ? (
						<EditWindow
							currentElement={currentElement}
							setCurrentForm={setCurrentForm}
							setCurrentElement={setCurrentElement}
						/>
					) : (
						<>
							<Text style={{ color: "white", fontSize: "2rem" }}>Pick a field, </Text>
							<Text style={{ color: "white", fontSize: "1.5rem" }}>any field</Text>
						</>
					)}
				</div>
			</div>
		</FormContext.Provider>
	);
}

export default CreateForm;
