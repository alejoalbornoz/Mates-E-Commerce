import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute({ requireAdmin = false }) {
  const { loading, isAuthenticated, user } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (requireAdmin && user?.role !== "admin") {
    return <Navigate to="/" replace />; // o a "/acceso-denegado"
  }

  return <Outlet />;
}

export default ProtectedRoute;
