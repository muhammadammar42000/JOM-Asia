import { Navigate, Outlet } from "react-router-dom";

function AdminRoute({ isLogged }) {
  return isLogged === 'admin' ? <Outlet /> : <Navigate to="/" />;
}

export default AdminRoute;
