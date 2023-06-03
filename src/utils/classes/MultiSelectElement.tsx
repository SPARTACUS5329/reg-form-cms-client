import React from "react";
import FormElement from "./FormElement";
import { ElementType } from "../types";
import { Select } from "antd";

class MultiSelectElement extends FormElement {
	public elementType = ElementType["MULTI_SELECT"];

	public registerElement(): JSX.Element {
		return (
			<Select
				placeholder={this.name}
				mode="multiple"
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				options={this.extraData?.map(({ option }: any) => {
					return {
						label: option,
						value: option,
					};
				})}
				style={{ width: "100%" }}
			/>
		);
	}

	public editableElement(
		setCurrentElement: React.Dispatch<React.SetStateAction<FormElement | undefined>>
	): JSX.Element {
		return (
			<Select
				placeholder={this.name}
				mode="multiple"
				options={this.extraData?.map(({ option }: { option: string }) => {
					return {
						label: option,
						value: option,
					};
				})}
				onFocus={() => setCurrentElement(this)}
				style={{ width: "100%" }}
			/>
		);
	}
}

export default MultiSelectElement;
