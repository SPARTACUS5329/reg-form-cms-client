import { createContext } from "react";
import { FormValue } from "./types";

export const FormContext = createContext<FormValue[]>([]);
