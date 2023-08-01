import axios, { AxiosInstance } from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const instance: AxiosInstance = axios.create({
	baseURL: serverUrl, // The URL of your Express server
});

export default instance;
