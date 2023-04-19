import React, { Dispatch, SetStateAction } from "react";
import { FormValue } from "../utils/types";
import { Col, Input, Select, Radio, Typography, Checkbox } from "antd";
const { Text } = Typography;

const elementMap = {
	"TEXT": (
		element: FormValue,
		setCurrentElement: Dispatch<SetStateAction<FormValue | undefined>>
	) => (
		<Input
			className="form-input-1"
			placeholder={element.name}
			onFocus={() => setCurrentElement(element)}
		/>
	),
	"RADIO": (
		element: FormValue,
		setCurrentElement: Dispatch<SetStateAction<FormValue | undefined>>
	) => (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "left",
				marginLeft: "10px",
				flexDirection: "column",
			}}
			onFocus={() => setCurrentElement(element)}
		>
			<Text style={{ color: "white", fontWeight: "bold" }}>{element.name}</Text>
			<Radio.Group>
				{element.extraData.map(({ option }: { option: string }, index: number) => (
					<Radio key={index} style={{ color: "white" }} checked={false} value={option}>
						{option}
					</Radio>
				))}
			</Radio.Group>
		</div>
	),
	"CHECKBOX": (
		element: FormValue,
		setCurrentElement: Dispatch<SetStateAction<FormValue | undefined>>
	) => (
		<div onFocus={() => setCurrentElement(element)}>
			<Checkbox style={{ color: "white" }}>{element.name}</Checkbox>
		</div>
	),
	"DROPDOWN": (
		element: FormValue,
		setCurrentElement: Dispatch<SetStateAction<FormValue | undefined>>
	) => (
		<Select
			placeholder={element.name}
			options={element.extraData.map(({ option }: { option: string }) => {
				return {
					label: option,
					value: option,
				};
			})}
			onFocus={() => setCurrentElement(element)}
			style={{ width: "100%" }}
		/>
	),
	"MULTI_SELECT": (
		element: FormValue,
		setCurrentElement: Dispatch<SetStateAction<FormValue | undefined>>
	) => (
		<Select
			placeholder={element.name}
			mode="multiple"
			options={element.extraData.map(({ option }: { option: string }) => {
				return {
					label: option,
					value: option,
				};
			})}
			onFocus={() => setCurrentElement(element)}
			style={{ width: "100%" }}
		/>
	),
};

const widthMap = {
	"HALF": 10,
	"FULL": 24,
	"THIRD": 6,
};

function ElementsPreview({
	elements,
	setCurrentElement,
}: {
	elements: FormValue[];
	setCurrentElement: Dispatch<SetStateAction<FormValue | undefined>>;
}) {
	return (
		<>
			{elements.length === 0 && (
				<div style={{ border: "1px solid white", height: "1px", width: "100%" }}></div>
			)}
			{elements.map((element, index) => (
				<Col key={index} span={widthMap[element.width]}>
					{elementMap[element.elementType](element, setCurrentElement)}
				</Col>
			))}
		</>
	);
}

export default ElementsPreview;
