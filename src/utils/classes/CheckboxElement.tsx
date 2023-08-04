import React from "react";
import { Checkbox } from "antd";
import { ElementType } from "../types";
import FormElement from "./FormElement";

class CheckboxElement extends FormElement {
	public elementType = ElementType["CHECKBOX"];

	public registerElement(): JSX.Element {
		return <Checkbox style={{ color: "white", width: "100%" }}>{this.name}</Checkbox>;
	}

	public editableElement(
		setCurrentElement: React.Dispatch<React.SetStateAction<FormElement | null>>
	): JSX.Element {
		return (
			<div onFocus={() => setCurrentElement(this)}>
				<Checkbox style={{ color: "white" }}>{this.name}</Checkbox>
			</div>
		);
	}
}

export default CheckboxElement;
