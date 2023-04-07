import React from "react";
import { Link } from "wouter";
import "../styles/Home.css";

function Home() {
	return (
		<div>
			<div className="even-spaced">
				<div>
					<Link to="/create-form" className="nav-button">
						New Form
					</Link>
				</div>
				<div>
					<Link to="/view-form" className="nav-button">
						View Forms
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
