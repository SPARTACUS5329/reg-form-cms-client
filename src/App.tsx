import React from "react";
import { Router, Switch, Route } from "wouter";
import "./App.css";
import CreateForm from "./pages/CreateForm";
import Home from "./pages/Home";
import ViewForm from "./pages/ViewForm";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/create-form" component={CreateForm} />
					<Route path="/view-form/:name" component={ViewForm} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
