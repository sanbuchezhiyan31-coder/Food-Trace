import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import CustomerDashboard from "../pages/Customer/Dashboard/CustomerDashboard";
import FarmerDashboard from "../pages/Farmer/Dashboard/FarmerDashboard";
import AddProduct from "../pages/Farmer/AddProduct/AddProduct";
import MyProducts from "../pages/Farmer/MyProducts/MyProducts";
import EditProduct from "../pages/Farmer/EditProduct/EditProduct";
import FarmerTracking from "../pages/Farmer/Tracking/FarmerTracking";
import Orders from "../pages/Farmer/Orders/Orders";
import Reports from "../pages/Farmer/Reports/Reports";
import Profile from "../pages/Farmer/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import DistributorDashboard from "../pages/Distributor/Dashboard/DistributorDashboard";
import RetailerDashboard from "../pages/Retailer/Dashboard/RetailerDashboard";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       <Route element={<ProtectedRoute />}>

  {/* Customer */}
  <Route element={<RoleRoute allowedRoles={["customer"]} />}>
    <Route path="/customer" element={<CustomerDashboard />} />
  </Route>

  {/* Farmer */}
  <Route element={<RoleRoute allowedRoles={["farmer"]} />}>
    <Route path="/farmer" element={<FarmerDashboard />} />
    <Route path="/farmer/add-product" element={<AddProduct />} />
    <Route path="/farmer/products" element={<MyProducts />} />
    <Route path="/farmer/edit-product/:id" element={<EditProduct />} />
    <Route path="/farmer/tracking" element={<FarmerTracking />} />
    <Route path="/farmer/orders" element={<Orders />} />
    <Route path="/farmer/reports" element={<Reports />} />
    <Route path="/farmer/profile" element={<Profile />} />
  </Route>

  {/* Distributor */}
  <Route element={<RoleRoute allowedRoles={["distributor"]} />}>
    <Route path="/distributor" element={<DistributorDashboard />} />
  </Route>

  {/* Retailer */}
  <Route element={<RoleRoute allowedRoles={["retailer"]} />}>
    <Route path="/retailer" element={<RetailerDashboard />} />
  </Route>

  {/* Admin */}
  <Route element={<RoleRoute allowedRoles={["admin"]} />}>
    <Route path="/admin" element={<AdminDashboard />} />
  </Route>

</Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
