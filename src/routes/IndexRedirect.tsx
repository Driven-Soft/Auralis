import { Navigate } from "react-router-dom";
import Home from "./Home";
import { useUser } from "../context/User/useUser";

const IndexRedirect = () => {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Home />;
};

export default IndexRedirect;
