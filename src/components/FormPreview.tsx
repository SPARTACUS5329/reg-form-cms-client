import React, { useContext } from "react";
import { FormContext } from "../utils/FormContext";
import ElementPreview from "./ElementPreview";

function FormPreview() {
	const currentForm = useContext(FormContext);

	return (
		<div>
			<div>
				{currentForm.map((element, index) => {
					return <ElementPreview element={element} key={index} />;
				})}
			</div>
		</div>
	);
}

export default FormPreview;
