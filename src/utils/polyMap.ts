import TextElement from "./classes/TextElement";
import RadioElement from "./classes/RadioElement";
import CheckboxElement from "./classes/CheckboxElement";
import DropdownElement from "./classes/DropdownElement";
import MultiSelectElement from "./classes/MultiSelectElement";

const polyMap = {
	"TEXT": TextElement,
	"RADIO": RadioElement,
	"CHECKBOX": CheckboxElement,
	"DROPDOWN": DropdownElement,
	"MULTI_SELECT": MultiSelectElement,
};

export default polyMap;
