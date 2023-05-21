import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateToy = () => {
    const toy = useLoaderData();
    // console.log(toy)
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        // console.log(price, quantity, detail)
        const newUpdatedToy = {
            price, quantity, detail
        }

        fetch(`https://assignment-11-server-sepia.vercel.app/usertoys/${toy._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUpdatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    };

    useEffect(()=>{
        document.title= "KiddieCorner | Update-Toy"
    }, [])

    return (
        <div className='form-container'>
            <h2 className="text-center">Update Your Toy</h2>
            <form className='p-4 w-50 mx-auto' onSubmit={handleUpdate}>
                <div>
                    <label className='fw-bold'>Update Price:</label>
                    <input type="number" name='price' className='form-control' defaultValue={toy?.price} />
                </div>
                <div className='my-4'>
                    <label className='fw-bold'>Update Quantity:</label>
                    <input type="number" name='quantity' className='form-control' defaultValue={toy?.quantity} />
                </div>

                <textarea className="form-control" rows='8' name="detail" defaultValue={toy?.detail} placeholder="type details"></textarea>
                <div className='text-center mt-4'>
                    <input type="submit" value="Update" className='btn-all' />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;