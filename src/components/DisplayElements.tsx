import React from "react";
import { FormValue } from "../utils/types";
import { Col, Input, Select, Radio, Typography, Checkbox, Form } from "antd";
const { Text } = Typography;

const widthMap = {
	"HALF": 10,
	"FULL": 24,
	"THIRD": 6,
};

const elementMap = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	"TEXT": (name: string, extraData: any) => <Input className="form-input-1" placeholder={name} />,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	"RADIO": (name: string, extraData: any) => (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "left",
				marginLeft: "10px",
				flexDirection: "column",
			}}
		>
			<Text style={{ color: "white", fontWeight: "bold" }}>{name}</Text>
			<Radio.Group>
				{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{extraData.map(({ option }: any, index: number) => (
					<Radio key={index} style={{ color: "white" }} checked={false} value={option}>
						{option}
					</Radio>
				))}
			</Radio.Group>
		</div>
	),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	"CHECKBOX": (name: string, extraData: any) => (
		<Checkbox style={{ color: "white", width: "100%" }}>{name}</Checkbox>
	),
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
			style={{ width: "100%" }}
		/>
	),
	"MULTI_SELECT": (name: string, extraData: any) => (
		<Select
			placeholder={name}
			mode="multiple"
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			options={extraData.map(({ option }: any) => {
				return {
					label: option,
					value: option,
				};
			})}
			style={{ width: "100%" }}
		/>
	),
};

function DisplayElements({ elements }: { elements: FormValue[] }) {
	return (
		<>
			{/* New row case */}
			{elements.length === 0 && (
				<div style={{ border: "1px solid white", height: "1px", width: "100%" }}></div>
			)}
			{elements.map((element, index) => (
				<Col key={index} span={widthMap[element.width]}>
					<Form.Item name={element.name}>
						{elementMap[element.elementType](element.name, element.extraData)}
					</Form.Item>
				</Col>
			))}
		</>
	);
}

export default DisplayElements;
