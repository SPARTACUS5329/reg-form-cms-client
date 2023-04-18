import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Form } from "../utils/types";
import axios from "../config/_axios";
import "../styles/Home.css";

function Home() {
	const [forms, setForms] = useState<Form[]>([]);

	useEffect(() => {
		const getForms = async () => {
			try {
				const result = await axios.post("/forms", {});
				setForms(result.data);
			} catch (error) {
				console.error(error);
			}
		};
		getForms();
	}, []);

	return (
		<div>
			<div className="even-spaced" style={{ marginBottom: "40px" }}>
				<div>
					<Link to="/create-form" className="nav-button">
						New Form
					</Link>
				</div>
				<div>
					<Link to="/register" className="nav-button">
						View Forms
					</Link>
				</div>
			</div>
			<div>
				{forms.map((form, index) => (
					<Link href={`/register/${form.name}`} key={index}>
						{form.name}
					</Link>
				))}
			</div>
		</div>
	);
}

export default Home;
