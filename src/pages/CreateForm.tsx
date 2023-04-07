import React, { useEffect, useState } from "react";
import AddElement from "../components/AddElement";
import { FormValue } from "../utils/types";
import { FormContext } from "../utils/FormContext";
import FormPreview from "../components/FormPreview";
import { Button, Input } from "antd";
import axios from "../config/_axios";

function CreateForm() {
	const [formName, setFormName] = useState<string>("");
	const [currentForm, setCurrentForm] = useState<FormValue[]>([]);

	const handleSubmit = async () => {
		try {
			if (formName === "") {
				throw Error("Invalid form name");
			}
			console.log(currentForm);
			const result = await axios.post("/create-form", {
				name: formName,
				elements: currentForm,
			});
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<FormContext.Provider value={currentForm}>
			<Input
				placeholder="Form Name"
				onChange={(e: any) => {
					e.preventDefault();
					setFormName(e.target.value);
				}}
				style={{ marginBottom: "20px" }}
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
