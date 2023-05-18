import errorImg from "/error.png"
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='container mx-auto row d-flex align-items-center' style={{height:"100vh"}}>
        <div className="col text-center">
            <img src={errorImg} alt="" />
            <p className='text-danger fw-bold'>{error.data}</p>
            <Link to="/"><button className='btn-all'>Go to home page</button></Link>
        </div>  
    </div>
    );
};

export default ErrorPage;