import React from "react";
import { toolMap } from "../utils/constants";
import Tool from "./Tool";

function Toolbar() {
	return (
		<div
			style={{
				height: "8vh",
				border: "1px solid white",
				marginBottom: "40px",
				borderRadius: "15px",
				padding: "20px",
			}}
			className="even-spaced"
		>
			{toolMap.map((tool, index: number) => (
				<Tool key={index} tool={tool} />
			))}
		</div>
	);
}

export default Toolbar;
