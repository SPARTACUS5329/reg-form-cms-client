import React from "react";
import { ElementType, Width } from "../types";
import polyMap from "../polyMap";

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
		const ItemClass = polyMap[elementType];
		return new ItemClass(elementType, name, width, extraData);
	}

	public registerElement(): JSX.Element {
		return <div>Register Element</div>;
	}

	public editableElement(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setCurrentElement: React.Dispatch<React.SetStateAction<FormElement | undefined>>
	): JSX.Element {
		return <div>Editable Element</div>;
	}
}

export default FormElement;
