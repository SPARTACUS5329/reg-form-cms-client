import React, { useState } from "react";
import { ElementType } from "../utils/types";
import { Button, Col, Form, Input, Row } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { optionBasedFields } from "../utils/constants";

function ExtraData({ elementType }: { elementType: ElementType | null }) {
	return (
		<>
			{elementType && optionBasedFields.includes(elementType) && (
				<Form.Item>
					<Form.List name="extraData">
						{(fields, { add, remove }) => {
							return (
								<>
									{fields.map((field) => (
										<Row className="centered" gutter={12} key={field.key}>
											<Col span={10}>
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
											<Col span={6}>
												<Button
													style={{ width: "100%", background: "#e44552" }}
													onClick={() => {
														remove(field.name);
													}}
												>
													<MinusCircleOutlined
														style={{ fontSize: "25px", color: "white" }}
													/>
												</Button>
											</Col>
										</Row>
									))}

									<Row className="centered">
										<Col span={6}>
											<Form.Item>
												<Button
													type="primary"
													onClick={() => {
														add();
													}}
													block
													style={{ background: "#32a852" }}
												>
													<PlusCircleOutlined
														style={{
															fontSize: "25px",
															color: "white",
														}}
													/>
												</Button>
											</Form.Item>
										</Col>
									</Row>
								</>
							);
						}}
					</Form.List>
				</Form.Item>
			)}
		</>
	);
}

export default ExtraData;
