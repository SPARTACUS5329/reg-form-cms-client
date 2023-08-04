import React, { Dispatch, SetStateAction } from "react";
import { ElementType } from "../types";
import FormElement from "./FormElement";
import { Input } from "antd";

class TextElement extends FormElement {
	public elementType = ElementType["TEXT"];

	public registerElement(): JSX.Element {
		return <Input className="form-input-1" placeholder={this.name} />;
	}

	public editableElement(
		setCurrentElement: Dispatch<SetStateAction<FormElement | null>>
	): JSX.Element {
		return (
			<Input
				className="form-input-1"
				placeholder={this.name}
				onFocus={() => setCurrentElement(this)}
			/>
		);
	}
}

export default TextElement;
