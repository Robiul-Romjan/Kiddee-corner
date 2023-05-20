import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {


    const [error, setError] = useState("")
    const { signInUser, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const handleLogin = e => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully login',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate(from, { replace: true }) || "/"
            })
            .catch(error => {
                setError(error.message)
            })
        form.reset()
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true }) || "/"
            })
            .catch(error => {
                setError(error.message)
            })
    };


    return (
        <div className='w-50 mx-auto mt-5 py-4 border p-4 form-container rounded'>
            <h2 className='text-center mb-4'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error ? error : ""}
                </Form.Text>
                <button className="w-100 mt-4 btn-all" type="submit">
                    Login
                </button>
            </Form>
            <button onClick={handleGoogleSignIn} className="w-100 mt-5 btn-all" type="submit">
                <FaGoogle className='me-3' />
                Sign in With Google
            </button>
            <p className='mt-3'>Do not have an account? <Link to="/register">Please Register</Link></p>
        </div>
    );
};

export default LogIn;