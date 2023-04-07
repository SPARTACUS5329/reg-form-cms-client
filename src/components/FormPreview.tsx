import React, { useContext } from "react";
import { FormContext } from "../utils/FormContext";
import ElementsPreview from "./ElementPreview";
import { Row } from "antd";

function FormPreview() {
	const currentForm = useContext(FormContext);

	return (
		<div>
			<div>
				{currentForm.map((elements, index) => {
					return (
						<Row key={index} className="even-spaced" style={{ marginTop: "10px" }}>
							<ElementsPreview elements={elements} />
						</Row>
					);
				})}
			</div>
		</div>
	);
}

export default FormPreview;
