import React, { Dispatch, SetStateAction } from "react";
import { useDrop } from "react-dnd";
import { Row as AntRow } from "antd";
import ElementsPreview from "./ElementPreview";
import { FormElement, FormRow } from "../utils/types";

function Row({
	row,
	setCurrentForm,
	setCurrentElement,
}: {
	row: FormRow;
	setCurrentForm: Dispatch<SetStateAction<FormRow[]>>;
	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>;
}) {
	// isOver is a stateful boolean used to check if an item is hovering
	// over the drop zone
	// eslint-disable-next-line
	const [{ isOver }, drop] = useDrop(() => ({
		accept: "image",
		drop: (item: FormElement) => addTool(item),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addTool = (item: FormElement) => {
		setCurrentForm((currentForm) =>
			currentForm.map((curr) =>
				curr.rowID === row.rowID
					? {
							rowID: curr.rowID,
							elements: [...curr.elements, item],
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }
					: curr
			)
		);
	};

	return (
		<div
			style={{
				height: "40px",
				width: "100%",
				border: "1px solid white",
				padding: "10px",
				marginTop: "20px",
			}}
			ref={drop}
		>
			<AntRow gutter={12} className="even-spaced">
				<ElementsPreview elements={row.elements} setCurrentElement={setCurrentElement} />
			</AntRow>
		</div>
	);
}

export default Row;
