import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { toast } from "react-toastify";




// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="mt-5 py-5 text-center">
            <Spinner animation="grow" variant="danger" />
        </div>
    }

    if (user) {
        return children
    }

    return <div>
        {
           toast.warn("You have to log in first to view details")
        }
        <Navigate state={{ from: location }} to="/login" replace />
    </div>
};

export default PrivateRoute;