import api from "./api";

export const getOrders = () => api.get("orders/");
export const addOrder = (data: any) => api.post("orders/", data);
