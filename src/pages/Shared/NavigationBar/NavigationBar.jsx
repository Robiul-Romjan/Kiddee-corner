import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavigationBar.css"
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import logo from "/logo.png";

const NavigationBar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <Navbar className='navbar-container sticky-top' expand="lg">
            <Container>
            <Navbar.Brand className='header-title' href="/"><span><img className='logo' src={logo} alt="" /></span> <span className='text-primary fs-2 fw-bold'>Kiddie</span><span className='text-danger fw-bold'>Corner</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/" className='header-link'>Home</NavLink>
                        <NavLink to="/all-toys" className='header-link'>All Toys</NavLink>
                        {
                            loading ? <Spinner animation="grow" variant="danger" /> :
                            user ? <>
                                <NavLink to="/my-toys" className='header-link'>My Toys</NavLink>
                                <NavLink to="/add-toy" className='header-link'>Add A Toy</NavLink>
                            </> : ""
                        }
                        <NavLink to="/blogs" className='header-link'>Blogs</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        {loading ? <Spinner animation="grow" variant="danger" /> :
                            <>
                                {user ?
                                    <div className='user-profile'>
                                        {
                                            user.photoURL ?
                                                <img data-toggle="tooltip" data-placement="bottom" title={user?.displayName} className='profile-img me-3' src={user?.photoURL} alt="" /> : ""
                                        }
                                        <button onClick={handleLogOut} className='btn-all'>Log Out</button>
                                    </div> :
                                    <Link to="/login" variant="outline-success">
                                        <button className='ms-4 btn-all'>Login</button>
                                    </Link>
                                }
                            </>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;