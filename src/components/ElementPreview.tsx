import React from "react";
import { FormValue } from "../utils/types";
import { Col, Input, Select, Radio } from "antd";

const elementMap = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	"TEXT": (name: string, extraData: any) => <Input placeholder={name} />,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	"RADIO": (name: string, extraData: any) => (
		<Radio.Group>
			{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
			{extraData.map(({ option }: any, index: number) => (
				<Radio key={index} style={{ color: "white" }}>
					{option}
				</Radio>
			))}
		</Radio.Group>
	),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	"CHECKBOX": (name: string, extraData: any) => <Input placeholder={name} />,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	"DROPDOWN": (name: string, extraData: any) => (
		<Select
			placeholder={name}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			options={extraData.map(({ option }: any) => {
				return {
					label: option,
					value: option,
				};
			})}
		/>
	),
	"ROW_CHANGE": () => <div />,
};

const widthMap = {
	"HALF": 10,
	"FULL": 24,
	"THIRD": 6,
};

function ElementsPreview({ elements }: { elements: FormValue[] }) {
	return (
		<>
			{elements.length === 0 && (
				<div style={{ border: "1px solid white", height: "1px", width: "100%" }}></div>
			)}
			{elements.map((element, index) => (
				<Col key={index} span={widthMap[element.width]}>
					{elementMap[element.elementType](element.name, element.extraData)}
				</Col>
			))}
		</>
	);
}

export default ElementsPreview;
