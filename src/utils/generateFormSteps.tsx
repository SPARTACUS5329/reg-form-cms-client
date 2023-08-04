import React, { Dispatch, SetStateAction } from "react";
import { FormRow } from "./types";
import Row from "../components/Row";

const generateFormSteps = (
	form: FormRow[][],
	setCurrentForm: Dispatch<SetStateAction<FormRow[][]>>
) => {
	return form.map((step) => ({
		title: "",
		content: (
			<>
				{step.map((row, index: number) => (
					<Row key={index} row={row} setCurrentForm={setCurrentForm} />
				))}
			</>
		),
	}));
};

export default generateFormSteps;
