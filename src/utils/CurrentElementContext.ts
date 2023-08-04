import { Dispatch, SetStateAction, createContext } from "react";
import FormElement from "./classes/FormElement";

export const CurrentElementContext = createContext<{
	currentElement: FormElement | null;
	setCurrentElement: Dispatch<SetStateAction<FormElement | null>>;
}>({
	currentElement: null,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setCurrentElement: function (value: SetStateAction<FormElement | null>): void {
		throw new Error("Function not implemented.");
	},
});
