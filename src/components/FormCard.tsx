import React, { useEffect, useState } from "react";
import { Form, NotificationType, Registration } from "../utils/types";
import { Button, Card } from "antd";
import { Link } from "wouter";
import axios from "../config/_axios";
import openNotification from "../utils/openNotification";

function FormCard({ form }: { form: Form }) {
	const [registrations, setRegistrations] = useState<Registration[]>();
	const launchDate = new Date(form.createdAt).toLocaleString("en-IN", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	useEffect(() => {
		const getRegistrations = async () => {
			try {
				const result = await axios.get(`/register/${form.name}`);
				setRegistrations(result.data);
			} catch (error) {
				console.error(error);
				return openNotification(NotificationType["ERROR"], "An error occurred");
			}
		};
		getRegistrations();
	}, []);

	return (
		<Card
			title={form.name}
			actions={[
				<Button key={1} type="primary">
					Get CSV
				</Button>,
				<Link key={2} href={`/edit-form/${form.name}`} style={{ color: "#1890ff" }}>
					Edit Form
				</Link>,
			]}
			headStyle={{ display: "flex", justifyContent: "space-between" }}
		>
			<div>
				<b>Registrations: </b>
				{registrations?.length}
			</div>
			<div>
				<b>Launch Date: </b>
				{launchDate}
			</div>
		</Card>
	);
}

export default FormCard;
