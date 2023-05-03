import { Navigate, Outlet } from "react-router-dom";

function SPRoute({ isLogged }) {
  return isLogged === 'user' ? <Outlet /> : <Navigate to="/" />;
}

export default SPRoute;
