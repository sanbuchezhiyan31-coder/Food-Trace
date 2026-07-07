import api from "./api";

export const login = (data: any) => api.post("login/", data);
export const register = (data: any) => api.post("register/", data);
