import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user ,loading} = useContext(AuthContext);
  if (loading){
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;