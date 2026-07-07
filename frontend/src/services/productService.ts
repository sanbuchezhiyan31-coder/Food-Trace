import api from "./api";

const buildProductFormData = (data: FormData | Record<string, unknown>) => {
  if (data instanceof FormData) {
    return data;
  }

  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    if (value instanceof File) {
      formData.append(key, value);
      return;
    }

    formData.append(key, String(value));
  });

  return formData;
};

export const getProducts = () => api.get("/products/");

export const getProduct = (id: number) => api.get(`/products/${id}/`);

export const addProduct = (data: FormData | Record<string, unknown>) => {
  const formData = buildProductFormData(data);

  return api.post("/products/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateProduct = (id: number, data: FormData | Record<string, unknown>) => {
  const formData = buildProductFormData(data);

  return api.put(`/products/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProduct = (id: number) => api.delete(`/products/${id}/`);