import { Navigate } from "react-router-dom";
import Home from "./Home";
import { useUser } from "../context/User/useUser";

const IndexRedirect = () => {
  const { userEmail } = useUser();

  if (userEmail && userEmail.length > 0) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Home />;
};

export default IndexRedirect;
