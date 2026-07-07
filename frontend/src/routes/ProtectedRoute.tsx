import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = typeof window !== "undefined" ? localStorage.getItem("access") : null;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
