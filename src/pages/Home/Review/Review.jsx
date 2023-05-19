import "./Review.css"
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import user1 from "/user-1.png"
import user2 from "/user-2.png"
import user3 from "/user-3.png"

const Review = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <h4 className="text-center mb-4">What People Says</h4>
                <div className="col-lg-4">
                    <div className="text-center shadow-lg p-4 review-div rounded">
                        <h1 className="text-danger"><FaQuoteLeft /></h1>
                        <p className="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates dignissimos illum aliquam velit iusto quasi aspernatur eveniet consequatur ipsum.</p>
                        <div>
                            <span className="text-danger"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span>
                        </div>
                        <img className="people-image my-3" src={user1} alt="" />
                        <h4>Sean Parker</h4>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center shadow-lg p-4 review-div rounded">
                        <h1 className="text-danger"><FaQuoteLeft /></h1>
                        <p className="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates dignissimos illum aliquam velit iusto quasi aspernatur eveniet consequatur ipsum.</p>
                        <div>
                            <span className="text-danger"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span>
                        </div>
                        <img className="people-image my-3" src={user2} alt="" />
                        <h4>Mike Smith</h4>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center shadow-lg p-4 review-div rounded">
                        <h1 className="text-danger"><FaQuoteLeft /></h1>
                        <p className="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates dignissimos illum aliquam velit iusto quasi aspernatur eveniet consequatur ipsum.</p>
                        <div>
                            <span className="text-danger"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span>
                        </div>
                        <img className="people-image my-3" src={user3} alt="" />
                        <h4>Mabel Joe</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;