import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebaseConfig/firebase.confiq';


const Register = () => {
    const [error, setError] = useState("");
    const auth = getAuth(app)

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {

        e.preventDefault();
        setError("")
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }

        createUser(email, password)
            .then(result => {
                const regUser = result.user;
                regUser.displayName = name;
                regUser.photoURL = photo;
                // setUser(regUser)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    setError(error)
                })
                console.log(regUser)
            })
            .catch(error => {
                setError(error.message)
            })

        form.reset()
    };


    return (
        <div className='w-50 mx-auto mt-5 py-4 border p-4 form-container form-container rounded'>
            <h2 className='text-center mb-4'>Please Sign Up</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URl</Form.Label>
                    <Form.Control name="photo" type="text" placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Text className="text-danger">
                    {error ? error : ""}
                </Form.Text>
                <button className="w-100 mt-4 btn-all" type="submit">
                    Register
                </button>
            </Form>
            <p className='mt-3'>Have an account? <Link to="/login">Please Login</Link></p>
        </div>
    );
};

export default Register;