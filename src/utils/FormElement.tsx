import React, { Dispatch, SetStateAction } from "react";
import { ElementType, Width } from "./types";
import { Input, Select, Radio, Typography, Checkbox } from "antd";

const { Text } = Typography;

const EditableElementMap = {
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
				{element.extraData.map(({ option }: { option: string }, index: number) => (
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
		element: FormElement,
		setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
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

const DisplayElementMap = {
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

class FormElement {
	public elementType: ElementType;
	public name: string;
	public width: Width;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public extraData: any[] | undefined;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(
		elementType: ElementType,
		name: string,
		width: Width,
		extraData: any[] | undefined
	) {
		this.elementType = elementType;
		this.name = name;
		this.width = width;
		this.extraData = extraData;
	}

	public registerElement(): JSX.Element {
		return DisplayElementMap[this.elementType](this.name, this.extraData);
	}

	public editableElement(
		setCurrentElement: React.Dispatch<React.SetStateAction<FormElement | undefined>>
	): JSX.Element {
		return EditableElementMap[this.elementType](this, setCurrentElement);
	}

	public update({
		elementType,
		name,
		width,
		extraData,
	}: {
		elementType: ElementType;
		name: string;
		width: Width;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		extraData: any[] | undefined;
	}): FormElement {
		this.elementType = elementType;
		this.name = name;
		this.width = width;
		this.extraData = extraData;
		return this;
	}
}

export default FormElement;
