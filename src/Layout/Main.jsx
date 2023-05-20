import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <NavigationBar />
                <Outlet />
                <Footer />
                <ToastContainer position="top-center" />
            </div>
        </div>
    );
};

export default Main;