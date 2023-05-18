import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="mt-5 py-5 text-center">
            <Spinner animation="grow" variant="danger" />
        </div>
    }

    if(user){
        return children
    }

    return <Navigate state={{from: location}} to="/login" replace />
};

export default PrivateRoute;