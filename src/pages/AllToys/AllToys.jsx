import { useLoaderData } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className="form-container">
            <h2 className="text-center mb-4">All Toys</h2>
            <div className="container">
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        toys.map((toy, i)=> (
                            <tr key={toy._id}>
                            <td>{i + 1}</td>
                            <td className="my-3"> {toy?.sellerName} </td>
                            <td> {toy.name} </td>
                            <td> {toy.category} </td>
                            <td> {toy.price} </td>
                            <td> {toy.quantity} </td>
                            <td>
                                <button className="btn-all">View Details</button>
                            </td>
                        </tr> 
                        ))
                       } 
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllToys;