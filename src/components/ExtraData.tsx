import React, { useState } from "react";
import { ElementType } from "../utils/types";
import { Button, Col, Form, Input, Row } from "antd";

function ExtraData({ elementType }: { elementType: ElementType | null }) {
	return (
		<div>
			{(elementType === ElementType["RADIO"] || elementType === ElementType["DROPDOWN"]) && (
				<Form.Item>
					<Form.List name="extraData">
						{(fields, { add, remove }) => {
							return (
								<Col>
									{fields.map((field) => (
										<Row gutter={12} key={field.key}>
											<Col
												lg={{ span: 10 }}
												md={{ span: 10 }}
												sm={{ span: 10 }}
												xs={{ span: 10 }}
											>
												<Form.Item
													{...field}
													name={[field.name, "option"]}
													rules={[
														{
															required: true,
															message: "Missing option",
														},
													]}
												>
													<Input
														className="form-input-1"
														placeholder="Option"
													/>
												</Form.Item>
											</Col>
											<Col span={8}>
												<Button
													style={{ width: "100%" }}
													onClick={() => {
														remove(field.name);
													}}
												>
													Remove option
												</Button>
											</Col>
										</Row>
									))}

									<Form.Item>
										<Button
											type="dashed"
											onClick={() => {
												add();
											}}
											style={{ width: "40vw" }}
											block
										>
											Add option
										</Button>
									</Form.Item>
								</Col>
							);
						}}
					</Form.List>
				</Form.Item>
			)}
		</div>
	);
}

export default ExtraData;
