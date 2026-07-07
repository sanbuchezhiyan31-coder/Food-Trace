import api from "./api";

export const getTracking = () => api.get("tracking/");

export const addTracking = (data: any) => api.post("tracking/", data);
