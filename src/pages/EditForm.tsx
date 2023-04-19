import React, { useEffect, useState } from "react";
import axios from "../config/_axios";
import { useRoute } from "wouter";
import { Row, Typography } from "antd";
import { Form } from "../utils/types";
import ElementsPreview from "../components/ElementPreview";
import { FormContext } from "../utils/FormContext";

const { Text } = Typography;

function EditForm() {
	const [match, params] = useRoute("/edit-form/:name");
	if (!match || !params?.name) return <div>Sorry this form does not exist</div>;
	const [form, setForm] = useState<Form>();

	useEffect(() => {
		const getForm = async () => {
			try {
				const result = await axios.post("/forms", { filters: { name: params.name } });
				if (!result.data || result.data.length === 0) return;
				setForm(result.data[0]);
			} catch (error) {
				console.error(error);
			}
		};
		getForm();
	}, []);

	return (
		<div style={{ display: "flex" }}>
			<div style={{ width: "70%" }}>
				<Text style={{ color: "white", fontWeight: "bold", fontSize: "3rem" }}>
					{form?.name}
				</Text>
				{form && (
					<FormContext.Provider value={form.elements}>
						{form.elements.map((elements, index) => (
							<Row key={index} className="even-spaced" style={{ marginTop: "20px" }}>
								<ElementsPreview elements={elements} />
							</Row>
						))}
					</FormContext.Provider>
				)}
			</div>
			<div style={{ width: "30%", border: "1px solid white", height: "90vh" }}></div>
		</div>
	);
}

export default EditForm;
