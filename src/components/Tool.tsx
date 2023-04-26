import React from "react";
import { useDrag } from "react-dnd";
import { Tool as ToolType, optionBasedFields } from "../utils/constants";
import { Width } from "../utils/types";

function Tool({ tool }: { tool: ToolType }) {
	const extraData: { option: string }[] = [
		{
			option: "Option 1",
		},
		{
			option: "Option 2",
		},
	];
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "image",
		item: {
			elementType: tool.element,
			name: "Pick a name",
			width: Width["HALF"],
			extraData: optionBasedFields.includes(tool.element) ? extraData : undefined,
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<img
			ref={drag}
			src={tool.image}
			width="200px"
			style={{ border: isDragging ? "5px solid #e44552" : "0px" }}
		/>
	);
}

export default Tool;
