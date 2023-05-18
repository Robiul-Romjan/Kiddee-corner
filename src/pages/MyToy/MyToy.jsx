import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
// import DetailModal from "../Shared/DetailModal/DetailModal";


const MyToy = () => {
    const [toys, setToys] = useState([]);
    // const [modalShow, setModalShow] = React.useState(false);

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/userToys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [url, user?.email]);


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/usertoys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'Ok'
                            )
                        }
                    })
            }
        })
    };

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
                            toys.map((toy, i) => (
                                <tr key={toy._id}>
                                    <td>{i + 1}</td>
                                    <td className="my-3"> {toy?.sellerName} </td>
                                    <td> {toy.name} </td>
                                    <td> {toy.category} </td>
                                    <td> {toy.price} </td>
                                    <td> {toy.quantity} </td>
                                    <td>
                                      <Link to={`/updateToy/${toy._id}`} className="btn-all">Update</Link>
                                       
                                        <button onClick={() => handleDelete(toy._id)} className="btn-all ms-3">Delete</button>
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