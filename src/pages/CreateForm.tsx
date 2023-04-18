import React, { useEffect, useState } from "react";
import AddElement from "../components/AddElement";
import { FormValue, NotificationType } from "../utils/types";
import { FormContext } from "../utils/FormContext";
import FormPreview from "../components/FormPreview";
import { Button, Input } from "antd";
import axios from "../config/_axios";
import openNotification from "../utils/openNotification";

function CreateForm() {
	const [formName, setFormName] = useState<string>("");
	const [currentForm, setCurrentForm] = useState<FormValue[][]>([]);

	const handleSubmit = async () => {
		try {
			if (formName === "") {
				throw Error("Invalid form name");
			}
			const result = await axios.post("/create-form", {
				name: formName,
				elements: currentForm,
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
			<Input
				className="form-input-1"
				placeholder="Form Name"
				value={formName}
				onChange={(e: any) => {
					e.preventDefault();
					setFormName(e.target.value);
				}}
				style={{ marginBottom: "20px", width: "40vw" }}
			/>
			<AddElement setCurrentForm={setCurrentForm} />
			<FormPreview />
			<Button onClick={handleSubmit} style={{ marginTop: "20px" }}>
				Create Form
			</Button>
		</FormContext.Provider>
	);
}

export default CreateForm;
