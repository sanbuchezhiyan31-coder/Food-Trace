import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { getProduct, updateProduct } from "../../../services/productService";

interface ProductFormState {
  product_name: string;
  category: string;
  quantity: string;
  unit: string;
  price: string;
  harvest_date: string;
  expiry_date: string;
  farm_location: string;
  description: string;
}

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [form, setForm] = useState<ProductFormState>({
    product_name: "",
    category: "Vegetables",
    quantity: "",
    unit: "Kg",
    price: "",
    harvest_date: "",
    expiry_date: "",
    farm_location: "",
    description: "",
  });

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;

      try {
        const response = await getProduct(Number(id));
        const product = response.data;

        setForm({
          product_name: product.product_name || "",
          category: product.category || "Vegetables",
          quantity: String(product.quantity || ""),
          unit: product.unit || "Kg",
          price: String(product.price || ""),
          harvest_date: product.harvest_date || "",
          expiry_date: product.expiry_date || "",
          farm_location: product.farm_location || "",
          description: product.description || "",
        });
      } catch (error) {
        console.error(error);
        alert("Unable to load product details.");
      }
    };

    void loadProduct();
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!id) return;

    try {
      const formData = new FormData();
      formData.append("product_name", form.product_name);
      formData.append("category", form.category);
      formData.append("quantity", form.quantity);
      formData.append("unit", form.unit);
      formData.append("price", form.price);
      formData.append("harvest_date", form.harvest_date);
      formData.append("expiry_date", form.expiry_date);
      formData.append("farm_location", form.farm_location);
      formData.append("description", form.description);

      if (image) {
        formData.append("image", image);
      }

      await updateProduct(Number(id), formData);
      navigate("/farmer/products");
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  return (
    <DashboardLayout>
      <div className="add-product-container">
        <div className="add-product-header">
          <div>
            <p className="eyebrow">Farmer Dashboard</p>
            <h1>Edit Product</h1>
            <p className="subtext">Update the product details below.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="product_name">Product Name</label>
              <input id="product_name" name="product_name" value={form.product_name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" value={form.category} onChange={handleChange}>
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Grains</option>
                <option>Spices</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input id="quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="unit">Unit</label>
              <select id="unit" name="unit" value={form.unit} onChange={handleChange}>
                <option value="Kg">Kg</option>
                <option value="Pieces">Pieces</option>
                <option value="Bags">Bags</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" value={form.price} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="harvest_date">Harvest Date</label>
              <input id="harvest_date" name="harvest_date" type="date" value={form.harvest_date} onChange={handleChange} />
            </div>

            <div className="form-group full-width">
              <label htmlFor="farm_location">Farm Location</label>
              <input id="farm_location" name="farm_location" value={form.farm_location} onChange={handleChange} />
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" value={form.description} onChange={handleChange} />
            </div>

            <div className="form-group full-width">
              <label htmlFor="product_image">Replace Image</label>
              <input id="product_image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
            </div>
          </div>

          <button className="save-btn" type="submit">Update Product</button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default EditProduct;
