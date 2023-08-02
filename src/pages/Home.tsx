import React, { useState, useEffect, useContext } from "react";
import { Link } from "wouter";
import { Form } from "../utils/types";
import axios from "../config/_axios";
import "../styles/Home.css";
import FormCard from "../components/FormCard";
import { UserContext } from "../utils/UserContext";

function Home() {
	const [forms, setForms] = useState<Form[]>([]);
	const user = useContext(UserContext);

	useEffect(() => {
		const getForms = async () => {
			try {
				const result = await axios.post("/forms", { user });
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
			</div>
			<div className="centered">
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "auto auto auto",
						rowGap: "2rem",
						columnGap: "2rem",
					}}
				>
					{forms.map((form, index) => (
						<FormCard key={index} form={form} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
