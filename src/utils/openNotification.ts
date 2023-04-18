import { notification } from "antd";
import { NotificationType } from "./types";

const openNotification = (type: NotificationType, message: string, description = "") => {
	if (
		type !== NotificationType["ERROR"] &&
		type !== NotificationType["WARNING"] &&
		type !== NotificationType["SUCCESS"]
	)
		return;

	notification[type]({
		message,
		description,
		placement: "bottomRight",
		duration: type === "error" ? 0 : 5,
	});
};

export default openNotification;
