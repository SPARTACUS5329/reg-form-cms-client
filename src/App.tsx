import React from "react";
import { Router, Switch, Route } from "wouter";
import "./App.css";
import CreateForm from "./pages/CreateForm";
import Home from "./pages/Home";
import ViewForm from "./pages/ViewForm";
import EditForm from "./pages/EditForm";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/create-form" component={CreateForm} />
					<Route path="/edit-form/:name" component={EditForm} />
					<Route path="/register/:name" component={ViewForm} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
