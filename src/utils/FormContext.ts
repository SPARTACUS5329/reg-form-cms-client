import { Dispatch, SetStateAction, createContext } from "react";
import { FormRow } from "./types";

export const FormContext = createContext<{
	currentForm: FormRow[][];
	setCurrentForm: Dispatch<SetStateAction<FormRow[][]>>;
}>({
	currentForm: [],
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setCurrentForm: function (value: SetStateAction<FormRow[][]>): void {
		throw new Error("Function not implemented.");
	},
});
