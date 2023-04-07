import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
	baseURL: "http://localhost:8000", // The URL of your Express server
});

export default instance;
