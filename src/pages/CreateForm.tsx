import React, { useContext, useState } from "react";
import { NotificationType, FormRow } from "../utils/types";
import FormElement from "../utils/classes/FormElement";
import { FormContext } from "../utils/FormContext";
import { Button, Input, Typography } from "antd";
import axios from "../config/_axios";
import openNotification from "../utils/openNotification";
import Toolbar from "../components/Toolbar";
import { PlusCircleOutlined } from "@ant-design/icons";
import getNextID from "../utils/getNextID";
import EditWindow from "../components/EditWindow";
import MultiStep from "../components/MultiStep";
import { UserContext } from "../utils/UserContext";

const { Text } = Typography;
const rowIDGenerator = getNextID(0);

function CreateForm() {
	const [formName, setFormName] = useState<string>("");
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [currentForm, setCurrentForm] = useState<FormRow[][]>([
		[
			{
				rowID: 0,
				elements: [],
			},
		],
	]);
	const [currentElement, setCurrentElement] = useState<FormElement>();
	const user = useContext(UserContext);

	const handleNewRow = () => {
		const newRowID = rowIDGenerator.next().value;
		setCurrentForm((curr) => {
			const temp = [...curr];
			temp[temp.length - 1].push({ rowID: newRowID, elements: [] });
			return temp;
		});
	};

	const handleNewStep = () => {
		// const newRowID = rowIDGenerator.next().value;
		setCurrentForm((curr) => [...curr, []]);
		setCurrentStep(currentStep + 1);
	};

	const handleSubmit = async () => {
		try {
			if (formName === "") {
				return openNotification(NotificationType["ERROR"], "Invalid form name");
			}
			const result = await axios.post("/create-form", {
				name: formName,
				steps: currentForm,
				user,
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
					<MultiStep
						currentStep={currentStep}
						setCurrentStep={setCurrentStep}
						currentForm={currentForm}
						setCurrentForm={setCurrentForm}
						setCurrentElement={setCurrentElement}
						handleSubmit={handleSubmit}
					/>
					<div className="vertical-center">
						<div className="centered" style={{ marginTop: "20px" }}>
							<Button type="dashed" onClick={handleNewRow}>
								<PlusCircleOutlined />
							</Button>
						</div>
						<div className="centered" style={{ marginTop: "20px", gap: "20px" }}>
							<div>
								<Button onClick={handleNewStep}>Add Step</Button>
							</div>
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
