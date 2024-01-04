import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner"

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <Spinner/>
    }

    if (user) {
        return children
    }

    return <Navigate to='/signin' state={location.pathname}></Navigate>;
};

export default PrivateRoute;