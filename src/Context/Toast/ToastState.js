import React, { useState } from "react";
import ToastContext from "./ToastContext";

const ToastState = (props) => {
	const [notification, setNotification] = useState(null);

	const notify = async (msg) => {
		await setNotification(msg);
		const toast = document.getElementById("toastCard");
		toast.style.opacity = "100%";
		toast.style.transform = "translateX(-50px)";
		setTimeout(() => {
			toast.style.opacity = "0%";
			toast.style.transform = "translateX(0px)";
		}, 1000);
	};

	return (
		<ToastContext.Provider value={{ notify, notification }}>
			{props.children}
		</ToastContext.Provider>
	);
};

export default ToastState;
