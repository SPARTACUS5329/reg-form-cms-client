import { createContext } from "react";
import { FormRow } from "./types";

export const FormContext = createContext<FormRow[]>([]);
