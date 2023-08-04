import React from "react";
import { Radio, Typography } from "antd";
import { ElementType } from "../types";
import FormElement from "./FormElement";

const { Text } = Typography;

class RadioElement extends FormElement {
	public elementType = ElementType["RADIO"];

	public registerElement(): JSX.Element {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "left",
					marginLeft: "10px",
					flexDirection: "column",
				}}
			>
				<Text style={{ color: "white", fontWeight: "bold" }}>{this.name}</Text>
				<Radio.Group>
					{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
					{this.extraData?.map(({ option }: any, index: number) => (
						<Radio
							key={index}
							style={{ color: "white" }}
							checked={false}
							value={option}
						>
							{option}
						</Radio>
					))}
				</Radio.Group>
			</div>
		);
	}

	public editableElement(
		setCurrentElement: React.Dispatch<React.SetStateAction<FormElement | null>>
	): JSX.Element {
		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "left",
					marginLeft: "10px",
					flexDirection: "column",
				}}
				onFocus={() => setCurrentElement(this)}
			>
				<Text style={{ color: "white", fontWeight: "bold" }}>{this.name}</Text>
				<Radio.Group>
					{this.extraData?.map(({ option }: { option: string }, index: number) => (
						<Radio
							key={index}
							style={{ color: "white" }}
							checked={false}
							value={option}
						>
							{option}
						</Radio>
					))}
				</Radio.Group>
			</div>
		);
	}
}

export default RadioElement;
