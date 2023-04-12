import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Form } from "../utils/types";
import axios from "../config/_axios";
import { Row } from "antd";
import DisplayElements from "../components/DisplayElements";

function ViewForm() {
	const [match, params] = useRoute("/view-form/:name");
	if (!match || !params?.name) return <div>Sorry this form does not exist</div>;
	const [form, setForm] = useState<Form>();

	useEffect(() => {
		const getForm = async () => {
			try {
				const result = await axios.post("/forms", { filters: { name: params.name } });
				if (!result.data || result.data.length === 0) return;
				setForm(result.data[0]);
				console.log(result.data);
			} catch (error) {
				console.error(error);
			}
		};
		getForm();
	}, []);

	return (
		<div>
			{form?.elements.map((elements, index) => {
				return (
					<Row key={index} className="even-spaced" style={{ marginTop: "20px" }}>
						<DisplayElements elements={elements} />
					</Row>
				);
			})}
		</div>
	);
}

export default ViewForm;
