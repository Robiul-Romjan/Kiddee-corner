import { useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";


const AddAToy = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)

    const handleAddToy = (e) => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = user?.displayName;
        const email = user?.email;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;

        const newToy = {
            photo, name, sellerName, email, category, price, rating, quantity, detail
        }
        // console.log(newToy)
        fetch("http://localhost:5000/addToys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully Posted',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    };

    useEffect(()=>{
        document.title= "KiddieCorner | Add-A-Toy"
    }, [])

    return (
        <div className="container form-container mt-5 rounded">
            <h2 className="text-center mb-4">Add Your Toy</h2>
            <form onSubmit={handleAddToy} className="w-75 mx-auto">
                <div className="row row-cols-2">
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="name" type="text" placeholder="type toy name" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="sellerName" value={user?.displayName} type="text" placeholder="type your name" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="email" value={user?.email} type="email" />
                    </div>
                    <div className="col">
                        <Form.Select name="category" aria-label="Default select example">
                            <option>Select category</option>
                            <option value="teddyBear">Teddy Bear</option>
                            <option value="horse">Horse</option>
                            <option value="cat">Cat</option>
                        </Form.Select>
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="price" type="number" placeholder="toy price" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="rating" type="number" placeholder="type rating" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="quantity" type="number" placeholder="available quantity" />
                    </div>
                    <div className="col-lg-12 w-full mb-3">
                        <textarea className="form-control" rows='8' name="detail" placeholder="type details"></textarea>
                    </div>
                </div>
                <button className="btn-all w-100">Post Toy</button>
            </form>
        </div>
    );
};

export default AddAToy;