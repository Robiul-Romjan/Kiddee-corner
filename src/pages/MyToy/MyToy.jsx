import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Table from 'react-bootstrap/Table';


const MyToy = () => {
    const [toys, setToys] = useState([]);

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/userToys?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[url, user?.email]);

    // console.log(toys)

    return (
        <div className="form-container">
        <h2 className="text-center mb-4">My Toys</h2>
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
                            <button className="btn-all">Update</button>
                            <button className="btn-all">Delete</button>
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

export default MyToy;