import React, { useContext, useState } from "react";
import { Router, Switch, Route, Redirect } from "wouter";
import "./App.css";
import CreateForm from "./pages/CreateForm";
import Home from "./pages/Home";
import ViewForm from "./pages/ViewForm";
import EditForm from "./pages/EditForm";
import { UserContext } from "./utils/UserContext";
import Login from "./pages/Login";
import { User } from "./utils/types";

function App() {
	const [user, setUser] = useState<User | null>(null);

	return (
		<div>
			<UserContext.Provider value={user}>
				<Router>
					<Switch>
						<Route path="/" component={user ? Home : () => <Redirect to="/login" />} />
						<Route
							path="/create-form"
							component={user ? CreateForm : () => <Redirect to="/login" />}
						/>
						<Route
							path="/edit-form/:name"
							component={user ? EditForm : () => <Redirect to="/login" />}
						/>
						<Route path="/register/:name" component={ViewForm} />
						<Route path="/login" component={() => <Login setUser={setUser} />} />
					</Switch>
				</Router>
			</UserContext.Provider>
		</div>
	);
}

export default App;
