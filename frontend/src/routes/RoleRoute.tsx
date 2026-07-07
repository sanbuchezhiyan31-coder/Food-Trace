import { Navigate, Outlet } from "react-router-dom";

interface RoleRouteProps {
  allowedRoles: string[];
}

function RoleRoute({ allowedRoles }: RoleRouteProps) {
  const role = typeof window !== "undefined" ? localStorage.getItem("role")?.toLowerCase() : null;

  if (!role || !allowedRoles.some((allowedRole) => allowedRole.toLowerCase() === role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default RoleRoute;
