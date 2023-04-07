import React from "react";
import { FormValue } from "../utils/types";
import { Col, Input } from "antd";

const elementMap = {
	"TEXT": (name: string) => <Input placeholder={name} />,
	"RADIO": (name: string) => <Input placeholder={name} />,
	"CHECKBOX": (name: string) => <Input placeholder={name} />,
	"DROPDOWN": (name: string) => <Input placeholder={name} />,
};

const widthMap = {
	"HALF": 12,
	"FULL": 24,
	"THIRD": 8,
};

function ElementPreview({ element }: { element: FormValue }) {
	return (
		<div style={{ marginBottom: "10px" }}>
			<Col span={widthMap[element.width]}>
				{elementMap[element.elementType](element.name)}
			</Col>
		</div>
	);
}

export default ElementPreview;
