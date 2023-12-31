import banner from "/banner.png"

const Banner = () => {
    return (
        <div className="form-container">
            <div className="container row mx-auto d-flex align-items-center">
                <div className="col-lg-6" 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" 
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <h1 className="fw-bold">Explore a World of Wonder at <br /> Kiddie Corner!</h1>
                    <p className="lead my-4">Welcome to KiddieCorner
                        , your ultimate destination for all things animal-related! Our website is a haven for children and animal enthusiasts alike, offering a captivating collection of animal toys that will bring joy, education, and endless hours of fun.</p>
                    <button className="btn-all">Explore Now &#x2192;</button>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={banner} alt="" 
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" 
                        data-aos-mirror="true"
                        data-aos-once="false"
                     />
                </div>
            </div>
        </div>
    );
};

export default Banner;