import React, { useEffect, useState } from "react";
import AddElement from "../components/AddElement";
import { FormValue } from "../utils/types";
import { FormContext } from "../utils/FormContext";
import FormPreview from "../components/FormPreview";

function CreateForm() {
	const [currentForm, setCurrentForm] = useState<FormValue[]>([]);

	useEffect(() => {
		console.log(currentForm);
	}, [currentForm]);

	return (
		<div>
			<FormContext.Provider value={currentForm}>
				<AddElement setCurrentForm={setCurrentForm} />
				<FormPreview />
			</FormContext.Provider>
		</div>
	);
}

export default CreateForm;
