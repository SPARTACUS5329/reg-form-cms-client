import axios, { AxiosInstance } from "axios";

const serverURL = import.meta.env.VITE_SERVER_URL;

const instance: AxiosInstance = axios.create({
	baseURL: serverURL, // The URL of your Express server
});

export default instance;
