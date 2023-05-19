import exclusive from "/exclusive.png"

const Exclusive = () => {
    return (
        <div className="form-container mt-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 text-center">
                        <div>
                            <img className="exclusive-img mx-auto" src={exclusive} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="lead">Exclusively Available on Kiddie Corner</p>
                        <h1>Smart Teddy Bear 4</h1>
                        <p><small>Exclusive teddy bear featuring a limited edition design, crafted from luxurious materials, and in impeccable condition. A rare find for collectors and teddy bear enthusiasts seeking a unique and cherished addition to our collection.</small></p>
                        <button className="btn-all">Buy Now &#x2192;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;