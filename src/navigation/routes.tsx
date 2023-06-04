import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface PrivateRouteProps {
  children: any;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { authState } = useAuth();
  const location = useLocation();
  if (!authState.loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <>{children}</>;
};



export { PrivateRoute };
