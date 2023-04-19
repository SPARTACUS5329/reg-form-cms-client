import React, { useEffect, useState } from "react";
import axios from "../config/_axios";
import { useRoute } from "wouter";
import { Row, Typography } from "antd";
import { Form, FormValue } from "../utils/types";
import ElementsPreview from "../components/ElementPreview";
import { FormContext } from "../utils/FormContext";
import EditWindow from "../components/EditWindow";

const { Text } = Typography;

function EditForm() {
	const [match, params] = useRoute("/edit-form/:name");
	if (!match || !params?.name) return <div>Sorry this form does not exist</div>;
	const [currentForm, setCurrentForm] = useState<Form>();
	const [currentElement, setCurrentElement] = useState<FormValue>();

	useEffect(() => {
		const getForm = async () => {
			try {
				const result = await axios.post("/forms", { filters: { name: params.name } });
				if (!result.data || result.data.length === 0) return;
				setCurrentForm(result.data[0]);
			} catch (error) {
				console.error(error);
			}
		};
		getForm();
	}, []);

	return (
		<div style={{ display: "flex" }}>
			<FormContext.Provider value={currentForm?.elements || []}>
				<div style={{ width: "70%" }}>
					<Text style={{ color: "white", fontWeight: "bold", fontSize: "3rem" }}>
						{currentForm?.name}
					</Text>
					{currentForm && (
						<>
							{currentForm.elements.map((elements, index) => (
								<Row
									key={index}
									className="even-spaced"
									style={{ marginTop: "20px" }}
								>
									<ElementsPreview
										elements={elements}
										setCurrentElement={setCurrentElement}
									/>
								</Row>
							))}
						</>
					)}
				</div>
				{currentElement && (
					<div style={{ width: "30%", border: "1px solid white", height: "90vh" }}>
						<EditWindow
							currentElement={currentElement}
							setCurrentForm={setCurrentForm}
							setCurrentElement={setCurrentElement}
						/>
					</div>
				)}
			</FormContext.Provider>
		</div>
	);
}

export default EditForm;
