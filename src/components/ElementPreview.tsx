import React, { Dispatch, SetStateAction } from "react";
import FormElement from "../utils/classes/FormElement";
import { Col } from "antd";

const widthMap = {
	"HALF": 10,
	"FULL": 24,
	"THIRD": 6,
};

function ElementsPreview({
	elements,
	setCurrentElement,
}: {
	elements: FormElement[];
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>;
}) {
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
