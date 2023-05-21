
import { Link, useLoaderData } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";

const AllToys = () => {
    const toys = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const [allToys, setAllToys] = useState(toys);
    const [searchText, setSearchText] = useState("")
    
  
    const handleSearch =()=> {
        fetch(`https://assignment-11-server-sepia.vercel.app/toySearchByName/${searchText}`)
        .then(res => res.json())
        .then(data => setAllToys(data))
    }

    useEffect(()=>{
        document.title= "KiddieCorner | All-Toys"
    }, [])

    return (
        <div className="form-container">
            <h2 className="text-center mb-4">All Toys</h2>
            <div className="text-center mb-4">
                <input className="px-3 py-2 rounded me-3" onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="search by toy name" />
                <button onClick={handleSearch} className="btn-all">Search</button>
            </div>
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
                        allToys?.map((toy, i)=> (
                            <tr key={toy._id}>
                            <td>{i + 1}</td>
                            <td className="my-3"> {toy?.sellerName} </td>
                            <td> {toy?.name} </td>
                            <td> {toy?.category} </td>
                            <td> ${toy?.price} </td>
                            <td> {toy?.quantity} items </td>
                            <td>
                                <Link to={`/view-details/${toy._id}`} className="btn-all">View Details</Link>
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