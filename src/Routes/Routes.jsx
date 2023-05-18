import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import LogIn from "../pages/Login/LogIn";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToy from "../pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-toys",
                element: <AllToys />,
                loader: () => fetch("http://localhost:5000/allToys")
            },
            {
                path: "/view-details/:id",
                element: <PrivateRoute>
                    <ViewDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: "/my-toys",
                element: <PrivateRoute>
                    <MyToy />
                </PrivateRoute>
            },
            {
                path: "/add-toy",
                element: <PrivateRoute>
                    <AddAToy />
                </PrivateRoute>
            },
            {
                path: "/updateToy/:id",
                element: <PrivateRoute>
                    <UpdateToy />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            }
        ]
    }
])

export default router;