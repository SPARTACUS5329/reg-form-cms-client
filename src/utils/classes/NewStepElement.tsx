import { ElementType } from "../types";
import FormElement from "./FormElement";

class NewStepElement extends FormElement {
	public elementType = ElementType["NEW_STEP"];

	// public registerElement(): JSX.Element {
	// 	return <Input className="form-input-1" placeholder={this.name} />;
	// }

	// public editableElement(
	// 	setCurrentElement: Dispatch<SetStateAction<FormElement | undefined>>
	// ): JSX.Element {
	// 	return (
	// 		<Input
	// 			className="form-input-1"
	// 			placeholder={this.name}
	// 			onFocus={() => setCurrentElement(this)}
	// 		/>
	// 	);
	// }
}

export default NewStepElement;
