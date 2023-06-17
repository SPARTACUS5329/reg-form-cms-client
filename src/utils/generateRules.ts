import FormElement from "./classes/FormElement";
import { Validation, ruleObject } from "./constants";

const generateRules = (element: FormElement): object[] => {
	const rules = [];
	if (element.isRequired) {
		const requiredRule = {
			required: true,
			message: `Please enter your ${element.name}`,
		};
		rules.push(requiredRule);
	}
	if (element.validation !== Validation["NONE"]) {
		const patternRule = {
			pattern: new RegExp(ruleObject[element.validation]),
			message: `Please enter a avlid ${element.name}`,
		};
		rules.push(patternRule);
	}
	return rules;
};

export default generateRules;
