import React from "react";
import { Select } from "antd";
import { ElementType } from "../types";
import FormElement from "./FormElement";

class DropdownElement extends FormElement {
	public elementType = ElementType["DROPDOWN"];

	public registerElement(): JSX.Element {
		return (
			<Select
				placeholder={this.name}
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

export default DropdownElement;
