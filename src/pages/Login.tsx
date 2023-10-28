import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { Button, Form, Input } from "antd";
import axios from "../config/_axios";
import { Responses } from "../utils/constants";
import openNotification from "../utils/openNotification";
import { NotificationType, User } from "../utils/types";
import { useLocation } from "wouter";
import { UserContext } from "../utils/UserContext";

function Login({ setUser }: { setUser: Dispatch<SetStateAction<User | null>> }) {
	const user = useContext(UserContext);
	const [form] = Form.useForm();
	const [, setRoute] = useLocation();

	const handleLogin = async (values: { name: string; password: string }) => {
		try {
			const result = await axios.post("/user/login", values);
			if (result.data.message === Responses["SUCCESS"]) {
				setUser(result.data.user);
			}
		} catch (error: any) {
			console.error(error);
			openNotification(
				NotificationType["ERROR"],
				error.response.data.errorCode === 418
					? error.response.data.message
					: "An error occurred"
			);
		}
	};

	useEffect(() => {
		if (user) return setRoute("/");
	}, [user]);

	return (
		<div className="centered">
			<div
				className="vertical-center"
				style={{ width: "40vw", height: "40vh", border: "1px solid white" }}
			>
				<Form form={form} name="login" onFinish={handleLogin} scrollToFirstError>
					<Form.Item name="name">
						<Input
							placeholder="Username"
							autoComplete="username"
							style={{ width: "70%" }}
						/>
					</Form.Item>
					<Form.Item name="password">
						<Input
							placeholder="Password"
							type="password"
							autoComplete="current-password"
							style={{ width: "70%" }}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Login
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Login;
