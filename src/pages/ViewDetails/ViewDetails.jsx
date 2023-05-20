import { useLoaderData } from "react-router-dom";
import "./ViewDetails.css"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const ViewDetails = () => {

    const toy = useLoaderData();
    console.log(toy)
    const { detail, email, name, photo, price, quantity, rating, sellerName } = toy;

    return (
        <div className="py-5 form-container">
            <div className="card container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 p-4">
                        <div className="toy-detail-img">
                            <img className="rounded" src={photo} alt="" />
                        </div>
                        <hr />
                        <div>
                            <h2 className="text-danger">Seller Information</h2>
                            <hr />
                            <div>
                                <h5>Seller Name: {sellerName}</h5>
                                <h5>Seller Email: {email}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="text-danger">Toy Details</h2>
                        <hr />
                        <div>
                            <h4>Toy Name: {name}</h4>
                            <h4>Price: ${price}</h4>
                            <h4>Available: {quantity} items </h4>
                            <h4>
                                <span>Ratings: {rating}</span>
                                <span className="inline-block"><Rating style={{ maxWidth: 100 }} value={rating} readOnly /></span>
                            </h4>
                            <h4>Details:</h4>
                            <p>{detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;