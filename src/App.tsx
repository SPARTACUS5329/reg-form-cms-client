import React from "react";
import { Router, Switch, Route } from "wouter";
import "./App.css";
import CreateForm from "./pages/CreateForm";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/create-form" component={CreateForm} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
