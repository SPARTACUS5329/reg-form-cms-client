import React, { useEffect, useState } from "react";
import AddElement from "../components/AddElement";
import { FormValue } from "../utils/types";
import { FormContext } from "../utils/FormContext";
import FormPreview from "../components/FormPreview";
import { Button } from "antd";
import axios from "../config/_axios";

function CreateForm() {
	const [currentForm, setCurrentForm] = useState<FormValue[]>([]);

	const handleSubmit = async () => {
		try {
			console.log(currentForm);
			const result = await axios.post("/create-form", currentForm);
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<FormContext.Provider value={currentForm}>
				<AddElement setCurrentForm={setCurrentForm} />
				<FormPreview />
				<Button onClick={handleSubmit}>Create Form</Button>
			</FormContext.Provider>
		</div>
	);
}

export default CreateForm;
