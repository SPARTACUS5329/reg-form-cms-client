import React, { useState } from "react";
import { ElementType } from "../utils/types";
import { Form, Input } from "antd";

function ExtraData({ elementType }: { elementType: ElementType | null }) {
	const [numberOfRadioOptions, setNumberOfRadioOptions] = useState<number>(0);
	return (
		<div>
			{elementType === ElementType["RADIO"] && (
				<div>
					<Input
						placeholder="Number of radio options"
						onChange={(e: any) => {
							e.preventDefault();
							setNumberOfRadioOptions(e.target.value);
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default ExtraData;
