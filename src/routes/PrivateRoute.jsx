
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user && user?.email){
        return children
    }
    return (
        <Navigate to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoute;