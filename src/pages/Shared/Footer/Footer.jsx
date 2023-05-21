import "./Footer.css"
import logo from "/logo.png";
import playStore from "/play-store.png";
import appStore from "/app-store.png";
import { FaFacebook, FaGithubAlt, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="part-1 d-flex align-items-center">
                            <img src={logo} alt="" />
                            <h4>KiddieCorner</h4>
                        </div>
                        <h4 className="mt-4">Download Our App</h4>
                        <div className="app">
                            <img src={playStore} alt="" />
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact">
                            <h4 className="text-danger">Contact Us</h4>
                            <h5>Email:</h5>
                            <p>kiddie-corner@gmail.com</p>
                            <h5>Phone:</h5>
                            <p>+994567324</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h4 className="text-danger">Follow Us</h4>
                        <div className=" mt-3">
                            <p className="fs-3 m-0"> <FaFacebook /> </p>
                            <p className="fs-3 m-0"> <FaGithubAlt /> </p>
                            <p className="fs-3 m-0"> <FaTwitter /> </p>
                            <p className="fs-3 m-0"> <FaInstagram /> </p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h4 className="text-danger mb-3">Address</h4>
                        <p>123 Main Street, <br />  New York City, USA, 12345</p>
                    </div>
                </div>
                <hr />
                <p className="text-center">Copyright 2023- All Right Reserved By <span className="text-danger">Robiul Alam Romjan.</span></p>
            </div>
        </div>
    );
};

export default Footer;