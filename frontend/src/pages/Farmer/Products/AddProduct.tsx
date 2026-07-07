import { useState, type ChangeEvent, type FormEvent } from "react";
import { addProduct } from "../../../services/productService";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import "./AddProduct.css";

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

function AddProduct() {
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.product_name || !form.quantity || !form.price) {
      alert("Please fill in the product name, quantity, and price.");
      return;
    }

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

      await addProduct(formData);

      alert("✅ Product Added Successfully");

      setForm({
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
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <DashboardLayout>
      <div className="add-product-container">
        <div className="add-product-header">
          <div>
            <p className="eyebrow">Farmer Dashboard</p>
            <h1>Add New Product</h1>
            <p className="subtext">
              List your produce with complete details for buyers and distributors.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="product_name">Product Name</label>
              <input
                id="product_name"
                type="text"
                name="product_name"
                value={form.product_name}
                onChange={handleChange}
                placeholder="Enter product name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Grains</option>
                <option>Spices</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="0"
              />
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
              <input
                id="price"
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="harvest_date">Harvest Date</label>
              <input
                id="harvest_date"
                type="date"
                name="harvest_date"
                value={form.harvest_date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="farm_location">Farm Location</label>
              <input
                id="farm_location"
                type="text"
                name="farm_location"
                value={form.farm_location}
                onChange={handleChange}
                placeholder="Enter farm location"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your product"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="product_image">Product Image</label>
              <input
                id="product_image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </div>
          </div>

          <button className="save-btn" type="submit">
            Save Product
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default AddProduct;