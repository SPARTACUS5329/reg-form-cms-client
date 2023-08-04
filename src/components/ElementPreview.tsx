import React, { useContext } from "react";
import FormElement from "../utils/classes/FormElement";
import { Col } from "antd";
import { CurrentElementContext } from "../utils/CurrentElementContext";

const widthMap = {
	"HALF": 10,
	"FULL": 24,
	"THIRD": 6,
};

function ElementsPreview({ elements }: { elements: FormElement[] }) {
	const { setCurrentElement } = useContext(CurrentElementContext);
	return (
		<>
			{elements.map((element, index) => (
				<Col key={index} span={widthMap[element.width]}>
					{element.editableElement(setCurrentElement)}
				</Col>
			))}
		</>
	);
}

export default ElementsPreview;
