import React from "react";
import FormElement from "../utils/FormElement";
import { Col, Form } from "antd";

const widthMap = {
	"HALF": 10,
	"FULL": 24,
	"THIRD": 6,
};

function DisplayElements({ elements }: { elements: FormElement[] }) {
	return (
		<>
			{/* New row case */}
			{elements.length === 0 && (
				<div style={{ border: "1px solid white", height: "1px", width: "100%" }}></div>
			)}
			{elements.map((element, index) => {
				const registerElement = new FormElement(
					element.elementType,
					element.name,
					element.width,
					element.extraData
				);
				return (
					<Col key={index} span={widthMap[element.width]}>
						<Form.Item name={registerElement.name}>
							{registerElement.registerElement()}
						</Form.Item>
					</Col>
				);
			})}
		</>
	);
}

export default DisplayElements;
