import React, { Dispatch, SetStateAction } from "react";
import { useDrop } from "react-dnd";
import { Row as AntRow } from "antd";
import ElementsPreview from "./ElementPreview";
import { FormElementParameters, FormRow } from "../utils/types";
import polyMap from "../utils/polyMap";
import { Validation } from "../utils/constants";

function Row({
	row,
	setCurrentForm,
}: {
	row: FormRow;
	setCurrentForm: Dispatch<SetStateAction<FormRow[][]>>;
}) {
	// isOver is a stateful boolean used to check if an item is hovering
	// over the drop zone
	// eslint-disable-next-line
	const [{ isOver }, drop] = useDrop(() => ({
		accept: "image",
		drop: (item: FormElementParameters) => addTool(item),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addTool = (item: FormElementParameters) => {
		const ItemClass = polyMap[item.elementType];
		const newItem = new ItemClass(
			item.elementType,
			item.name,
			item.width,
			item.extraData,
			Validation["NONE"],
			false
		);
		console.log(row.rowID);
		setCurrentForm((steps) =>
			steps.map((step) =>
				step.map((curr) =>
					curr.rowID === row.rowID
						? {
								rowID: curr.rowID,
								elements: [...curr.elements, newItem],
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  }
						: curr
				)
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
				<ElementsPreview elements={row.elements} />
			</AntRow>
		</div>
	);
}

export default Row;
