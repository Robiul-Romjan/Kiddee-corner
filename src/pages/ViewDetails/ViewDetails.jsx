import { useLoaderData } from "react-router-dom";



const ViewDetails = () => {

    const toy = useLoaderData();
    console.log(toy)
    const { detail, email, name, photo, price, quantity, rating, sellerName } = toy;

    return (
        <div className="py-5 form-container">
            <div className="card container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div>
                            <img className="img-fluid" src={photo} alt="" />
                        </div>
                        <hr />
                        <div>
                            <h2>Seller Information</h2>
                            <div>
                                <h4>Seller Name: {sellerName}</h4>
                                <h4>Seller Email: {email}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2>Toy Details</h2>
                        <div>
                           <h4>Toy Name: {name}</h4>
                           <h4>Price: {price}</h4>
                           <h4>Available: {quantity} items </h4>
                           <h4>Ratings: {rating} Stars</h4>
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