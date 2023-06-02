import React, { Dispatch, SetStateAction } from "react";
import { FormElement } from "../utils/types";
import { Col, Input, Select, Radio, Typography, Checkbox } from "antd";
const { Text } = Typography;

const elementMap = {
	"TEXT": (
		element: FormElement,
		setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
	) => (
		<Input
			className="form-input-1"
			placeholder={element.name}
			onFocus={() => setCurrentElement(element)}
		/>
	),
	"RADIO": (
		element: FormElement,
		setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
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
				{element.extraData?.map(({ option }: { option: string }, index: number) => (
					<Radio key={index} style={{ color: "white" }} checked={false} value={option}>
						{option}
					</Radio>
				))}
			</Radio.Group>
		</div>
	),
	"CHECKBOX": (
		element: FormElement,
		setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
	) => (
		<div onFocus={() => setCurrentElement(element)}>
			<Checkbox style={{ color: "white" }}>{element.name}</Checkbox>
		</div>
	),
	"DROPDOWN": (
		element: FormElement,
		setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
	) => (
		<Select
			placeholder={element.name}
			options={
				element.extraData
					? element.extraData.map(({ option }: { option: string }) => {
							return {
								label: option,
								value: option,
							};
					  })
					: []
			}
			onFocus={() => setCurrentElement(element)}
			style={{ width: "100%" }}
		/>
	),
	"MULTI_SELECT": (
		element: FormElement,
		setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
	) => (
		<Select
			placeholder={element.name}
			mode="multiple"
			options={
				element.extraData
					? element.extraData.map(({ option }: { option: string }) => {
							return {
								label: option,
								value: option,
							};
					  })
					: []
			}
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
	elements: FormElement[];
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>;
}) {
	return (
		<>
			{elements.map((element, index) => (
				<Col key={index} span={widthMap[element.width]}>
					{elementMap[element.elementType](element, setCurrentElement)}
				</Col>
			))}
		</>
	);
}

export default ElementsPreview;
