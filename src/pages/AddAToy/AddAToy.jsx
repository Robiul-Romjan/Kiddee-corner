// Picture URL of the toy,
// Name,
// seller name (if available from the logged in user)
// seller email (info from the logged in user)
// Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
// Price,
// Rating,
// Available quantity
// Detail description

const AddAToy = () => {
    return (
        <div className="container add-toy-container mt-5 rounded">
            <h2 className="text-center mb-4">Add Your Toy</h2>
            <form className="w-75 mx-auto">
                <div className="row row-cols-2">
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
                    </div>
                    <div className="col">
                        <input className="form-control mb-3" name="photo" type="url" placeholder="toy image URL" />
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