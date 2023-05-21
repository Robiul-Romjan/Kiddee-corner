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
                <div className="col-lg-4 mb-4">
                    <div className="text-center shadow-lg py-4 px-3 review-div rounded">
                        <h1 className="text-danger"><FaQuoteLeft /></h1>
                        <p className="text-muted my-4">I recently purchased a toy from your website for my niece, and I must say, I was thoroughly impressed! The quality of the toy exceeded my expectations, and the attention to detail was remarkable.</p>
                        <div>
                            <span className="text-danger"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span>
                        </div>
                        <img className="people-image my-3" src={user1} alt="" />
                        <h4>Sean Parker</h4>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="text-center shadow-lg py-4 px-3 review-div rounded">
                        <h1 className="text-danger"><FaQuoteLeft /></h1>
                        <p className="text-muted my-4"> I am always on the lookout for animal toys that can engage and inspire young minds. I am delighted to have discovered your website! The range of animal toys you offer is outstanding!</p>
                        <div>
                            <span className="text-danger"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span>
                        </div>
                        <img className="people-image my-3" src={user2} alt="" />
                        <h4>Mike Smith</h4>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="text-center shadow-lg py-4 px-3 review-div rounded">
                        <h1 className="text-danger"><FaQuoteLeft /></h1>
                        <p className="text-muted my-4">I just wanted to express my gratitude for the exceptional customer service I received while shopping on your toy website. The team went above and beyond to answer all my questions promptly and provide.</p>
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